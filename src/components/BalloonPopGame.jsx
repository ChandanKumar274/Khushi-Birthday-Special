import React, { useState } from 'react';
import { Sparkles, Trophy, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_DATA } from '../data/birthdayData';
import { soundEffects } from '../utils/audio';

export default function BalloonPopGame() {
  const [poppedBalloons, setPoppedBalloons] = useState([]);
  const [revealedMessages, setRevealedMessages] = useState([]);

  // 10 Balloon configurations with varied pastel pink & white colors
  const balloons = [
    { id: 0, color: 'linear-gradient(135deg, #ff4b82, #ff8fb0)', delay: '0s', label: '🎈' },
    { id: 1, color: 'linear-gradient(135deg, #ff7597, #ffb3c6)', delay: '0.4s', label: '🎈' },
    { id: 2, color: 'linear-gradient(135deg, #ffffff, #ffe4ec)', delay: '0.8s', label: '🎈', border: '2px solid #ff8fb0' },
    { id: 3, color: 'linear-gradient(135deg, #f72585, #b5179e)', delay: '1.2s', label: '🎈' },
    { id: 4, color: 'linear-gradient(135deg, #ff85a2, #fbb1bd)', delay: '0.2s', label: '🎈' },
    { id: 5, color: 'linear-gradient(135deg, #ffffff, #ffd1dc)', delay: '0.6s', label: '🎈', border: '2px solid #ff4b82' },
    { id: 6, color: 'linear-gradient(135deg, #d61f5c, #ff4b82)', delay: '1s', label: '🎈' },
    { id: 7, color: 'linear-gradient(135deg, #ff9ebb, #ffffff)', delay: '0.3s', label: '🎈' },
    { id: 8, color: 'linear-gradient(135deg, #ff5c8a, #ff99c8)', delay: '0.7s', label: '🎈' },
    { id: 9, color: 'linear-gradient(135deg, #f72585, #ff70a6)', delay: '1.1s', label: '🎈' },
  ];

  const handlePopBalloon = (id) => {
    if (poppedBalloons.includes(id)) return;

    soundEffects.playPop();

    // Small confetti pop
    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#ff4b82', '#ff8fb0', '#ffffff', '#ffd700']
    });

    const newPopped = [...poppedBalloons, id];
    setPoppedBalloons(newPopped);

    const message = BIRTHDAY_DATA.balloonCompliments[id];
    setRevealedMessages((prev) => [message, ...prev]);

    // Check if all 10 are popped
    if (newPopped.length === balloons.length) {
      setTimeout(() => {
        soundEffects.playCheer();
        confetti({
          particleCount: 160,
          spread: 100,
          origin: { y: 0.5 },
          colors: ['#ff4b82', '#ff8fb0', '#ffffff', '#ffd700', '#ff1493']
        });
      }, 400);
    }
  };

  const handleReset = () => {
    soundEffects.playSparkle();
    setPoppedBalloons([]);
    setRevealedMessages([]);
  };

  const isAllPopped = poppedBalloons.length === balloons.length;

  return (
    <section id="balloons" style={{
      padding: '80px 0',
      background: 'linear-gradient(180deg, #fff2f6 0%, #ffffff 100%)',
      position: 'relative'
    }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="pink-badge" style={{ marginBottom: '12px' }}>
            🎈 INTERACTIVE MINI-GAME
          </div>
          <h2 className="section-title">
            Pop The Balloons, <span>Khushi!</span>
          </h2>
          <p className="section-subtitle">
            Every balloon hides a sweet secret compliment or wish just for you! Click each balloon to pop it!
          </p>

          {/* Progress Indicator */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: '#ffffff',
            padding: '8px 24px',
            borderRadius: '50px',
            boxShadow: '0 4px 15px rgba(255, 75, 130, 0.12)',
            border: '1px solid #ffd1dc'
          }}>
            <span style={{ fontWeight: 700, color: 'var(--deep-pink)', fontSize: '0.95rem' }}>
              Compliments Unlocked: {poppedBalloons.length} / {balloons.length}
            </span>
            {poppedBalloons.length > 0 && (
              <button
                onClick={handleReset}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '0.8rem'
                }}
                title="Reset Balloons"
              >
                <RotateCcw size={14} /> Reset
              </button>
            )}
          </div>
        </div>

        {/* Balloon Floating Arena */}
        <div className="glass-card" style={{
          padding: '36px 20px',
          minHeight: '260px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '24px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {balloons.map((b) => {
            const isPopped = poppedBalloons.includes(b.id);
            return (
              <div
                key={b.id}
                onClick={() => handlePopBalloon(b.id)}
                style={{
                  cursor: !isPopped ? 'pointer' : 'default',
                  opacity: isPopped ? 0.2 : 1,
                  transform: isPopped ? 'scale(0.5)' : 'scale(1)',
                  transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  animation: !isPopped ? 'floatGentle 4s ease-in-out infinite' : 'none',
                  animationDelay: b.delay,
                  userSelect: 'none'
                }}
                title={!isPopped ? "Click to POP!" : "Popped!"}
              >
                {/* Balloon Shape */}
                <div style={{
                  width: '64px',
                  height: '78px',
                  background: b.color,
                  borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                  border: b.border || 'none',
                  boxShadow: !isPopped ? '0 10px 20px rgba(255, 75, 130, 0.25)' : 'none',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '0.8rem'
                }}>
                  {/* Balloon reflection highlight */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    width: '14px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.45)',
                    transform: 'rotate(-30deg)'
                  }} />
                  {!isPopped ? `#${b.id + 1}` : '💥'}
                </div>

                {/* Balloon knot and string */}
                {!isPopped && (
                  <>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      background: 'var(--primary-pink)',
                      borderRadius: '50%',
                      marginTop: '-2px'
                    }} />
                    <div style={{
                      width: '1px',
                      height: '28px',
                      background: 'rgba(200, 100, 130, 0.5)'
                    }} />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Victory Celebration when all are popped */}
        {isAllPopped && (
          <div style={{
            marginTop: '32px',
            textAlign: 'center',
            padding: '24px',
            background: 'linear-gradient(135deg, #fff0f5 0%, #ffe4ec 100%)',
            border: '2px solid #ff4b82',
            borderRadius: '24px',
            boxShadow: '0 8px 30px rgba(255, 75, 130, 0.2)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>👑🏆✨</div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--deep-pink)', marginBottom: '8px' }}>
              All 10 Compliments Unlocked! You're The Ultimate Queen!
            </h3>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', maxWidth: '600px', margin: '0 auto' }}>
              Khushi, every single compliment is 1000% true! Hope these brought a wide, sparkling smile to your face today!
            </p>
          </div>
        )}

        {/* Revealed Compliments Stream */}
        {revealedMessages.length > 0 && (
          <div style={{ marginTop: '36px' }}>
            <h4 style={{
              textAlign: 'center',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--text-dark)',
              marginBottom: '16px'
            }}>
              ✨ Secret Compliments Unlocked:
            </h4>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center',
              maxWidth: '850px',
              margin: '0 auto'
            }}>
              {revealedMessages.map((msg, index) => (
                <div
                  key={index}
                  className="glass-card"
                  style={{
                    padding: '12px 20px',
                    borderRadius: '50px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--text-dark)',
                    border: '1px solid #ffb6c1',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  {msg}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
