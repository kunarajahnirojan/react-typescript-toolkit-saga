import * as React from 'react';

export interface IBadgeProps {
  name: string;
}

export default function Badge(props: IBadgeProps) {
  return <div>{props.name}</div>;
}
