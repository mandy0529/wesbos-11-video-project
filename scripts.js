const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progressFilled = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');
const playBtn = document.querySelector('.toggle');
const range = document.querySelectorAll('.player__slider');
const skipBtn = document.querySelectorAll('[data-skip]');

const handleUpdate = () => {
  const control = video.paused ? '✅' : '⏸';
  playBtn.textContent = control;
};

const handlePlayControl = () => {
  const control = video.paused ? 'play' : 'pause';
  video[control]();
  handleUpdate();
};

const handleSkip = (e) => {
  const skipTime = e.target.dataset.skip;
  video.currentTime += Number(skipTime);
};

const handleRange = (e) => {
  video[e.target.name] = e.target.value;
};

const handleTimeUpdate = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.flexBasis = `${percent}%`;
};

const handleProgressClick = (e) => {
  const controlWidth = (e.offsetX / progress.clientWidth) * video.duration;
  video.currentTime = controlWidth;
};

playBtn.addEventListener('click', handlePlayControl);
video.addEventListener('click', handlePlayControl);
skipBtn.forEach((btn) => btn.addEventListener('click', handleSkip));
range.forEach((input) => input.addEventListener('input', handleRange));
video.addEventListener('timeupdate', handleTimeUpdate);
progress.addEventListener('click', handleProgressClick);
