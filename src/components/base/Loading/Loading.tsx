import * as React from 'react';
import Lottie from 'lottie-react';
import { ILoadingProps } from 'models/components/loading';
export default function Loading(props: ILoadingProps) {
  return (
    <React.Fragment>
      <div className="flex justify-center	justify-items-center py-48	">
        <Lottie className="w-32 h-1/12" animationData={props.animation} />
      </div>
    </React.Fragment>
  );
}
