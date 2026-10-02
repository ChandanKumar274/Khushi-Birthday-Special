import React, { useState } from 'react';
import { Gift, Award, Sparkles, Printer, RotateCcw, Heart, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_DATA } from '../data/birthdayData';
import { soundEffects } from '../utils/audio';

export default function SurpriseGiftBox() {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpenGift = () => {
    if (isOpened) return;

    soundEffects.playCheer();
    setIsOpened(true);

    // Multi-stage golden & pink explosion
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#ffd700', '#ff4b82', '#ffffff', '#ff8fb0']
    });

    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 120,
        origin: { y: 0.4 },
        colors: ['#ffd700', '#ffaa00', '#ffffff', '#d61f5c']
      });
    }, 350);
  };

  const handleReset = () => {
    soundEffects.playSparkle();
    setIsOpened(false);
  };

  const handlePrint = () => {
    soundEffects.playSparkle();
    window.print();
  };

  return (
    <section id="gift" style={{
      padding: '80px 0',
      background: 'linear-gradient(180deg, #ffffff 0%, #fff4f8 50%, #ffffff 100%)',
      position: 'relative'
    }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="pink-badge" style={{ marginBottom: '12px' }}>
            🎁 MYSTERY SURPRISE BOX
          </div>
          <h2 className="section-title">
            Unwrap Your <span>Birthday Surprise</span>
          </h2>
          <p className="section-subtitle">
            There's a special package addressed to Khushi. Click the gift box to untie the ribbon!
          </p>
        </div>

        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          {!isOpened ? (
            /* Closed Animated Gift Box */
            <div
              onClick={handleOpenGift}
              className="glass-card"
              style={{
                padding: '60px 24px',
                cursor: 'pointer',
                background: 'linear-gradient(135deg, #fff7fa 0%, #ffe9f2 100%)',
                border: '2px solid #ff8fb0',
                position: 'relative',
                overflow: 'hidden'
              }}
              title="Click to unwrap the gift!"
            >
              {/* Animated Gift Box Graphic */}
              <div className="animate-wiggle" style={{ display: 'inline-block', marginBottom: '24px' }}>
                <div style={{
                  width: '160px',
                  height: '140px',
                  background: 'linear-gradient(135deg, #ff4b82, #d61f5c)',
                  borderRadius: '16px',
                  position: 'relative',
                  margin: '0 auto',
                  boxShadow: '0 16px 35px rgba(255, 75, 130, 0.4)',
                  border: '3px solid #ffffff'
                }}>
                  {/* Vertical Ribbon */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '28px',
                    background: 'linear-gradient(180deg, #ffd700, #ffaa00)',
                    boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
                  }} />

                  {/* Horizontal Ribbon */}
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    height: '24px',
                    background: 'linear-gradient(90deg, #ffd700, #ffaa00)',
                    boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)'
                  }} />

                  {/* Ribbon Bow on top */}
                  <div style={{
                    position: 'absolute',
                    top: '-24px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '2.5rem'
                  }}>
                    🎀
                  </div>
                </div>
              </div>

              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Tap To Untie The Ribbon & Open! 🎁
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-body)', marginBottom: '24px' }}>
                Specially curated and certified with love for Khushi!
              </p>

              <button className="pink-gradient-btn" style={{ padding: '12px 36px', fontSize: '1.05rem' }}>
                <Sparkles size={18} />
                Open Gift Box Now! ✨
              </button>
            </div>
          ) : (
            /* Opened Gift: Best Friend Lifetime Award Certificate */
              <div
                className="glass-card"
                style={{
                  background: '#ffffff',
                  border: '4px double #ffd700',
                  borderRadius: '24px',
                  padding: 'clamp(24px, 5vw, 48px) clamp(14px, 4vw, 36px)',
                  position: 'relative',
                  boxShadow: '0 20px 60px rgba(255, 180, 0, 0.25)',
                  textAlign: 'center'
                }}
              >
                {/* Golden Trophy Icon */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ffd700, #ffaa00)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                  boxShadow: '0 8px 20px rgba(255, 170, 0, 0.4)',
                  color: '#ffffff'
                }}>
                  <Award size={36} />
                </div>

                {/* Award Title */}
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  color: '#b45309',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '8px'
                }}>
                  ⭐ OFFICIAL BEST FRIEND CITATION ⭐
                </div>

                <h3 style={{
                  fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
                  fontWeight: 900,
                  color: 'var(--text-dark)',
                  marginBottom: '12px'
                }}>
                  Lifetime Best Friend Award 🏆
                </h3>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  This is proudly presented and certified to:
                </p>

                {/* Recipient Name in Big Script */}
                <div style={{
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: 'clamp(2.3rem, 7vw, 3.2rem)',
                  fontWeight: 700,
                  color: 'var(--primary-pink)',
                  lineHeight: 1.1,
                  marginBottom: '6px',
                  textShadow: '0 2px 10px rgba(255, 75, 130, 0.2)'
                }}>
                  Khushi Darling 🌸
                </div>

              <div style={{
                fontSize: '0.95rem',
                fontWeight: 700,
                color: 'var(--deep-pink)',
                marginBottom: '18px'
              }}>
                (Official Bestfriend • Coolest Buddy • Meri Jaan 💕)
              </div>

              {/* Award Description */}
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-body)',
                maxWidth: '540px',
                margin: '0 auto 28px auto',
                lineHeight: 1.6
              }}>
                Presented to my darling Khushi for having the purest heart, tolerating my silly moods, giving the best laughs,
                and being the most irreplaceable Bestfriend and Buddy in the entire universe! 💖
              </p>

              {/* Stamp & Verification */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderTop: '2px dashed #ffe4ec',
                paddingTop: '24px',
                marginBottom: '32px',
                flexWrap: 'wrap',
                gap: '16px'
              }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>AUTHORIZED BY:</div>
                  <div style={{
                    fontFamily: 'var(--font-handwriting)',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: 'var(--deep-pink)'
                  }}>
                    Your Forever Bestfriend & Buddy ✍️
                  </div>
                </div>

                <div style={{
                  padding: '8px 18px',
                  borderRadius: '50px',
                  background: '#fef3c7',
                  border: '1px solid #fcd34d',
                  color: '#92400e',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <CheckCircle2 size={16} /> 100% Genuine Bond
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>VALIDITY:</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                    FOREVER & ALWAYS ♾️
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                <button onClick={handlePrint} className="pink-gradient-btn" style={{ padding: '10px 24px' }}>
                  <Printer size={18} />
                  Print / Save Certificate 📜
                </button>
                <button onClick={handleReset} className="white-pink-btn" style={{ padding: '10px 24px' }}>
                  <RotateCcw size={18} />
                  Wrap Again 🎁
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
