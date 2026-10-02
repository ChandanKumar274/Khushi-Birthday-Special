// Web Audio API Synthesizer for Birthday Sound Effects & Music
// 100% offline, zero external audio dependency required!

class BirthdayAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlayingMusic = false;
    this.musicTimeout = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a gentle music box tone
  playTone(freq, duration = 0.3, type = 'sine', delay = 0, gainLevel = 0.15) {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const startTime = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    // Warm music box envelope
    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(gainLevel, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }

  // Sparkle chime effect for buttons / likes
  playSparkle() {
    if (this.isMuted) return;
    this.init();
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      this.playTone(freq, 0.25, 'triangle', i * 0.06, 0.12);
    });
  }

  // Balloon pop sound effect
  playPop() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(240, t);
    osc.frequency.exponentialRampToValueAtTime(50, t + 0.08);

    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.08);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.09);
  }

  // Candle blowing whoosh sound
  playBlow() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const bufferSize = this.ctx.sampleRate * 0.5;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(450, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    const t = this.ctx.currentTime;
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.3, t + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(t);
    noise.stop(t + 0.5);
  }

  // Cheer / Celebration fanfare
  playCheer() {
    if (this.isMuted) return;
    this.init();
    const chords = [
      { notes: [523.25, 659.25, 783.99], delay: 0 },
      { notes: [587.33, 739.99, 880.00], delay: 0.15 },
      { notes: [659.25, 783.99, 1046.50], delay: 0.3 },
      { notes: [783.99, 987.77, 1318.51], delay: 0.5 },
    ];

    chords.forEach(({ notes, delay }) => {
      notes.forEach((freq) => {
        this.playTone(freq, 0.45, 'triangle', delay, 0.1);
      });
    });
  }

  // Happy Birthday Song melody player
  startBirthdayMelody(onLoop = true) {
    this.init();
    this.isPlayingMusic = true;

    // Frequencies for Happy Birthday (Key of C)
    // C4=261.6, D4=293.7, E4=329.6, F4=349.2, G4=392.0, A4=440.0, B4=493.9, C5=523.3
    const melody = [
      { note: 261.63, dur: 0.3, pause: 0.35 }, // Hap-
      { note: 261.63, dur: 0.2, pause: 0.25 }, // py
      { note: 293.66, dur: 0.5, pause: 0.55 }, // Birth-
      { note: 261.63, dur: 0.5, pause: 0.55 }, // day
      { note: 349.23, dur: 0.5, pause: 0.55 }, // to
      { note: 329.63, dur: 0.9, pause: 1.0 },  // you

      { note: 261.63, dur: 0.3, pause: 0.35 }, // Hap-
      { note: 261.63, dur: 0.2, pause: 0.25 }, // py
      { note: 293.66, dur: 0.5, pause: 0.55 }, // Birth-
      { note: 261.63, dur: 0.5, pause: 0.55 }, // day
      { note: 392.00, dur: 0.5, pause: 0.55 }, // to
      { note: 349.23, dur: 0.9, pause: 1.0 },  // you

      { note: 261.63, dur: 0.3, pause: 0.35 }, // Hap-
      { note: 261.63, dur: 0.2, pause: 0.25 }, // py
      { note: 523.25, dur: 0.5, pause: 0.55 }, // Birth-
      { note: 440.00, dur: 0.5, pause: 0.55 }, // day
      { note: 349.23, dur: 0.5, pause: 0.55 }, // dear
      { note: 329.63, dur: 0.5, pause: 0.55 }, // Khu-
      { note: 293.66, dur: 0.9, pause: 1.0 },  // shi!

      { note: 466.16, dur: 0.3, pause: 0.35 }, // Hap-
      { note: 466.16, dur: 0.2, pause: 0.25 }, // py
      { note: 440.00, dur: 0.5, pause: 0.55 }, // Birth-
      { note: 349.23, dur: 0.5, pause: 0.55 }, // day
      { note: 392.00, dur: 0.5, pause: 0.55 }, // to
      { note: 349.23, dur: 1.2, pause: 1.5 },  // you!
    ];

    let currentOffset = 0;
    melody.forEach((item) => {
      if (!this.isPlayingMusic) return;
      setTimeout(() => {
        if (this.isPlayingMusic && !this.isMuted) {
          // Play warm music box tone with harmony note
          this.playTone(item.note, item.dur, 'sine', 0, 0.15);
          this.playTone(item.note * 0.5, item.dur * 0.8, 'triangle', 0, 0.05);
        }
      }, currentOffset * 1000);
      currentOffset += item.pause;
    });

    if (onLoop) {
      this.musicTimeout = setTimeout(() => {
        if (this.isPlayingMusic) {
          this.startBirthdayMelody(true);
        }
      }, (currentOffset + 2) * 1000);
    }
  }

  stopBirthdayMelody() {
    this.isPlayingMusic = false;
    if (this.musicTimeout) {
      clearTimeout(this.musicTimeout);
      this.musicTimeout = null;
    }
  }

  toggleMusic() {
    if (this.isPlayingMusic) {
      this.stopBirthdayMelody();
      return false;
    } else {
      this.startBirthdayMelody(true);
      return true;
    }
  }
}

export const soundEffects = new BirthdayAudioEngine();
