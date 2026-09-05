import React from 'react';

interface VideoPlayerProps {
  url: string;
  title?: string;
}

/**
 * A clean video player component that supports YouTube and Direct Links (like Google Drive).
 */
export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title }) => {
  const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');
  
  // If it's a Google Drive link, we try to convert it to a direct link or preview link
  let finalUrl = url;
  let useIframe = isYouTube;

  if (url.includes('drive.google.com')) {
    const fileId = url.match(/\/d\/(.+?)\//)?.[1] || url.match(/id=(.+?)(&|$)/)?.[1];
    if (fileId) {
      // For a "clean" player, we try direct link first, 
      // but for embedding reliably, /preview is often safer.
      // However, the user wants "clean", so we'll try to use the native video tag if possible.
      finalUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      
      // If the user specifically wants the iframe (preview), we can detect that
      if (url.includes('/preview')) {
        useIframe = true;
        finalUrl = url;
      }
    }
  }

  if (useIframe) {
    return (
      <div className="aspect-video w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black border-4 border-white/20 relative">
        <iframe 
          src={isYouTube ? `${finalUrl}?modestbranding=1&rel=0&showinfo=0&controls=1` : finalUrl}
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          title={title}
        />
      </div>
    );
  }

  return (
    <div className="aspect-video w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black border-4 border-white/20 relative group">
      <video 
        src={finalUrl}
        className="w-full h-full object-contain"
        controls
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
