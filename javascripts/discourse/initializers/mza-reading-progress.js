import { withPluginApi } from "discourse/lib/plugin-api";

const PLUGIN_ID = "mza-reading-progress";

// Throttle function using requestAnimationFrame
function rafThrottle(callback) {
  let ticking = false;
  return function (...args) {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        callback.apply(this, args);
        ticking = false;
      });
    }
  };
}

function createProgressBar() {
  // Check if progress bar already exists
  let container = document.querySelector(".mza-reading-progress");
  if (container) {
    return container;
  }

  // Create progress bar elements
  container = document.createElement("div");
  container.className = "mza-reading-progress";

  const bar = document.createElement("div");
  bar.className = "mza-reading-progress-bar";

  container.appendChild(bar);
  document.body.appendChild(container);

  return container;
}

function updateProgressBar() {
  const bar = document.querySelector(".mza-reading-progress-bar");
  if (!bar) {
    return;
  }

  const docHeight = document.documentElement.scrollHeight;
  const winHeight = window.innerHeight;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Calculate scroll percentage
  const scrollableHeight = docHeight - winHeight;
  if (scrollableHeight <= 0) {
    bar.style.width = "100%";
    return;
  }

  const scrollPercent = Math.min(100, (scrollTop / scrollableHeight) * 100);
  bar.style.width = `${scrollPercent}%`;
}

function showProgressBar() {
  const container = document.querySelector(".mza-reading-progress");
  if (container) {
    container.classList.remove("hidden");
  }
}

function hideProgressBar() {
  const container = document.querySelector(".mza-reading-progress");
  if (container) {
    container.classList.add("hidden");
  }
}

function initializeReadingProgress(api) {
  let scrollHandler = null;
  let resizeHandler = null;
  let isTopicPage = false;

  // Create progress bar on initialization
  createProgressBar();
  hideProgressBar(); // Hidden by default

  // Check if current route is a topic page
  function checkIfTopicPage(routeName) {
    return routeName && routeName.startsWith("topic");
  }

  // Setup scroll/resize listeners
  function setupListeners() {
    if (scrollHandler) {
      return; // Already setup
    }

    scrollHandler = rafThrottle(updateProgressBar);
    resizeHandler = rafThrottle(updateProgressBar);

    window.addEventListener("scroll", scrollHandler, { passive: true });
    window.addEventListener("resize", resizeHandler, { passive: true });

    // Initial update
    updateProgressBar();
  }

  // Remove listeners
  function teardownListeners() {
    if (scrollHandler) {
      window.removeEventListener("scroll", scrollHandler);
      scrollHandler = null;
    }
    if (resizeHandler) {
      window.removeEventListener("resize", resizeHandler);
      resizeHandler = null;
    }
  }

  // Route change handler
  api.onPageChange((url, routeName) => {
    const wasTopicPage = isTopicPage;
    isTopicPage = checkIfTopicPage(routeName);

    if (isTopicPage) {
      showProgressBar();
      setupListeners();
      // Update after a small delay to ensure DOM is ready
      setTimeout(updateProgressBar, 100);
    } else if (wasTopicPage) {
      hideProgressBar();
      teardownListeners();
    }
  });

  // Cleanup on app destroy (if available)
  api.cleanupStream(() => {
    teardownListeners();
    const container = document.querySelector(".mza-reading-progress");
    if (container) {
      container.remove();
    }
  });
}

export default {
  name: PLUGIN_ID,

  initialize() {
    withPluginApi("0.8.31", initializeReadingProgress);
  },
};
