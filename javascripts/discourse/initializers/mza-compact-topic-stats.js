import { withPluginApi } from "discourse/lib/plugin-api";

const PLUGIN_ID = "mza-compact-topic-stats";

function initializeCompactTopicStats(api) {
  const siteSettings = api.container.lookup("service:site-settings");

  // Only proceed if the setting is enabled
  if (!siteSettings.compact_topic_stats) {
    return;
  }

  api.decorateWidget("topic-list-item:after", (helper) => {
    try {
      const topic = helper.attrs.topic;
      if (!topic) {
        return;
      }

      // Extract stats data safely
      const replies = topic.posts_count ? topic.posts_count - 1 : 0;
      const views = topic.views || 0;
      const activity = topic.last_posted_at || topic.bumped_at;

      // Create compact inline stats HTML
      return helper.h("div.mza-compact-stats", [
        helper.h("span.mza-stat-item", [
          helper.h("svg.fa.d-icon.d-icon-comment", {
            attributes: { "aria-hidden": "true" },
          }),
          helper.h("span", `${replies}`),
        ]),
        helper.h("span.mza-stat-item", [
          helper.h("svg.fa.d-icon.d-icon-eye", {
            attributes: { "aria-hidden": "true" },
          }),
          helper.h("span", `${views}`),
        ]),
      ]);
    } catch (e) {
      // Fail gracefully
      console.warn("mza-compact-topic-stats: Error decorating topic", e);
      return null;
    }
  });
}

export default {
  name: PLUGIN_ID,

  initialize(container) {
    const siteSettings = container.lookup("service:site-settings");

    // Only initialize if setting is enabled
    if (!siteSettings.compact_topic_stats) {
      return;
    }

    withPluginApi("0.8.31", initializeCompactTopicStats);
  },
};
