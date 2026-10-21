'use client';

import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  title?: string;
}

export default function VideoPlayer({
  src = '/media/zim-sourcing-commercial.mp4',
  poster = '/assets/img/video-poster.jpg',
  title = 'Inside ZIM Sourcing Ltd · Ethical Production & QA in Dhaka',
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div
      className="video-container"
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg, 16px)',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        border: '1px solid var(--border)',
        background: '#000',
        aspectRatio: '16 / 9',
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />

      {/* Central Play Button Overlay when paused */}
      {!isPlaying && (
        <div
          onClick={togglePlay}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(10, 16, 26, 0.45)',
            backdropFilter: 'blur(2px)',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'var(--teal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 30px rgba(13, 148, 136, 0.6)',
              transform: 'scale(1)',
              transition: 'transform 0.2s ease',
            }}
          >
            <Play className="w-8 h-8" fill="#000" color="#000" style={{ marginLeft: '4px' }} />
          </div>
          <span
            style={{
              marginTop: '1rem',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '1.1rem',
              textShadow: '0 2px 8px rgba(0,0,0,0.8)',
            }}
          >
            {title}
          </span>
        </div>
      )}

      {/* Custom Video Control Bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '12px 18px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#fff',
          zIndex: 5,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            type="button"
            onClick={togglePlay}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            style={{
              background: 'none',
              border: 'none',
              color: '#fff',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
            Commercial Feature &middot; Dhaka Facilities
          </span>
        </div>

        <button
          type="button"
          onClick={handleFullscreen}
          style={{
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
          aria-label="View Fullscreen"
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
