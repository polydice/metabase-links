chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  chrome.tabs.executeScript({
    file: 'autolink-min.js'
  });
  chrome.tabs.executeScript({
    file: 'metabase-links.js'
  });
});
