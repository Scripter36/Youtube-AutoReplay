var last;
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    window.tab = tab;
    if (tab.status == "complete") {
        //alert("loaded your page! hooray!");
        chrome.tabs.executeScript(tab.id, {
            file: "inject.js"
        }, function () {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
        });
    }
});