import Player from '@vimeo/player';
import { throttle } from "lodash";

const iframe = document.querySelector('iframe');
console.log(iframe);


const player = new Player(iframe, {
    // id: 19231868,
    // width: 640
});

const saveToLocalStorage = function(data) {
    console.log(data.seconds);
    localStorage.setItem("videoplayer-current-time", data.seconds);
}

player.on('timeupdate', throttle(saveToLocalStorage, 2000)
);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
