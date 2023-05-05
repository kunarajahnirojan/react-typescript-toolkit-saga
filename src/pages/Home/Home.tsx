import * as React from 'react';
import Lottie from 'lottie-react';
import anim from 'assets/animations/Loading/clock-loading.json';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="flex justify-center	justify-items-center py-48	">
      <Lottie className="w-32 h-1/12" animationData={anim} />
    </div>
  );
}
