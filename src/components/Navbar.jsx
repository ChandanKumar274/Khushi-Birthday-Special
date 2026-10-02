import React, { useState } from 'react';
import { Heart, Music, Volume2, VolumeX, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../utils/audio';

export default function Navbar({ onOpenPhotoHelper }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMusic = () => {
    soundEffects.playSparkle();
    const playing = soundEffects.toggleMusic();
    setIsPlaying(playing);
  };

  const toggleMute = () => {
    soundEffects.isMuted = !isMuted;
    setIsMuted(!isMuted);
    if (!isMuted) {
      soundEffects.stopBirthdayMelody();
      setIsPlaying(false);
    }
  };

  const triggerConfetti = () => {
    soundEffects.playCheer();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.15 },
      colors: ['#ff4b82', '#ff8fb0', '#ffffff', '#ffd1dc', '#ff1493']
    });
  };

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 182, 193, 0.45)',
      boxShadow: '0 4px 18px rgba(255, 75, 130, 0.08)'
    }}>
      {/* Top Bar: Brand + Controls */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '10px 14px 6px 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px'
      }}>
        {/* Brand Left */}
        <div
          onClick={triggerConfetti}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            flex: '1 1 auto',
            minWidth: 0
          }}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #ff4b82, #ff8fb0)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            flexShrink: 0,
            boxShadow: '0 3px 10px rgba(255, 75, 130, 0.35)'
          }}>
            <Heart size={18} fill="#ffffff" />
          </div>

          <div style={{ minWidth: 0, overflow: 'hidden' }}>
            <h1 style={{
              fontSize: 'clamp(1rem, 3.8vw, 1.3rem)',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #ff4b82 0%, #d61f5c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              Khushi Darling! 🌸
            </h1>
            <span style={{
              fontSize: '0.66rem',
              color: 'var(--text-muted)',
              fontWeight: 600,
              letterSpacing: '0.3px',
              display: 'block',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              BESTFRIEND • BUDDY • MERI JAAN ✨
            </span>
          </div>
        </div>

        {/* Action Controls Right (Compact on Mobile, Never Overlaps!) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          flexShrink: 0
        }}>
          {/* Music Button */}
          <button
            onClick={toggleMusic}
            style={{
              padding: '7px 11px',
              borderRadius: '50px',
              border: 'none',
              background: isPlaying ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ff4b82, #ff7597)',
              color: '#ffffff',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
              fontSize: '0.78rem',
              fontWeight: 700,
              boxShadow: '0 3px 10px rgba(255, 75, 130, 0.28)',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
            title={isPlaying ? "Stop Music" : "Play Birthday Music"}
          >
            <Music size={14} className={isPlaying ? "animate-spin-slow" : ""} />
            <span className="hide-on-mobile">{isPlaying ? "Playing 🎶" : "Music 🎵"}</span>
          </button>

          {/* Sound Toggle Button */}
          <button
            onClick={toggleMute}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1.5px solid rgba(255, 182, 193, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: isMuted ? '#9ca3af' : 'var(--primary-pink)',
              boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              flexShrink: 0
            }}
            title={isMuted ? "Unmute Sound" : "Mute Sound"}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>

          {/* Confetti Button */}
          <button
            onClick={triggerConfetti}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ff4b82, #ff7597)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              boxShadow: '0 3px 8px rgba(255, 75, 130, 0.3)',
              flexShrink: 0
            }}
            title="Shower Confetti!"
          >
            <PartyPopper size={15} />
          </button>
        </div>
      </div>

      {/* Bottom Horizontal Swipeable Navigation Tabs */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 10px 8px 10px'
      }}>
        <div style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          padding: '4px 6px',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
          <a href="#memories" className="white-pink-btn" style={{ padding: '5px 13px', fontSize: '0.8rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
            📸 Memories
          </a>
          <a href="#cake" className="white-pink-btn" style={{ padding: '5px 13px', fontSize: '0.8rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
            🎂 Cake
          </a>
          <a href="#balloons" className="white-pink-btn" style={{ padding: '5px 13px', fontSize: '0.8rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
            🎈 Balloons
          </a>
          <a href="#letter" className="white-pink-btn" style={{ padding: '5px 13px', fontSize: '0.8rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
            💌 Letter
          </a>
          <a href="#gift" className="white-pink-btn" style={{ padding: '5px 13px', fontSize: '0.8rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
            🎁 Gift
          </a>
          <a href="#wishes" className="white-pink-btn" style={{ padding: '5px 13px', fontSize: '0.8rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
            🌟 Wishes
          </a>
          <a href="#quiz" className="white-pink-btn" style={{ padding: '5px 13px', fontSize: '0.8rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
            💡 Quiz
          </a>
        </div>
      </div>
    </nav>
  );
}
