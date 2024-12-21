document.addEventListener('DOMContentLoaded', () => {
	const video = document.getElementById('video');
	const playPauseButton = document.getElementById('play-pause');
	const muteUnmuteButton = document.getElementById('mute-unmute');
	const timeRemaining = document.getElementById('time-remaining');
	const replayButton = document.getElementById('replay');

	const updateRemainingTime = () => {
			const remainingTime = Math.floor(video.duration - video.currentTime);
			const minutes = Math.floor(remainingTime / 60);
			const seconds = remainingTime % 60;
			timeRemaining.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

	video.addEventListener('timeupdate', updateRemainingTime);

	playPauseButton.addEventListener('click', () => {
			if (video.paused) {
					video.play();
					playPauseButton.textContent = 'Пауза';
			} else {
					video.pause();
					playPauseButton.textContent = 'Воспроизвести';
			}
	});

	muteUnmuteButton.addEventListener('click', () => {
			video.muted = !video.muted;
			muteUnmuteButton.textContent = video.muted ? 'Включить звук' : 'Выключить звук';
	});

	replayButton.addEventListener('click', () => {
			video.currentTime = 0;
			video.play();
	});

	const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
					if (entry.isIntersecting) {
							video.play();
					} else {
							video.pause();
					}
			});
	});

	observer.observe(video);
});