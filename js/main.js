$('video').mediaelementplayer({
    features: ['playpause', 'current', 'progress', 'volume', 'fullscreen'],
});


const video = document.querySelector('video');
const allSpans = document.querySelectorAll('.transcript span')


//As video plays - current section highlights
video.addEventListener('timeupdate', () => {
    const currentTime = video.getCurrentTime();

    for (let i = 0; i < allSpans.length; i++) {    //loops through each span
        const span = allSpans[i];
        const start = parseFloat(span.dataset.start);  //takes the string and returns it as a decimal
        const end = parseFloat(span.dataset.end);

        if (currentTime > start && currentTime < end) { 
            span.classList.add("highlight");    //highlighted color
        } else {
            span.classList.remove("highlight");  //default color
        }
    }
});


//On click, video jumps to target section
for  (let i = 0; i < allSpans.length; i++) {
    const span = allSpans[i];
    const start = parseFloat(span.dataset.start);
    const end = parseFloat(span.dataset.end);

    span.addEventListener('click', () => {
        if (span) {
            video.setCurrentTime(start); 
            video.play();
        }
    }); 
};

    