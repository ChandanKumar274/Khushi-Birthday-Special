import React, { useState } from 'react';
import { Sparkles, RefreshCw, Heart, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundEffects } from '../utils/audio';

export default function InteractiveCake() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [wishMade, setWishMade] = useState(false);
  const [wishesCount, setWishesCount] = useState(0);

  const handleBlowCandles = () => {
    if (candlesBlown) return;

    soundEffects.playBlow();
    setCandlesBlown(true);

    setTimeout(() => {
      soundEffects.playCheer();
      setWishMade(true);
      setWishesCount((prev) => prev + 1);

      // Grand confetti explosion
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff4b82', '#ff8fb0', '#ffffff', '#ffd700', '#ff1493']
      });

      // Secondary burst
      setTimeout(() => {
        confetti({
          particleCount: 80,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#ff4b82', '#ffffff']
        });
        confetti({
          particleCount: 80,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#ff8fb0', '#ffd700']
        });
      }, 300);
    }, 400);
  };

  const handleRelight = () => {
    soundEffects.playSparkle();
    setCandlesBlown(false);
    setWishMade(false);
  };

  return (
    <section id="cake" style={{
      padding: '80px 0',
      background: 'linear-gradient(180deg, #ffffff 0%, #fff2f6 50%, #ffffff 100%)',
      position: 'relative'
    }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="pink-badge" style={{ marginBottom: '12px' }}>
            🎂 THE BIRTHDAY CEREMONY
          </div>
          <h2 className="section-title">
            Make A Wish & <span>Blow The Candles!</span>
          </h2>
          <p className="section-subtitle">
            Khushi, close your eyes, make a heartful wish, and blow out the candles!
          </p>
        </div>

        {/* Cake Container */}
        <div className="glass-card" style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: 'clamp(28px, 6vw, 48px) clamp(12px, 4vw, 24px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Wish Counter Badge */}
          {wishesCount > 0 && (
            <div style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              background: '#fff0f5',
              border: '1px solid #ff4b82',
              color: '#d61f5c',
              padding: '4px 12px',
              borderRadius: '50px',
              fontSize: '0.8rem',
              fontWeight: 700
            }}>
              Wishes Made: {wishesCount} ⭐
            </div>
          )}

          {/* Illustrated SVG Interactive Cake */}
          <div
            onClick={!candlesBlown ? handleBlowCandles : undefined}
            style={{
              cursor: !candlesBlown ? 'pointer' : 'default',
              userSelect: 'none',
              display: 'inline-block',
              transition: 'transform 0.2s ease',
              margin: '10px 0',
              maxWidth: '100%'
            }}
            title={!candlesBlown ? "Click to blow out candles!" : "Candles are blown out!"}
          >
            <div style={{
              position: 'relative',
              width: '310px',
              maxWidth: '100%',
              height: '255px',
              margin: '0 auto',
              transform: 'scale(clamp(0.82, 85vw / 340, 1))',
              transformOrigin: 'center center'
            }}>
              {/* Candles */}
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '0',
                right: '0',
                display: 'flex',
                justifyContent: 'center',
                gap: '28px',
                zIndex: 10
              }}>
                {[0, 1, 2].map((idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* Flame or Smoke */}
                    {!candlesBlown ? (
                      <div className="animate-flame" style={{
                        width: '16px',
                        height: '24px',
                        background: 'radial-gradient(ellipse at bottom, #ffd700 0%, #ff6b35 70%, rgba(255,0,0,0) 100%)',
                        borderRadius: '50% 50% 35% 35%',
                        boxShadow: '0 0 16px rgba(255, 180, 0, 0.9), 0 0 30px rgba(255, 75, 130, 0.4)',
                        marginBottom: '2px'
                      }} />
                    ) : (
                      <div style={{
                        width: '10px',
                        height: '20px',
                        marginBottom: '2px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: 'rgba(160, 160, 160, 0.6)',
                          animation: 'smokeAnimation 1.5s infinite ease-out'
                        }} />
                        <span style={{ fontSize: '0.65rem', color: '#888' }}>💨</span>
                      </div>
                    )}
                    {/* Candle Wick */}
                    <div style={{ width: '2px', height: '6px', background: '#333' }} />
                    {/* Candle Body */}
                    <div style={{
                      width: '12px',
                      height: '42px',
                      background: 'repeating-linear-gradient(45deg, #ff4b82, #ff4b82 6px, #ffffff 6px, #ffffff 12px)',
                      borderRadius: '4px 4px 0 0',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                    }} />
                  </div>
                ))}
              </div>

              {/* Cake Top Tier */}
              <div style={{
                position: 'absolute',
                top: '74px',
                left: '70px',
                width: '180px',
                height: '70px',
                background: 'linear-gradient(180deg, #ffffff 0%, #ffe4ec 100%)',
                borderRadius: '16px 16px 0 0',
                border: '3px solid #ff9ebb',
                boxShadow: 'inset 0 -10px 0 rgba(255, 75, 130, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '6px 10px'
              }}>
                {/* Strawberry cream dripping frosting */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  marginTop: '-2px'
                }}>
                  {[...Array(6)].map((_, i) => (
                    <div key={i} style={{
                      width: '18px',
                      height: '14px',
                      background: '#ff4b82',
                      borderRadius: '0 0 10px 10px'
                    }} />
                  ))}
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: '#d61f5c',
                  textAlign: 'center',
                  fontFamily: 'var(--font-handwriting)',
                  letterSpacing: '1px'
                }}>
                  🌸 Khushi 🌸
                </div>
              </div>

              {/* Cake Bottom Tier */}
              <div style={{
                position: 'absolute',
                top: '144px',
                left: '35px',
                width: '250px',
                height: '85px',
                background: 'linear-gradient(180deg, #ffeef4 0%, #ffd6e4 100%)',
                borderRadius: '18px 18px 8px 8px',
                border: '3px solid #ff8fb0',
                boxShadow: '0 10px 20px rgba(255, 75, 130, 0.15), inset 0 -10px 0 rgba(214, 31, 92, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '8px 12px'
              }}>
                {/* Decorative White Cream Drops */}
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} style={{
                      width: '20px',
                      height: '16px',
                      background: '#ffffff',
                      borderRadius: '0 0 12px 12px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
                    }} />
                  ))}
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  fontSize: '1.1rem'
                }}>
                  🍓 💖 🍓 💖 🍓
                </div>
              </div>

              {/* Cake Stand / Plate */}
              <div style={{
                position: 'absolute',
                top: '228px',
                left: '15px',
                width: '290px',
                height: '18px',
                background: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 100%)',
                borderRadius: '50px',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                border: '2px solid #ffd1dc'
              }} />
            </div>
          </div>

          {/* Action Trigger Buttons */}
          <div style={{ marginTop: '24px' }}>
            {!candlesBlown ? (
              <button
                onClick={handleBlowCandles}
                className="pink-gradient-btn"
                style={{ fontSize: '1.15rem', padding: '14px 38px' }}
              >
                <Sparkles size={20} />
                Blow Out Candles! 💨🎂
              </button>
            ) : (
              <button
                onClick={handleRelight}
                className="white-pink-btn"
                style={{ fontSize: '1rem', padding: '12px 28px' }}
              >
                <RefreshCw size={18} />
                Relight Candles & Wish Again! 🕯️
              </button>
            )}
          </div>

          {/* Wish Revealed Card */}
          {wishMade && (
            <div style={{
              marginTop: '32px',
              padding: '24px',
              background: 'linear-gradient(135deg, #fff5f8 0%, #ffe9f1 100%)',
              border: '2px dashed #ff4b82',
              borderRadius: '20px',
              animation: 'floatGentle 4s ease-in-out infinite'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🎉✨💖</div>
              <h3 style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                color: 'var(--deep-pink)',
                marginBottom: '10px'
              }}>
                Happy Birthday, Khushi Darling! Your Wish is Sent to the Stars! ⭐
              </h3>
              <p style={{
                fontSize: '1.05rem',
                color: 'var(--text-body)',
                maxWidth: '520px',
                margin: '0 auto 12px auto'
              }}>
                Meri jaan Khushi, may all your secret wishes, big ambitions, and sweetest dreams come true this year!
                My dearest buddy, my bestfriend, you deserve unlimited smiles and endless sweet surprises! 🌸✨
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#ff4b82', fontWeight: 700 }}>
                <Heart size={18} fill="#ff4b82" /> Forever Bestfriend & Buddy's Blessing 100% Guaranteed!
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
