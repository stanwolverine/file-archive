"use strict";
// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");
function handleThemeChange(e) {
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", e.matches ? "#f7f7f7" : "#121212");
}
mediaQuery.addListener(handleThemeChange);
// Initial check
handleThemeChange(mediaQuery);
