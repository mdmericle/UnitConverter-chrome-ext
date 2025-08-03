import "js/data/units.js";
import "js/common.js";
import "js/settings_loadsavedel.js";
import "js/jquery/jquery-2.0.3.min.js";

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