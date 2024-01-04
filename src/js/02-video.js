import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
const key = 'videoplayer-current-time';
const initTime = localStorage.getItem(key);

player.on(
  'timeupdate',
  throttle(time => localStorage.setItem(key, time.seconds), 1000, {
    leading: false,
  })
);

if (initTime != null) {
  player.setCurrentTime(+initTime);
}
