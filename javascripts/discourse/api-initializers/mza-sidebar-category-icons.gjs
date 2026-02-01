import { apiInitializer } from "discourse/lib/api";

// Category slug to icon mapping
// Using Font Awesome icons that are included in Discourse
const CATEGORY_ICONS = {
  general: "comments",
  announcements: "bullhorn",
  staff: "shield-halved",
  lounge: "couch",
  "site-feedback": "comment-dots",
  meta: "info-circle",
  blog: "newspaper",
  support: "life-ring",
  help: "circle-question",
  uncategorized: "folder",
  // Arabic category slugs
  عام: "comments",
  اعلانات: "bullhorn",
  الموظفين: "shield-halved",
  // Morocco-specific categories
  morocco: "mosque",
  المغرب: "mosque",
  travel: "plane",
  السفر: "plane",
  cars: "car",
  السيارات: "car",
  offers: "tags",
  العروض: "tags",
  reports: "file-lines",
  التقارير: "file-lines",
  questions: "circle-question",
  الاستفسارات: "circle-question",
};

// Default icon for categories not in the mapping
const DEFAULT_ICON = "folder";

export default apiInitializer("1.34", (api) => {
  try {
    // Guard: ensure decorateCategorySectionLink is available
    if (typeof api.decorateCategorySectionLink !== "function") {
      return;
    }

    // Decorate sidebar category section links with icons
    api.decorateCategorySectionLink((category, args) => {
      if (!category?.slug) {
        return;
      }

      const iconName = CATEGORY_ICONS[category.slug] || DEFAULT_ICON;

      // Add icon prefix to the category link
      args.prefixType = "icon";
      args.prefixValue = iconName;
    });
  } catch (error) {
    console.warn("[mza-theme] mza-sidebar-category-icons initializer failed", error);
  }
});
