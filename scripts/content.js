
const muteButton = document.querySelector("button.ytp-mute-button");
const observer = new MutationObserver((m) => {
    m.forEach((mut) => {
        if (mut.type === 'attributes'){
            let vidString = mut.target.className;
            if(vidString.indexOf('ad-showing') !== -1){
                console.log("Ad is showing");
                if(muteButton.getAttribute("data-title-no-tooltip") === "Mute"){
                    muteButton.click();
                }
            }
            else{
                if(muteButton.getAttribute("data-title-no-tooltip") === "Unmute"){
                    muteButton.click();
                }
            }
        }
    })
});

// Video Player Selector: div#movie_player
//Volume Selector: div.ytp-volume-panel

observer.observe(document.querySelector("div#movie_player"), {
    attributeFilter: ["class"]
})

// During Ad:

//content.js:5 html5-video-player ytp-transparent ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-exp-ppp-update ytp-cairo-refresh ytp-cairo-refresh-signature-moments
//ad-created ad-showing ad-interrupting ytp-fit-cover-video ytp-bigboards ytp-fine-scrubbing-exp ytp-hide-info-bar ytp-large-width-mode playing-mode

// After Ad:

//html5-video-player ytp-transparent ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-exp-ppp-update ytp-cairo-refresh ytp-cairo-refresh-signature-moments
//ad-created ytp-fit-cover-video ytp-bigboards ytp-fine-scrubbing-exp ytp-hide-info-bar ytp-large-width-mode ytp-heat-map-v2 ytp-heat-map
// ytp-autonav-endscreen-cancelled-state ytp-iv-drawer-enabled paused-mode