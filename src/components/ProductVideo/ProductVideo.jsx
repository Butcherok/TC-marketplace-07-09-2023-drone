// import ReactPlayer from 'react-player/lazy';

import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { PlayIcon } from '@vidstack/react/icons';
import video from './mavic.mp4';
import { VideoBackground } from './ProductVideo.styled';
import { useRef } from 'react';
// import icon from '../../assets/icons/sprite.svg';

const ProductVideo = () => {
  const player = useRef < MediaPlayerInstance > null;
  const paused = useMediaState('paused', player);
  //   const { paused } = useMediaStore(player);

  return (
    <>
      <VideoBackground>
        <MediaPlayer
          src={video}
          //   playing={playing}
          width="100%"
          height="100%"
          ref={player}
        >
          <MediaProvider />
          <PlayIcon size={40} />
        </MediaPlayer>
      </VideoBackground>
    </>
  );
};

export default ProductVideo;
