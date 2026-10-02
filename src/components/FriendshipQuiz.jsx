import React, { useState } from 'react';
import { Sparkles, CheckCircle2, RotateCcw, Heart, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_DATA } from '../data/birthdayData';
import { soundEffects } from '../utils/audio';

export default function FriendshipQuiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const questions = BIRTHDAY_DATA.quizQuestions;

  const handleSelectOption = (points) => {
    soundEffects.playSparkle();
    const nextAnswers = [...selectedAnswers, points];
    setSelectedAnswers(nextAnswers);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
      soundEffects.playCheer();
      confetti({
        particleCount: 120,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#ff4b82', '#ff8fb0', '#ffffff', '#ffd700']
      });
    }
  };

  const handleRetake = () => {
    soundEffects.playSparkle();
    setCurrentQ(0);
    setSelectedAnswers([]);
    setShowResult(false);
  };

  return (
    <section style={{
      padding: '80px 0',
      background: 'linear-gradient(180deg, #ffffff 0%, #fff4f8 50%, #ffffff 100%)',
      position: 'relative'
    }}>
      <div className="container-custom">
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="pink-badge" style={{ marginBottom: '12px' }}>
            💡 FUN MINI QUIZ
          </div>
          <h2 className="section-title">
            The Khushi & Bestie <span>Friendship Meter</span>
          </h2>
          <p className="section-subtitle">
            Let's calculate the official friendship compatibility score!
          </p>
        </div>

        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <div className="glass-card" style={{
            padding: '36px 28px',
            background: '#ffffff',
            border: '2px solid #ffb6c1'
          }}>
            {!showResult ? (
              <div>
                {/* Question Progress bar */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)'
                }}>
                  <span>Question {currentQ + 1} of {questions.length}</span>
                  <span style={{ color: 'var(--primary-pink)' }}>Fun Mode ⚡</span>
                </div>

                <div style={{
                  width: '100%',
                  height: '6px',
                  background: '#ffe4ec',
                  borderRadius: '10px',
                  marginBottom: '24px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${((currentQ + 1) / questions.length) * 100}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #ff4b82, #ff7597)',
                    transition: 'width 0.3s ease'
                  }} />
                </div>

                {/* Question Title */}
                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: 'var(--text-dark)',
                  marginBottom: '24px',
                  lineHeight: 1.4
                }}>
                  {questions[currentQ].question}
                </h3>

                {/* Options List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {questions[currentQ].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(opt.points)}
                      className="glass-card-subtle"
                      style={{
                        padding: '16px 20px',
                        textAlign: 'left',
                        fontSize: '1rem',
                        fontWeight: 600,
                        color: 'var(--text-dark)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease',
                        border: '1px solid #ffd1dc'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#fff0f5';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                        e.currentTarget.style.transform = 'translateX(0px)';
                      }}
                    >
                      <span>{opt.text}</span>
                      <span style={{ color: 'var(--primary-pink)' }}>💖</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Quiz Score Result */
              <div style={{ textAlign: 'center', padding: '10px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '8px' }}>💯🔥✨</div>
                <div className="pink-badge" style={{ marginBottom: '12px' }}>
                  CERTIFIED SCORE
                </div>
                <h3 style={{
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  color: 'var(--primary-pink)',
                  marginBottom: '12px'
                }}>
                  1000% Soulmate Besties!
                </h3>

                <p style={{
                  fontSize: '1.1rem',
                  color: 'var(--text-body)',
                  lineHeight: 1.6,
                  marginBottom: '28px'
                }}>
                  Scientifically proven and celestial verified: Teri aur meri dosti ekdum unmatched hai!
                  May our bond stay full of fun, laughs, and zero drama forever! 🫂🌸
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '14px',
                  flexWrap: 'wrap'
                }}>
                  <button onClick={handleRetake} className="white-pink-btn" style={{ padding: '10px 24px' }}>
                    <RotateCcw size={16} /> Play Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
