import ReactPlayer from 'react-player/lazy';
import video from './mavic.mp4';
import { VideoBackground } from './ProductVideo.styled';

const ProductVideo = () => {
  ReactPlayer.removeCustomPlayers();
  return (
    <>
      <VideoBackground>
        <ReactPlayer url={video} controls={true} />
      </VideoBackground>
    </>
  );
};

export default ProductVideo;
