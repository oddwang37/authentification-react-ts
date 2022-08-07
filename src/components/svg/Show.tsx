import { SVGProps } from 'react';

const Show = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={9} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 8.447a3.333 3.333 0 0 1-2.36-.973L.195 2.027a.67.67 0 1 1 .947-.946l5.446 5.446a2 2 0 0 0 2.827 0l5.447-5.446a.67.67 0 1 1 .946.946l-5.446 5.447A3.334 3.334 0 0 1 8 8.447Z"
      fill="#717583"
    />
  </svg>
);

export default Show;
