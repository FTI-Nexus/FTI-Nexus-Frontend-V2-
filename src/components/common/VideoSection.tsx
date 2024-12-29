import React from 'react';

interface VideoSectionProps {
  videoId?: string;
  title: string;
  description: string;
}

const VideoSection = ({ videoId = '', title, description }: VideoSectionProps) => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="mt-4 text-lg text-gray-600">{description}</p>
        </div>
        
        <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-xl">
          {videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          ) : (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-100 flex items-center justify-center">
              <p className="text-gray-500">Video coming soon</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;