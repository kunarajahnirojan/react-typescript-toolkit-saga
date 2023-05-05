import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IIndexProps {}

export default function Index(props: IIndexProps) {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-8">
        <div className="py-24">
          <div>
            <span className="px-6 py-[5px] rounded-full text-red-600 bg-red-100 font-semibold text-xs flex align-center w-max cursor-pointer">
              More than faster
              <img src="https://www.freepnglogos.com/images/strawberry-14949.html" />
            </span>
          </div>
          <div className="flex flex-col font-bold text-[60px]">
            <span>Groceries</span>
            <span>delivered in as </span>
            <span>
              little as{' '}
              <span className="font-normal text-red-500">2 hours</span>
            </span>
          </div>
        </div>
        <div>Groceries delivered in as little as 2 hours</div>
      </div>
    </React.Fragment>
  );
}
