'use strict';

class AudioPlayer {
    constructor() {
        this.audio = new Audio();
        this.isPlaying = false;
    }

    playAudio(url) {
        this.audio.src = url;
        this.audio.play();
        this.isPlaying = true;

        this.audio.onended = () => {
            this.isPlaying = false;
        };
    }

    pauseAudio() {
        this.audio.pause();
        this.isPlaying = false;
    }

    resumeAudio() {
        if (!this.isPlaying) {
            this.audio.play();
            this.isPlaying = true;
        }
    }

    stopAudio() {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
    }
}

// Example usage
const audioPlayer = new AudioPlayer();

// To play word-by-word audio
// audioPlayer.playAudio('word_audio_url');

// To play full ayah audio
// audioPlayer.playAudio('full_ayah_audio_url');
