import ReactPlayer from 'react-player/lazy';
import { VideoBackground } from './ProductVideo.styled';

const ProductVideo = () => {
  return (
    <VideoBackground>
      <ReactPlayer
        // className="react-player"
        url="https://youtu.be/IwoyGb-NWDs?si=O-umGSEr9c2yiIXp"
        width="100%"
        height="100%"
        // style={{
        //   position: 'absolute',
        //   top: 0,
        //   left: 0,
        //   display: 'none',
        // }}
      />
    </VideoBackground>
  );
};

export default ProductVideo;
