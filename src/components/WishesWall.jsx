import React, { useState, useEffect } from 'react';
import { Plus, Heart, MessageSquare, Trash2, X, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_DATA } from '../data/birthdayData';
import { soundEffects } from '../utils/audio';

export default function WishesWall() {
  const [wishes, setWishes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [wishText, setWishText] = useState('');
  const [selectedColor, setSelectedColor] = useState('#ffe4ec');

  const colorPalette = [
    { label: 'Pastel Rose', value: '#ffe4ec' },
    { label: 'Blush Pink', value: '#fff0f5' },
    { label: 'Peach Cream', value: '#ffedd5' },
    { label: 'Soft Lavender', value: '#f3e8ff' },
    { label: 'Lemon Pastel', value: '#fef9c3' },
  ];

  // Load wishes from localStorage or fall back to defaults
  useEffect(() => {
    try {
      const saved = localStorage.getItem('khushi_birthday_wishes');
      if (saved) {
        setWishes(JSON.parse(saved));
      } else {
        setWishes(BIRTHDAY_DATA.initialWishes);
      }
    } catch {
      setWishes(BIRTHDAY_DATA.initialWishes);
    }
  }, []);

  const saveWishes = (newWishes) => {
    setWishes(newWishes);
    try {
      localStorage.setItem('khushi_birthday_wishes', JSON.stringify(newWishes));
    } catch (e) {
      console.error(e);
    }
  };

  const handleAddWish = (e) => {
    e.preventDefault();
    if (!senderName.trim() || !wishText.trim()) return;

    soundEffects.playSparkle();

    const newWish = {
      id: Date.now(),
      sender: senderName.trim(),
      message: wishText.trim(),
      colorHex: selectedColor,
      date: 'Just Now',
      isCustom: true
    };

    const updated = [newWish, ...wishes];
    saveWishes(updated);

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#ff4b82', '#ff8fb0', '#ffd1dc']
    });

    setSenderName('');
    setWishText('');
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    soundEffects.playTone(300, 0.1, 'sine');
    const updated = wishes.filter((w) => w.id !== id);
    saveWishes(updated);
  };

  // Organic rotation tilts for sticky notes
  const rotations = ['-1.5deg', '1.2deg', '-2deg', '1.8deg', '-0.8deg', '2.2deg'];

  return (
    <section id="wishes" style={{
      padding: '80px 0',
      background: 'radial-gradient(circle at 50% 50%, #fff2f6 0%, #ffffff 100%)',
      position: 'relative'
    }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="pink-badge" style={{ marginBottom: '12px' }}>
            💌 WISHES & BLESSINGS
          </div>
          <h2 className="section-title">
            Khushi's <span>Birthday Wishes Board</span>
          </h2>
          <p className="section-subtitle">
            Warm notes and blessings for Khushi! Anyone can stick a new note on the wall!
          </p>

          <button
            onClick={() => {
              soundEffects.playSparkle();
              setIsModalOpen(true);
            }}
            className="pink-gradient-btn"
            style={{ padding: '12px 30px', fontSize: '1rem' }}
          >
            <Plus size={20} />
            Write A Wish For Khushi ✍️
          </button>
        </div>

        {/* Sticky Notes Pinboard */}
        <div className="grid-3" style={{ alignItems: 'start', gap: '26px' }}>
          {wishes.map((item, index) => {
            const rot = rotations[index % rotations.length];
            const bg = item.colorHex || '#ffe6ee';

            return (
              <div
                key={item.id}
                style={{
                  background: bg,
                  padding: '24px 20px',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(60, 20, 35, 0.08), 0 2px 6px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(255, 182, 193, 0.4)',
                  position: 'relative',
                  transform: `rotate(${rot})`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  minHeight: '190px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Pin Icon on top */}
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#ff4b82',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                  border: '2px solid #ffffff'
                }} />

                {/* Delete button for custom wishes */}
                {item.isCustom && (
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: 'var(--text-muted)',
                      opacity: 0.6
                    }}
                    title="Remove Note"
                  >
                    <Trash2 size={16} />
                  </button>
                )}

                {/* Message Body */}
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.5,
                  color: 'var(--text-dark)',
                  marginBottom: '16px',
                  fontStyle: 'italic',
                  paddingTop: '8px'
                }}>
                  "{item.message}"
                </p>

                {/* Note Author Footer */}
                <div style={{
                  borderTop: '1px dashed rgba(255, 75, 130, 0.25)',
                  paddingTop: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-handwriting)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: 'var(--deep-pink)'
                  }}>
                    ~ {item.sender}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {item.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal to Write a New Wish */}
      {isModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(59, 20, 36, 0.75)',
          backdropFilter: 'blur(8px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(12px, 3vw, 20px)'
        }}
        onClick={() => setIsModalOpen(false)}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '520px',
              width: '100%',
              background: '#ffffff',
              padding: 'clamp(20px, 5vw, 32px) clamp(16px, 4vw, 28px)',
              borderRadius: '24px',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#fff0f5',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--deep-pink)'
              }}
            >
              <X size={18} />
            </button>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
              Add a Birthday Wish for Khushi 🌸
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
              Your note will be pinned onto her interactive wishes board!
            </p>

            <form onSubmit={handleAddWish}>
              {/* Sender Name */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-dark)' }}>
                  Your Name / Nickname:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Bestie Rahul / Mystery Friend"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    border: '1px solid #ffccd8',
                    outline: 'none',
                    fontSize: '0.95rem'
                  }}
                />
              </div>

              {/* Wish Message */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-dark)' }}>
                  Your Sweet Birthday Message:
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Khushi, may your day be as sparkling and radiant as you are..."
                  value={wishText}
                  onChange={(e) => setWishText(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    border: '1px solid #ffccd8',
                    outline: 'none',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    resize: 'none'
                  }}
                />
              </div>

              {/* Sticky Note Color Selector */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px', color: 'var(--text-dark)' }}>
                  Choose Sticky Note Color:
                </label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {colorPalette.map((col) => (
                    <button
                      key={col.value}
                      type="button"
                      onClick={() => setSelectedColor(col.value)}
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: col.value,
                        border: selectedColor === col.value ? '3px solid #ff4b82' : '1px solid #e5e7eb',
                        cursor: 'pointer',
                        transform: selectedColor === col.value ? 'scale(1.15)' : 'scale(1)',
                        transition: 'all 0.2s ease'
                      }}
                      title={col.label}
                    />
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="pink-gradient-btn"
                style={{ width: '100%', padding: '12px', fontSize: '1rem' }}
              >
                <Send size={18} />
                Pin Note on Board! 📌
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
