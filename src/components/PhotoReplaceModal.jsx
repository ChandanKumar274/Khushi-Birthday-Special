import React, { useState } from 'react';
import { X, Image, FolderOpen, Code, Sparkles, Check, Upload } from 'lucide-react';
import { soundEffects } from '../utils/audio';

export default function PhotoReplaceModal({ isOpen, onClose }) {
  const [testPreview, setTestPreview] = useState(null);

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      soundEffects.playSparkle();
      const reader = new FileReader();
      reader.onload = (event) => {
        setTestPreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(59, 20, 36, 0.85)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      zIndex: 3000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(10px, 3vw, 20px)'
    }}
    onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '680px',
          width: '100%',
          background: '#ffffff',
          padding: 'clamp(20px, 4vw, 36px) clamp(16px, 4vw, 30px)',
          borderRadius: 'clamp(16px, 4vw, 28px)',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#fff0f5',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--deep-pink)'
          }}
        >
          <X size={20} />
        </button>

        <div className="pink-badge" style={{ marginBottom: '12px' }}>
          🖼️ PHOTO REPLACEMENT GUIDE
        </div>

        <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--text-dark)', marginBottom: '8px' }}>
          Khushi Ki Asli Photos Kaise Lagayein? 📸
        </h3>

        <p style={{ fontSize: '1rem', color: 'var(--text-body)', marginBottom: '24px', lineHeight: 1.5 }}>
          Aapne bola tha ki abhi random photos lelo aur baad me replace karoge. Ye bohot aasan hai!
          Aap niche diye gaye 2 simple tareeko me se koi bhi use kar sakte hain:
        </p>

        {/* Method 1 */}
        <div style={{
          background: '#fff5f8',
          border: '1.5px solid #ffccd8',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <FolderOpen size={20} color="#ff4b82" />
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-dark)' }}>
              Method 1: Local Photos Folder (Sabse Aasan)
            </h4>
          </div>
          <ol style={{ paddingLeft: '20px', fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
            <li>
              Aapke Desktop par jo <code>khushi</code> folder hai, uske andar <code>public/photos/</code> folder banayein.
            </li>
            <li>
              Waha Khushi ki photos daal de (jaise <code>photo1.jpg</code>, <code>photo2.jpg</code>).
            </li>
            <li>
              Fir <code>src/data/birthdayData.js</code> file kholein aur URL ki jagah <code>"/photos/photo1.jpg"</code> likh dein.
            </li>
          </ol>
        </div>

        {/* Method 2 */}
        <div style={{
          background: '#fff5f8',
          border: '1.5px solid #ffccd8',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Code size={20} color="#ff4b82" />
            <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-dark)' }}>
              Method 2: Google Drive / Cloud Links / Direct URL
            </h4>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
            Aap <code>src/data/birthdayData.js</code> me direct image links bhi paste kar sakte hain. Saari photos, captions aur wishes ek hi jagah organized hain!
          </p>
        </div>

        {/* Live Test Previewer */}
        <div style={{
          background: '#ffffff',
          border: '2px dashed #ff4b82',
          borderRadius: '18px',
          padding: '22px',
          textAlign: 'center'
        }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--deep-pink)', marginBottom: '8px' }}>
            ✨ Live Test Preview (Abhi Test Karein):
          </h4>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
            Aap apne computer se koi photo select karke yaha preview karke dekh sakte hain:
          </p>

          <label className="pink-gradient-btn" style={{ padding: '10px 24px', cursor: 'pointer' }}>
            <Upload size={18} />
            Apne Computer Se Photo Chuniye 📁
            <input type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
          </label>

          {testPreview && (
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#10b981', marginBottom: '8px' }}>
                ✓ Photo Preview Successful!
              </p>
              <div style={{
                width: '180px',
                height: '180px',
                margin: '0 auto',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                border: '3px solid #ff4b82'
              }}>
                <img src={testPreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          )}
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <button onClick={onClose} className="pink-gradient-btn" style={{ padding: '10px 30px' }}>
            Samajh Gaya, Shuru Karein! 👍
          </button>
        </div>
      </div>
    </div>
  );
}
