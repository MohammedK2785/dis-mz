import { apiInitializer } from "discourse/lib/api";
import icon from "discourse/helpers/d-icon";

// Compact stats header cell - displays a combined icon header
const CompactStatsHeaderCell = <template>
  <th class="mza-compact-stats-header" aria-label="Statistics">
    {{icon "chart-bar"}}
  </th>
</template>;

// Compact stats item cell - displays replies and views in a compact inline format
const CompactStatsItemCell = <template>
  <td class="mza-compact-stats-cell">
    <div class="mza-compact-stats">
      <span class="mza-stat-item" aria-label="{{@topic.replyCount}} replies">
        {{icon "comment"}}
        <span>{{@topic.replyCount}}</span>
      </span>
      <span class="mza-stat-item" aria-label="{{@topic.views}} views">
        {{icon "eye"}}
        <span>{{@topic.views}}</span>
      </span>
    </div>
  </td>
</template>;

export default apiInitializer("1.34", (api) => {
  try {
    // Guard: read from theme settings (settings is injected by the theme compiler)
    // compact_topic_stats is a theme setting defined in settings.yml, not a site setting
    if (!settings.compact_topic_stats) {
      return;
    }

    // Guard: ensure registerValueTransformer is available
    if (typeof api.registerValueTransformer !== "function") {
      return;
    }

    // Add body class to enable compact stats CSS
    document.body.classList.add("compact-topic-stats-enabled");

    // Use the modern transformer API to customize topic list columns
    api.registerValueTransformer("topic-list-columns", ({ value: columns }) => {
      // Remove the default stats columns to replace with compact version
      columns.delete("replies");
      columns.delete("views");

      // Add our compact stats column after "activity"
      columns.add(
        "compact-stats",
        {
          header: CompactStatsHeaderCell,
          item: CompactStatsItemCell,
        },
        { before: "activity" }
      );

      return columns;
    });
  } catch (error) {
    console.warn(
      "[mza-theme] mza-compact-topic-stats initializer failed",
      error
    );
  }
});
