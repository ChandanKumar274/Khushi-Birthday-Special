import React, { useEffect, useState, useCallback } from 'react';
import { Sparkles, Heart, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../utils/audio';

const BURST_EMOJIS = ['💖', '✨', '🌸', '🎈', '🎂', '👑', '⭐', '🥳', '💕', '🎀'];

const AMBIENT_BALLOONS = [
  { id: 1, left: '4%', delay: '0s', duration: '18s', color: '#ff6b95', size: '36px' },
  { id: 2, left: '14%', delay: '6s', duration: '22s', color: '#ffa8c5', size: '42px' },
  { id: 3, left: '26%', delay: '12s', duration: '19s', color: '#ff85a2', size: '34px' },
  { id: 4, left: '74%', delay: '3s', duration: '21s', color: '#ff7597', size: '44px' },
  { id: 5, left: '86%', delay: '9s', duration: '17s', color: '#ffaec8', size: '38px' },
  { id: 6, left: '94%', delay: '15s', duration: '20s', color: '#ff5c8a', size: '35px' },
];

const BUNTING_COLORS = [
  '#ff4b82', '#ffa8c5', '#ffd700', '#ff7597', '#ffffff', '#ff9ebb',
  '#ff4b82', '#ffd700', '#ffa8c5', '#ff6b95', '#ffffff', '#ff85a2',
  '#ff4b82', '#ffa8c5', '#ffd700', '#ff7597', '#ffffff', '#ff9ebb'
];

export default function BirthdayAnimations() {
  const [particles, setParticles] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);

  // Tap / Click burst effect anywhere on screen
  const handlePointerDown = useCallback((e) => {
    // Avoid interfering if clicked on an input or textarea
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    const x = e.clientX;
    const y = e.clientY;

    const newParticles = Array.from({ length: 8 }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / 8 + (Math.random() * 0.4 - 0.2);
      const distance = 40 + Math.random() * 70;
      const dx = `${Math.cos(angle) * distance}px`;
      const dy = `${Math.sin(angle) * distance}px`;
      const rot = `${(Math.random() - 0.5) * 120}deg`;
      const emoji = BURST_EMOJIS[Math.floor(Math.random() * BURST_EMOJIS.length)];

      return {
        id: `${Date.now()}-${i}-${Math.random()}`,
        x,
        y,
        dx,
        dy,
        rot,
        emoji,
      };
    });

    setParticles((prev) => [...prev.slice(-30), ...newParticles]);

    // Clean up particles after animation completes
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)));
    }, 1200);
  }, []);

  useEffect(() => {
    window.addEventListener('pointerdown', handlePointerDown);
    return () => window.removeEventListener('pointerdown', handlePointerDown);
  }, [handlePointerDown]);

  // Grand Celebration blast trigger
  const handleCelebrateClick = () => {
    soundEffects.playCheer();

    // Dual confetti cannons
    confetti({
      particleCount: 70,
      angle: 60,
      spread: 65,
      origin: { x: 0, y: 0.8 },
      colors: ['#ff4b82', '#ff8fb0', '#ffffff', '#ffd700']
    });

    confetti({
      particleCount: 70,
      angle: 120,
      spread: 65,
      origin: { x: 1, y: 0.8 },
      colors: ['#ff4b82', '#ff8fb0', '#ffffff', '#ffd700']
    });

    // Secondary burst in center
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.5 },
        colors: ['#ff1493', '#ff69b4', '#ffffff', '#ffd700']
      });
    }, 250);

    const wishes = [
      "Khushi darling, you are 1 in 8 Billion! 💖✨",
      "Happy Birthday to the sweetest buddy! 🎂🥳",
      "Always keep smiling like a queen, Khushi! 👑🌸",
      "Best friend forever & crime partner! 🫂🍕",
      "May all your sweetest dreams come true! 🌈💕"
    ];
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    setToastMessage(randomWish);

    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  return (
    <>
      {/* Top Birthday Bunting Garland */}
      <div className="bunting-garland" aria-hidden="true">
        {BUNTING_COLORS.map((color, i) => (
          <div
            key={i}
            className="bunting-flag"
            style={{
              borderTop: `28px solid ${color}`,
              animationDelay: `${(i % 5) * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Ambient Rising Pastel Balloons */}
      <div aria-hidden="true">
        {AMBIENT_BALLOONS.map((b) => (
          <div
            key={b.id}
            className="ambient-balloon"
            style={{
              left: b.left,
              animationDelay: b.delay,
              animationDuration: b.duration,
              filter: `drop-shadow(0 6px 12px ${b.color}40)`,
            }}
          >
            <div
              style={{
                width: b.size,
                height: `calc(${b.size} * 1.25)`,
                borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                background: `radial-gradient(circle at 30% 30%, #ffffff 0%, ${b.color} 70%)`,
                position: 'relative',
              }}
            >
              {/* String */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-24px',
                  left: '50%',
                  width: '1px',
                  height: '24px',
                  backgroundColor: 'rgba(255, 120, 160, 0.45)',
                  transform: 'translateX(-50%)',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tap / Click Burst Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="tap-particle"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            '--dx': p.dx,
            '--dy': p.dy,
            '--rot': p.rot,
          }}
        >
          {p.emoji}
        </span>
      ))}

      {/* Floating Celebration Toast Banner */}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            top: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 99999,
            background: 'linear-gradient(135deg, #ff4b82 0%, #ff7597 100%)',
            color: '#ffffff',
            padding: '12px 24px',
            borderRadius: '50px',
            fontWeight: 700,
            fontSize: '1rem',
            boxShadow: '0 10px 30px rgba(255, 75, 130, 0.5), 0 0 20px rgba(255, 255, 255, 0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            animation: 'floatGentle 3s ease-in-out infinite',
            textAlign: 'center',
            maxWidth: '90vw',
          }}
        >
          <Sparkles size={20} className="animate-spin-slow" />
          <span>{toastMessage}</span>
          <Heart size={18} fill="#ffffff" />
        </div>
      )}

      {/* Floating Action Button (FAB) - Shower Love & Confetti */}
      <button
        onClick={handleCelebrateClick}
        className="celebration-fab"
        title="Shower Love & Confetti on Khushi!"
        aria-label="Shower Love and Confetti"
      >
        <PartyPopper size={20} />
        <span>Shower Love! 💖</span>
      </button>
    </>
  );
}
