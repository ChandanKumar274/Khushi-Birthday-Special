import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InteractiveCake from './components/InteractiveCake';
import MemoryGallery from './components/MemoryGallery';
import BalloonPopGame from './components/BalloonPopGame';
import ReasonsWhy from './components/ReasonsWhy';
import SecretLetter from './components/SecretLetter';
import SurpriseGiftBox from './components/SurpriseGiftBox';
import WishesWall from './components/WishesWall';
import FriendshipQuiz from './components/FriendshipQuiz';
import Footer from './components/Footer';
import PhotoReplaceModal from './components/PhotoReplaceModal';

export default function App() {
  const [isPhotoHelperOpen, setIsPhotoHelperOpen] = useState(false);

  return (
    <div className="app-container" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Navigation bar with controls */}
      <Navbar onOpenPhotoHelper={() => setIsPhotoHelperOpen(true)} />

      {/* Main Hero Spotlight */}
      <HeroSection onOpenPhotoHelper={() => setIsPhotoHelperOpen(true)} />

      {/* Interactive Birthday Cake Ceremony */}
      <InteractiveCake />

      {/* Polaroid Memory Lane Gallery */}
      <MemoryGallery onOpenPhotoHelper={() => setIsPhotoHelperOpen(true)} />

      {/* Pop-the-Balloon Mini Game with Compliments */}
      <BalloonPopGame />

      {/* 8 Reasons Why Khushi is the Best */}
      <ReasonsWhy />

      {/* Interactive Wax-Sealed Secret Letter */}
      <SecretLetter />

      {/* Surprise Gift Box Unwrapping + Official Best Friend Lifetime Award */}
      <SurpriseGiftBox />

      {/* Interactive Wishes Wall (Sticky Notes Pinboard) */}
      <WishesWall />

      {/* Fun Friendship Compatibility Quiz */}
      <FriendshipQuiz />

      {/* Warm Loving Footer */}
      <Footer />

      {/* Guide & Live Preview Modal for Replacing Photos */}
      <PhotoReplaceModal
        isOpen={isPhotoHelperOpen}
        onClose={() => setIsPhotoHelperOpen(false)}
      />
    </div>
  );
}
