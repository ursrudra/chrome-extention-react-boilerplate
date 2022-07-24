// will run when onInstalled event is triggered (on extension installed)
chrome.runtime.onInstalled.addListener(() => {
  // creating context menu
  chrome.contextMenus.create({
    title: "Title",
    contexts: ["selection"],
    id: "uniqueIDofExtension",
  });

  // create alarms
  chrome.alarms.create({
    periodInMinutes: 60, //Time in minutes
  });
});

// Execute logic when alarm triggers
chrome.alarms.onAlarm.addListener(() => {});

// Listening contextmenu click events
chrome.contextMenus.onClicked.addListener((event) => {});
