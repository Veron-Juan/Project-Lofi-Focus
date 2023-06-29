"use client"
import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton';
import LoaderPlayer from '@/app/lofi/components/LoaderPlayer';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface VideoPlayerProps  {
  thumbnailSrc: string;
  url:string;
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

const VideoPlayerCommunity: React.FC<VideoPlayerProps> = ({thumbnailSrc, url}) => {
  return (
    <ReactPlayer
      url={url}
      fallback={<LoaderPlayer/>}
      controls
      
      width="250px"
      height="250px"
      
    />
  );
};

export default VideoPlayerCommunity;