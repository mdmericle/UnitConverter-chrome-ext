console.log("Background service worker loaded.");

// Example: Listen for when extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed or updated.");
});

// Optional: Listen for a message (e.g. from popup)
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log("Received message in background:", msg);
    sendResponse({ ack: true });
});