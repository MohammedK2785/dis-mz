import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("1.14.0", (api) => {
  // Mza3et Theme - Reposition custom elements
  // Migrated from legacy head_tag.html
  
  api.onPageChange(() => {
    repositionElements();
  });
  
  function repositionElements() {
    // Find the custom elements
    const topbar = document.querySelector('.mza-topbar');
    const sectionTabs = document.querySelector('.mza-section-tabs');
    
    // Exit early if elements don't exist
    if (!topbar && !sectionTabs) {
      return;
    }
    
    // Find the best anchor point
    const mainOutlet = document.querySelector('#main-outlet');
    const dHeader = document.querySelector('.d-header');
    
    let insertionPoint = null;
    let insertAfter = false;
    
    if (mainOutlet) {
      // Preferred: insert before #main-outlet
      insertionPoint = mainOutlet;
      insertAfter = false;
    } else if (dHeader) {
      // Fallback: insert after .d-header
      insertionPoint = dHeader;
      insertAfter = true;
    }
    
    // Move the elements if we found an insertion point
    if (insertionPoint) {
      if (insertAfter) {
        // Insert after .d-header
        const referenceNode = insertionPoint.nextSibling;
        if (topbar) {
          insertionPoint.parentNode.insertBefore(topbar, referenceNode);
        }
        if (sectionTabs) {
          // Insert section tabs after topbar
          const newReferenceNode = topbar ? topbar.nextSibling : referenceNode;
          insertionPoint.parentNode.insertBefore(sectionTabs, newReferenceNode);
        }
      } else {
        // Insert before #main-outlet
        if (topbar) {
          insertionPoint.parentNode.insertBefore(topbar, insertionPoint);
        }
        if (sectionTabs) {
          // Insert section tabs after topbar but before main-outlet
          const newReferenceNode = topbar ? topbar.nextSibling : insertionPoint;
          insertionPoint.parentNode.insertBefore(sectionTabs, newReferenceNode);
        }
      }
    }
  }
});
