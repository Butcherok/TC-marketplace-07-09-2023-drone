import ReactPlayer from 'react-player/lazy';
import { VideoBackground } from './ProductVideo.styled';

const ProductVideo = () => {
  return (
    <VideoBackground className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://youtu.be/IwoyGb-NWDs?si=O-umGSEr9c2yiIXp"
        controls={true}
        width="100%"
        height="100%"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />
    </VideoBackground>
  );
};

export default ProductVideo;
