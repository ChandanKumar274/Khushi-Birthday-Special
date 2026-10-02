import React from 'react';
import { Heart, Sparkles, ArrowUp, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    soundEffects.playSparkle();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showerBigConfetti = () => {
    soundEffects.playCheer();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.8 },
      colors: ['#ff4b82', '#ff8fb0', '#ffffff', '#ffd1dc', '#ff1493']
    });
  };

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #fff2f6 0%, #ffe0ec 100%)',
      borderTop: '2px solid rgba(255, 182, 193, 0.6)',
      padding: '60px 0 36px 0',
      textAlign: 'center',
      position: 'relative'
    }}>
      <div className="container-custom">
        {/* Heart Animation */}
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #ff4b82, #ff8fb0)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 20px auto',
          color: '#ffffff',
          boxShadow: '0 8px 24px rgba(255, 75, 130, 0.35)',
          cursor: 'pointer'
        }}
        onClick={showerBigConfetti}
        title="Click for surprise!"
        >
          <Heart size={28} fill="#ffffff" />
        </div>

        <h3 style={{
          fontSize: '1.8rem',
          fontWeight: 800,
          color: 'var(--text-dark)',
          marginBottom: '8px'
        }}>
          Happiest Birthday Once Again, Khushi Darling! 🌸💖
        </h3>

        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-body)',
          maxWidth: '560px',
          margin: '0 auto 24px auto',
          lineHeight: 1.6
        }}>
          Dua hai ki meri pyari buddy, meri sweetest bestfriend aur meri jaan ki zindagi hamesha khushiyon, hasee, acche khano aur unlimited masti se bhari rahe!
          Best Friends Forever & Beyond! 🫂✨
        </p>

        {/* Action Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginBottom: '36px', flexWrap: 'wrap' }}>
          <button onClick={showerBigConfetti} className="pink-gradient-btn" style={{ padding: '10px 24px' }}>
            <PartyPopper size={18} />
            Shower Confetti Again! 🎉
          </button>
          <button onClick={scrollToTop} className="white-pink-btn" style={{ padding: '10px 24px' }}>
            <ArrowUp size={18} />
            Back to Top ⬆️
          </button>
        </div>

        {/* Small Copyright / Love Note */}
        <div style={{
          borderTop: '1px solid rgba(255, 182, 193, 0.5)',
          paddingTop: '20px',
          fontSize: '0.85rem',
          color: 'var(--text-muted)'
        }}>
          Crafted with endless love & laughter for <strong>Khushi</strong> on her Special Day 💖 | Pink & White Theme
        </div>
      </div>
    </footer>
  );
}
