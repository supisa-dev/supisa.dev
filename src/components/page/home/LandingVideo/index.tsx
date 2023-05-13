import Lottie from 'lottie-react';
import mouseScrollLottie from '@/styles/lottie/mouseScrollLottie.json';
import TypingText from '../TypingText';

export default function LandingVideo() {
  return (
    <article className="relative h-[100vh] w-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/common/kakao-open-chat-banner.webp"
        className="absolute top-1/2 left-1/2 h-full min-h-full w-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/videos/home-background-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute flex h-full w-full items-center justify-center bg-black bg-opacity-50">
        <TypingText />
      </div>
      <div>
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 flex-row items-center justify-center">
          <Lottie
            animationData={mouseScrollLottie}
            style={{width: 50, height: 50, color: 'white'}}
          />
        </div>
      </div>
    </article>
  );
}
