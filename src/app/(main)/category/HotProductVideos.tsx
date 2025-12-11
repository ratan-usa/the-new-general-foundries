'use client';

import React from 'react';
import { Play, Maximize2 } from 'lucide-react';

export interface VideoItem {
  id: number;
  title: string;
  videoUrl: string;
}

// 1. Updated Interface to accept videoName
interface HotProductVideosProps {
  title: string;          // The main section header (e.g., "Hot Products")
  videos?: VideoItem[];   // Option A: Pass a full list of videos
  videoUrl?: string;      // Option B: Pass a single video URL
  videoName?: string;     // Option B: Pass the title for that single video
}

export default function HotProductVideos({ title, videos, videoUrl, videoName }: HotProductVideosProps) {

  // 2. Logic: Create the list to render
  // If 'videos' array is provided, use it.
  // If not, check if 'videoUrl' exists and wrap it in an array using 'videoName' as the title.
  const videoList: VideoItem[] = videos && videos.length > 0 
    ? videos 
    : videoUrl 
      ? [{ id: 1, title: videoName || "Product Video", videoUrl: videoUrl }] 
      : [];

  // If no videos exist, don't render the section
  if (videoList.length === 0) return null;

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.play().catch(error => {
        console.log("Autoplay prevented:", error);
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector('video');
    if (video) {
      video.pause();
      video.currentTime = 0; // Reset to start
    }
  };

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-10 mx-auto">

        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          {title}
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">

          {videoList.map((video) => (
            <div
              key={video.id}
              className="min-w-[200px] w-[200px] flex-shrink-0 group cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >

              {/* Video Card Container */}
              <div className="relative aspect-square w-full rounded-lg overflow-hidden border border-gray-200 bg-black mb-3">

                <video
                  src={video.videoUrl}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay (Fades out on hover) */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                  <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                    <Play className="w-5 h-5 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Fullscreen Icon */}
                <div className="absolute bottom-2 right-2 p-1.5 bg-black/60 rounded-md backdrop-blur-sm pointer-events-none">
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Video Title */}
              <h3 className="text-sm font-medium text-gray-700 leading-snug group-hover:text-[#cc2221] transition-colors line-clamp-2">
                {video.title}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}