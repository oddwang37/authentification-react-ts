import { SVGProps } from 'react';

const Pencil = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15.235.765a2.417 2.417 0 0 0-3.416 0L.977 11.608A3.312 3.312 0 0 0 0 13.965v1.368A.667.667 0 0 0 .667 16h1.368a3.31 3.31 0 0 0 2.357-.976L15.235 4.181a2.417 2.417 0 0 0 0-3.416ZM3.45 14.081a2.014 2.014 0 0 1-1.414.586h-.702v-.702a1.987 1.987 0 0 1 .586-1.414l8.229-8.229 1.533 1.533-8.232 8.226ZM14.292 3.238l-1.67 1.671-1.534-1.53 1.671-1.671a1.083 1.083 0 0 1 1.53 1.533l.003-.003Z"
      fill="#466EFA"
    />
  </svg>
);

export default Pencil;
