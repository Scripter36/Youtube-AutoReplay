var last;
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    chrome.tabs.executeScript(tab.id, {
        file: "inject.js",
        allFrames: true
    }, function () {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        }
    });
});