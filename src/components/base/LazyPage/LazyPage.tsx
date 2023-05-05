import React from 'react';
import { Loading } from 'components/base';
import animation from 'assets/animations/Loading/clock-loading.json';

export interface Props {
  page: string;
}

function Lazy({ page }: Props) {
  const Component = React.useMemo(() => {
    return React.lazy(() => import(`pages/${page}`));
  }, [page]);

  return (
    <React.Suspense fallback={<Loading animation={animation} />}>
      <Component />
    </React.Suspense>
  );
}

export default Lazy;
