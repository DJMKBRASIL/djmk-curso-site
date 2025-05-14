import React from 'react';
import { siteConfig } from '@/config/siteConfig';

interface VideoPlayerProps {
  youtubeVideoEmbedUrl?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ youtubeVideoEmbedUrl }) => {
  if (!youtubeVideoEmbedUrl) {
    return null; // Don't render anything if no URL is provided
  }

  // Basic validation for YouTube embed URL format
  if (!youtubeVideoEmbedUrl.includes("youtube.com/embed/")) {
    console.warn("Invalid YouTube embed URL provided to VideoPlayer component.");
    return <p className="text-center text-accent">Link do vídeo inválido. Verifique o arquivo de configuração.</p>;
  }

  return (
    <section className="w-full bg-primary text-lightText py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Veja uma Amostra do Curso!
        </h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl border-2 border-secondary">
          <iframe 
            src={youtubeVideoEmbedUrl}
            title="YouTube video player - A Arte do Set"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;

