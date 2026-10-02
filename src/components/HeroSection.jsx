import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Cake, Gift, Mail, ArrowDown, Star, Laugh, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_DATA } from '../data/birthdayData';
import { soundEffects } from '../utils/audio';

export default function HeroSection({ onOpenPhotoHelper }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [likeCount, setLikeCount] = useState(108);

  const nextImage = () => {
    soundEffects.playSparkle();
    setCurrentImageIdx((prev) => (prev + 1) % BIRTHDAY_DATA.heroImages.length);
  };

  const handleHeartLike = () => {
    soundEffects.playSparkle();
    setLikeCount((prev) => prev + 1);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#ff4b82', '#ff8fb0', '#ffffff', '#ff1493']
    });
  };

  const triggerBigCelebration = () => {
    soundEffects.playCheer();
    // Multi-shot confetti celebration
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55, colors: ['#ff4b82', '#ffffff'] });
    fire(0.2, { spread: 60, colors: ['#ff8fb0', '#ffd1dc'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8, colors: ['#ff1493', '#ff69b4'] });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2, colors: ['#ffffff', '#ff4b82'] });
    fire(0.1, { spread: 120, startVelocity: 45, colors: ['#ffe4ec', '#ff7597'] });
  };

  return (
    <section style={{
      position: 'relative',
      padding: '60px 0 80px 0',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 50% 20%, #ffeaf1 0%, #fff5f8 60%, #fff 100%)'
    }}>
      {/* Decorative Floating Background Shapes */}
      <div className="bg-sparkle" style={{ top: '10%', left: '5%', fontSize: '2.5rem' }}>🌸</div>
      <div className="bg-sparkle" style={{ top: '25%', right: '8%', fontSize: '2.2rem', animationDelay: '1.5s' }}>✨</div>
      <div className="bg-sparkle" style={{ top: '65%', left: '8%', fontSize: '2.4rem', animationDelay: '2.5s' }}>💖</div>
      <div className="bg-sparkle" style={{ bottom: '15%', right: '6%', fontSize: '2.8rem', animationDelay: '0.8s' }}>🎈</div>

      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
          gap: '48px'
        }}>
          {/* Left Column: Heartfelt Heading & Description */}
          <div>
            <div className="pink-badge" style={{ marginBottom: '12px' }}>
              <Sparkles size={16} />
              <span>TODAY IS ALL ABOUT YOU 👑</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(1.85rem, 6.5vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.2,
              color: 'var(--text-dark)',
              marginBottom: '14px'
            }}>
              Happy Birthday, <br />
              <span
                className="shimmer-text"
                style={{
                  display: 'inline-block',
                  filter: 'drop-shadow(0 4px 14px rgba(255, 75, 130, 0.35))'
                }}
              >
                Khushi Darling! 🌸🎂
              </span>
            </h1>

            {/* Cute Nickname Badges */}
            <div style={{
              display: 'flex',
              gap: '6px',
              flexWrap: 'wrap',
              marginBottom: '16px'
            }}>
              <span className="pink-badge" style={{ textTransform: 'none', fontSize: '0.8rem', padding: '4px 12px' }}>💕 Darling</span>
              <span className="pink-badge" style={{ textTransform: 'none', fontSize: '0.8rem', padding: '4px 12px' }}>🫂 Bestfriend</span>
              <span className="pink-badge" style={{ textTransform: 'none', fontSize: '0.8rem', padding: '4px 12px' }}>🤝 Buddy</span>
              <span className="pink-badge" style={{ textTransform: 'none', fontSize: '0.8rem', padding: '4px 12px' }}>💖 Meri Jaan</span>
              <span className="pink-badge" style={{ textTransform: 'none', fontSize: '0.8rem', padding: '4px 12px' }}>👑 Drama Queen</span>
            </div>

            <p style={{
              fontSize: 'clamp(0.98rem, 2.5vw, 1.15rem)',
              color: 'var(--text-body)',
              marginBottom: '22px',
              fontWeight: 500,
              lineHeight: 1.6
            }}>
              {BIRTHDAY_DATA.heroTagline}
            </p>

            {/* Quick highlight cards */}
            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              marginBottom: '32px'
            }}>
              <div className="glass-card-subtle" style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Laugh size={18} color="#ff4b82" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Unstoppable Laughter</span>
              </div>
              <div className="glass-card-subtle" style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Heart size={18} color="#ff4b82" fill="#ff4b82" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Purest Soul</span>
              </div>
              <div className="glass-card-subtle" style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={18} color="#ff4b82" />
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Best Friend 1000%</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              <button onClick={triggerBigCelebration} className="pink-gradient-btn" style={{ fontSize: '1.05rem', padding: '14px 32px' }}>
                <Sparkles size={20} />
                Celebrate Khushi! 🎉
              </button>
              <a href="#cake" className="white-pink-btn" style={{ fontSize: '1rem', padding: '12px 26px', textDecoration: 'none' }}>
                <Cake size={18} />
                Cut The Cake 🎂
              </a>
              <a href="#letter" className="white-pink-btn" style={{ fontSize: '1rem', padding: '12px 26px', textDecoration: 'none' }}>
                <Mail size={18} />
                Open Letter 💌
              </a>
            </div>

            {/* Hint for changing photos */}
            <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                💡 Tip: Click below to see how to replace photos with Khushi's original photos anytime!
              </span>
              <button
                onClick={onOpenPhotoHelper}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary-pink)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Change Photos
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Photo Spotlight Frame */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', maxWidth: '420px', width: '100%' }}>
              {/* Decorative Pink Aura behind photo */}
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '-15px',
                right: '-15px',
                bottom: '-15px',
                background: 'linear-gradient(135deg, rgba(255, 75, 130, 0.35), rgba(255, 143, 176, 0.2))',
                borderRadius: '34px',
                filter: 'blur(20px)',
                zIndex: 0
              }} />

              {/* Main Card */}
              <div className="glass-card" style={{
                position: 'relative',
                zIndex: 1,
                padding: '20px',
                border: '3px solid #ffffff'
              }}>
                {/* Crown Badge */}
                <div style={{
                  position: 'absolute',
                  top: '-18px',
                  right: '25px',
                  background: 'linear-gradient(135deg, #ffd700, #ffaa00)',
                  color: '#fff',
                  borderRadius: '50px',
                  padding: '6px 16px',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  boxShadow: '0 4px 15px rgba(255, 170, 0, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  👑 {BIRTHDAY_DATA.heroImages[currentImageIdx].nickname || 'Birthday Queen'}
                </div>

                {/* Photo Display */}
                <div style={{
                  width: '100%',
                  height: 'clamp(320px, 50vh, 420px)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
                }}>
                  <img
                    src={BIRTHDAY_DATA.heroImages[currentImageIdx].url}
                    alt="Khushi Birthday Spotlight"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  {/* Overlay gradient */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(59, 20, 36, 0.85) 0%, rgba(59, 20, 36, 0) 60%)',
                    padding: '24px 18px 16px 18px',
                    color: '#ffffff'
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-handwriting)',
                      fontSize: '1.45rem',
                      fontWeight: 700,
                      marginBottom: '4px'
                    }}>
                      "{BIRTHDAY_DATA.heroImages[currentImageIdx].caption}"
                    </p>
                    <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>
                      Photo {currentImageIdx + 1} of {BIRTHDAY_DATA.heroImages.length} • Tap Next below
                    </span>
                  </div>
                </div>

                {/* Card Controls */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '16px'
                }}>
                  {/* Love counter */}
                  <button
                    onClick={handleHeartLike}
                    className="white-pink-btn"
                    style={{ padding: '8px 16px', gap: '8px' }}
                  >
                    <Heart size={18} fill="#ff4b82" color="#ff4b82" />
                    <span>Send Love ({likeCount})</span>
                  </button>

                  {/* Next Photo button */}
                  <button
                    onClick={nextImage}
                    className="pink-gradient-btn"
                    style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                  >
                    Next Photo 📸
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
