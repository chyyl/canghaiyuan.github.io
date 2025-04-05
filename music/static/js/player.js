class AudioPlayer {
    constructor() {
        this.audio = new Audio();
        this.progress = document.querySelector('.progress');
        this.initEvents();
    }

    initEvents() {
        document.querySelector('.play-btn').addEventListener('click', () => {
            this.audio.paused ? this.audio.play() : this.audio.pause();
        });
        
        document.querySelector('.progress-bar').addEventListener('click', (e) => {
            const rect = e.target.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            this.audio.currentTime = pos * this.audio.duration;
        });
    }
}

// 初始化播放器
window.addEventListener('DOMContentLoaded', () => {
    const player = new AudioPlayer();
    player.audio.src = document.getElementById('song-url').dataset.src;
    
    player.audio.ontimeupdate = () => {
        const progress = (player.audio.currentTime / player.audio.duration) * 100;
        document.querySelector('.progress').style.width = `${progress}%`;
    };
});