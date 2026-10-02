import React from 'react';
import { Sparkles, Lock, HeartHandshake, Smile, Compass, Heart, Coffee, PhoneCall } from 'lucide-react';
import { BIRTHDAY_DATA } from '../data/birthdayData';
import { soundEffects } from '../utils/audio';

// Map icon string names to components
const iconMap = {
  Sparkles,
  Lock,
  HeartHandshake,
  Smile,
  Compass,
  Heart,
  Coffee,
  PhoneCall
};

export default function ReasonsWhy() {
  const handleCardHover = () => {
    // Subtle interactive sound on hover
    soundEffects.playTone(800, 0.05, 'sine', 0, 0.03);
  };

  return (
    <section style={{
      padding: '80px 0',
      background: 'radial-gradient(circle at 50% 50%, #fff7fa 0%, #ffffff 100%)',
      position: 'relative'
    }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="pink-badge" style={{ marginBottom: '12px' }}>
            🌟 1 IN 8 BILLION
          </div>
          <h2 className="section-title">
            Why Khushi is the <span>Best Human Being</span>
          </h2>
          <p className="section-subtitle">
            Duniya me 800 crore log hain, par tere jaisi pagli aur pyari dost sirf ek hi hai!
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid-4">
          {BIRTHDAY_DATA.reasons.map((item) => {
            const IconComponent = iconMap[item.icon] || Heart;

            return (
              <div
                key={item.number}
                className="glass-card"
                onMouseEnter={handleCardHover}
                style={{
                  padding: '28px 22px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Large Background Number Watermark */}
                <span style={{
                  position: 'absolute',
                  top: '10px',
                  right: '15px',
                  fontSize: '3rem',
                  fontWeight: 900,
                  color: 'rgba(255, 75, 130, 0.08)',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}>
                  {item.number}
                </span>

                {/* Icon in Pink Circle */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #fff0f5 0%, #ffe4ec 100%)',
                  border: '1px solid #ffb6c1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-pink)'
                }}>
                  <IconComponent size={24} />
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text-dark)',
                  lineHeight: 1.3
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-body)',
                  lineHeight: 1.5
                }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
