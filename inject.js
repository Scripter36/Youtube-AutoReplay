var rightControls = document.getElementsByClassName("ytp-right-controls");
if (rightControls.length != 0) {
    for (var i = 0; i < rightControls.length; i++) {
        var rightControl = rightControls[i];
        var multicamButtons = rightControl.getElementsByClassName("ytp-multicam-button");
        if (multicamButtons.length < 1) continue;
        var found = undefined;
        for (var j in rightControl.children) {
            if (rightControl.children[j].id == "autoReplayButton") {
                found = rightControl.children[j];
                break;
            }
        }
        var replayButton, use, path;
        if (found) {
            replayButton = rightControl.children[j];
            use = replayButton.children[0].children[0];
            path = replayButton.children[0].children[1];
            continue;
        }
        var multicamButton = multicamButtons[0];
        replayButton = multicamButton.cloneNode(true);
        replayButton.setAttribute("title", "Auto-Replay Off");
        replayButton.setAttribute("class", "ytp-button");
        replayButton.setAttribute("id", "autoReplayButton");
        replayButton.setAttribute("style", "");
        use = replayButton.children[0].children[0];
        use.setAttribute("href", "#ytp-id-replay");
        path = replayButton.children[0].children[1];
        path.setAttribute("d", "M 18,11 V 7 l -5,5 5,5 v -4 c 3.3,0 6,2.7 6,6 0,3.3 -2.7,6 -6,6 -3.3,0 -6,-2.7 -6,-6 h -2 c 0,4.4 3.6,8 8,8 4.4,0 8,-3.6 8,-8 0,-4.4 -3.6,-8 -8,-8 z");
        path.setAttribute("id", "ytp-id-replay");
        path.setAttribute("fill", "rgba(255, 255, 255, 0.5)");
        rightControl.appendChild(replayButton);
        replayButton.addEventListener("click", function (event) {
            var title = replayButton.getAttribute("title");
            if (title == "Auto-Replay Off") {
                replayButton.setAttribute("title", "Auto-Replay On");
                path.setAttribute("fill", "rgba(255, 255, 255, 1)");
            } else {
                replayButton.setAttribute("title", "Auto-Replay Off");
                path.setAttribute("fill", "rgba(255, 255, 255, 0.5)");
            }
        });
        var leftControl = rightControl.parentElement.children[0];
        var playButtons = leftControl.getElementsByClassName("ytp-play-button");
        if (playButtons.length < 1) continue;
        var playButton = playButtons[0];
        var observer = new MutationObserver(function (mutations) {
            if (playButton.attributes.title != undefined && replayButton.getAttribute("title") == "Auto-Replay On") {
                playButton.click();
            }
        });
        var config = { attributes: true, childList: true, characterData: true }
        observer.observe(playButton, config);
    }
}