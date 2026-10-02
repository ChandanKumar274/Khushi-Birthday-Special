import React, { useState } from 'react';
import { Camera, Heart, X, ChevronLeft, ChevronRight, Sparkles, Plus, Image as ImageIcon } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_DATA } from '../data/birthdayData';
import { soundEffects } from '../utils/audio';

export default function MemoryGallery({ onOpenPhotoHelper }) {
  const [activeTag, setActiveTag] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [memoryLikes, setMemoryLikes] = useState({});

  const tags = ['All', 'Best Moments', 'Gossip Partner', 'Model Vibe', 'My Safe Place', 'Food Partner', 'BFF Forever'];

  const filteredMemories = activeTag === 'All'
    ? BIRTHDAY_DATA.memories
    : BIRTHDAY_DATA.memories.filter((m) =>
        (m.categories && m.categories.includes(activeTag)) ||
        m.tag === activeTag
      );

  const openLightbox = (photo) => {
    soundEffects.playSparkle();
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextLightbox = () => {
    soundEffects.playSparkle();
    const currentIndex = BIRTHDAY_DATA.memories.findIndex((m) => m.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % BIRTHDAY_DATA.memories.length;
    setSelectedPhoto(BIRTHDAY_DATA.memories[nextIndex]);
  };

  const prevLightbox = () => {
    soundEffects.playSparkle();
    const currentIndex = BIRTHDAY_DATA.memories.findIndex((m) => m.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + BIRTHDAY_DATA.memories.length) % BIRTHDAY_DATA.memories.length;
    setSelectedPhoto(BIRTHDAY_DATA.memories[prevIndex]);
  };

  const handleLike = (id, e) => {
    e.stopPropagation();
    soundEffects.playSparkle();
    setMemoryLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#ff4b82', '#ff8fb0', '#ffffff']
    });
  };

  // Rotation angles for organic polaroid look
  const tilts = ['-2.5deg', '1.8deg', '-1.5deg', '2.2deg', '-2deg', '1.5deg'];

  return (
    <section id="memories" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="pink-badge" style={{ marginBottom: '12px' }}>
            📸 MEMORY LANE
          </div>
          <h2 className="section-title">
            Our Sweetest <span>Moments & Memories</span>
          </h2>
          <p className="section-subtitle">
            Every snapshot tells a crazy story of our friendship. Click any Polaroid to zoom in!
          </p>

          {/* Filter Tags */}
          <div className="horizontal-scroll-pills" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '32px'
          }}>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  soundEffects.playSparkle();
                  setActiveTag(tag);
                }}
                className={activeTag === tag ? 'pink-gradient-btn' : 'white-pink-btn'}
                style={{
                  padding: '6px 18px',
                  fontSize: '0.85rem'
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Polaroid Grid */}
        <div className="grid-3" style={{ alignItems: 'start' }}>
          {filteredMemories.map((item, index) => {
            const rotation = tilts[index % tilts.length];
            const likes = memoryLikes[item.id] || 12;

            return (
              <div
                key={item.id}
                className="polaroid-card"
                onClick={() => openLightbox(item)}
                style={{ transform: `rotate(${rotation})` }}
              >
                {/* Washi Tape */}
                <div className="polaroid-tape" />

                {/* Photo Image */}
                <div style={{
                  width: '100%',
                  height: '280px',
                  overflow: 'hidden',
                  borderRadius: '4px',
                  background: '#ffe4ec'
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                </div>

                {/* Polaroid Bottom Content */}
                <div style={{ marginTop: '14px', textAlign: 'left' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '4px'
                  }}>
                    <div>
                      {item.nicknameLabel && (
                        <div style={{
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: 'var(--primary-pink)',
                          marginBottom: '2px'
                        }}>
                          {item.nicknameLabel}
                        </div>
                      )}
                      <h3 style={{
                        fontFamily: 'var(--font-handwriting)',
                        fontSize: '1.45rem',
                        fontWeight: 700,
                        color: 'var(--text-dark)',
                        lineHeight: 1.2
                      }}>
                        {item.title}
                      </h3>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {item.date}
                    </span>
                  </div>

                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.4,
                    marginBottom: '10px'
                  }}>
                    {item.caption}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px dashed #ffd1dc',
                    paddingTop: '8px'
                  }}>
                    <span style={{
                      fontSize: '0.75rem',
                      background: '#fff0f5',
                      color: 'var(--deep-pink)',
                      padding: '2px 8px',
                      borderRadius: '50px',
                      fontWeight: 600
                    }}>
                      #{activeTag === 'All' ? item.tag : activeTag}
                    </span>

                    <button
                      onClick={(e) => handleLike(item.id, e)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: 'var(--primary-pink)',
                        fontWeight: 700,
                        fontSize: '0.85rem'
                      }}
                    >
                      <Heart size={16} fill="#ff4b82" />
                      <span>{likes}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category photo count & celebration banner */}
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          padding: '14px 28px',
          background: 'rgba(255, 255, 255, 0.85)',
          borderRadius: '50px',
          maxWidth: '650px',
          margin: '40px auto 0 auto',
          border: '1px solid rgba(255, 182, 193, 0.6)',
          boxShadow: '0 4px 15px rgba(255, 75, 130, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px'
        }}>
          <span style={{ fontSize: '1rem', color: 'var(--text-dark)', fontWeight: 600 }}>
            🌸 Showing <strong>{filteredMemories.length}</strong> special memories of Khushi in <em>"{activeTag}"</em> 💖
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(59, 20, 36, 0.85)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
        onClick={closeLightbox}
        >
          <div
            className="glass-card"
            style={{
              maxWidth: '750px',
              width: '100%',
              background: '#ffffff',
              padding: '24px',
              borderRadius: '24px',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: '#fff0f5',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--deep-pink)',
                zIndex: 10
              }}
            >
              <X size={20} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevLightbox}
              style={{
                position: 'absolute',
                top: '40%',
                left: '12px',
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid #ffd1dc',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--primary-pink)',
                zIndex: 10,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextLightbox}
              style={{
                position: 'absolute',
                top: '40%',
                right: '12px',
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid #ffd1dc',
                borderRadius: '50%',
                width: '42px',
                height: '42px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--primary-pink)',
                zIndex: 10,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Modal Image */}
            <div style={{
              width: '100%',
              height: 'clamp(240px, 45vh, 420px)',
              borderRadius: '16px',
              overflow: 'hidden',
              marginBottom: '16px'
            }}>
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </div>

            {/* Modal Text Details */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  {selectedPhoto.nicknameLabel && (
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary-pink)', marginBottom: '2px' }}>
                      {selectedPhoto.nicknameLabel}
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: 'var(--text-dark)' }}>
                    {selectedPhoto.title}
                  </h3>
                </div>
                <span className="pink-badge">{selectedPhoto.date}</span>
              </div>

              <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '18px' }}>
                {selectedPhoto.caption}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid #ffe4ec',
                paddingTop: '16px'
              }}>
                <button
                  onClick={(e) => handleLike(selectedPhoto.id, e)}
                  className="pink-gradient-btn"
                  style={{ padding: '8px 20px', fontSize: '0.9rem' }}
                >
                  <Heart size={18} fill="#ffffff" />
                  <span>Send Love ({memoryLikes[selectedPhoto.id] || 12})</span>
                </button>

                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Tag: #{selectedPhoto.tag}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
