import React, { useState } from 'react';
import { Mail, Heart, Sparkles, Copy, Check, Lock, Unlock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_DATA } from '../data/birthdayData';
import { soundEffects } from '../utils/audio';

export default function SecretLetter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const toggleLetter = () => {
    soundEffects.playSparkle();
    const nextState = !isOpen;
    setIsOpen(nextState);

    if (nextState) {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4b82', '#ff8fb0', '#ffffff', '#ffd1dc']
      });
    }
  };

  const handleCopy = () => {
    soundEffects.playSparkle();
    const fullText = `${BIRTHDAY_DATA.secretLetter.salutation}\n\n${BIRTHDAY_DATA.secretLetter.paragraphs.join('\n\n')}\n\n${BIRTHDAY_DATA.secretLetter.signOff}\n${BIRTHDAY_DATA.secretLetter.sender}`;
    navigator.clipboard.writeText(fullText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="letter" style={{
      padding: '80px 0',
      background: 'linear-gradient(180deg, #ffffff 0%, #fff0f5 50%, #ffffff 100%)',
      position: 'relative'
    }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="pink-badge" style={{ marginBottom: '12px' }}>
            💌 FROM MY HEART TO YOURS
          </div>
          <h2 className="section-title">
            A Secret Birthday Letter <span>For Khushi</span>
          </h2>
          <p className="section-subtitle">
            Kuch baatein jo roz bolna mushkil hota hai, par dil me hamesha rehti hain. Click to unseal!
          </p>
        </div>

        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {/* Envelope Exterior Container */}
          {!isOpen ? (
            <div
              onClick={toggleLetter}
              className="glass-card"
              style={{
                padding: '50px 30px',
                textAlign: 'center',
                cursor: 'pointer',
                background: 'linear-gradient(135deg, #fff5f8 0%, #ffe6ef 100%)',
                border: '2px solid #ff8fb0',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
              title="Click to break seal and open letter"
            >
              {/* Envelope flap line illustration */}
              <div style={{
                width: '100px',
                height: '100px',
                background: 'linear-gradient(135deg, #d61f5c, #ff4b82)',
                borderRadius: '50%',
                margin: '0 auto 20px auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 25px rgba(214, 31, 92, 0.4)',
                border: '4px solid #ffffff'
              }}>
                <Lock size={38} color="#ffffff" />
              </div>

              <h3 style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                color: 'var(--text-dark)',
                marginBottom: '10px'
              }}>
                Confidential: Only for Khushi's Eyes 🤫
              </h3>

              <p style={{
                fontSize: '1rem',
                color: 'var(--text-body)',
                marginBottom: '24px'
              }}>
                Tap the wax seal to break it open and read the secret birthday letter!
              </p>

              <button className="pink-gradient-btn" style={{ padding: '12px 32px' }}>
                <Unlock size={18} />
                Break The Wax Seal & Open 💌
              </button>
            </div>
          ) : (
            /* Open Letter Stationery View */
            <div
              className="glass-card"
              style={{
                background: '#ffffff',
                border: '2px solid #ffd1dc',
                borderRadius: '24px',
                padding: '44px 36px',
                position: 'relative',
                boxShadow: '0 16px 45px rgba(255, 75, 130, 0.16)'
              }}
            >
              {/* Top Header: Salutation + Stamp */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <div style={{
                  fontFamily: 'var(--font-handwriting)',
                  fontSize: 'clamp(1.7rem, 5vw, 2.3rem)',
                  fontWeight: 700,
                  color: 'var(--deep-pink)',
                  lineHeight: 1.2
                }}>
                  {BIRTHDAY_DATA.secretLetter.salutation}
                </div>

                {/* Decorative Stamp */}
                <div style={{
                  padding: '8px 12px',
                  border: '2px dashed #ff4b82',
                  borderRadius: '8px',
                  textAlign: 'center',
                  background: '#fff5f8',
                  transform: 'rotate(4deg)',
                  flexShrink: 0
                }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--deep-pink)' }}>SPECIAL POST</div>
                  <div style={{ fontSize: '1.1rem' }}>🌸 👑</div>
                  <div style={{ fontSize: '0.6rem', color: '#9e5b72' }}>BEST FRIEND VIP</div>
                </div>
              </div>

              {/* Paragraphs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                {BIRTHDAY_DATA.secretLetter.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    style={{
                      fontSize: '1.1rem',
                      lineHeight: 1.7,
                      color: 'var(--text-body)'
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Signoff */}
              <div style={{
                textAlign: 'right',
                fontFamily: 'var(--font-handwriting)',
                fontSize: '1.8rem',
                fontWeight: 700,
                color: 'var(--deep-pink)',
                borderTop: '1px dashed #ffd1dc',
                paddingTop: '16px'
              }}>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)' }}>
                  {BIRTHDAY_DATA.secretLetter.signOff}
                </p>
                <p>{BIRTHDAY_DATA.secretLetter.sender}</p>
              </div>

              {/* Action Controls for Letter */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '28px',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <button
                  onClick={handleCopy}
                  className="white-pink-btn"
                  style={{ padding: '8px 20px', fontSize: '0.9rem' }}
                >
                  {isCopied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
                  <span>{isCopied ? "Copied to Clipboard! ✓" : "Copy Letter Text 📋"}</span>
                </button>

                <button
                  onClick={toggleLetter}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  Close & Seal Again 🔒
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
