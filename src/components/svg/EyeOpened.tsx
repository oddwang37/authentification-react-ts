import * as React from "react"
import { SVGProps } from "react"

const EyeOpened = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#0B1332">
      <path d="M19.392 7.85C18.1 5.745 15.16 2.213 10 2.213c-5.16 0-8.1 3.532-9.393 5.637a4.09 4.09 0 0 0 0 4.301C1.9 14.256 4.84 17.788 10 17.788c5.16 0 8.1-3.532 9.392-5.637a4.09 4.09 0 0 0 0-4.301Zm-1.42 3.429c-1.11 1.805-3.623 4.842-7.972 4.842-4.35 0-6.862-3.037-7.972-4.842a2.431 2.431 0 0 1 0-2.557C3.138 6.917 5.651 3.88 10 3.88s6.861 3.034 7.971 4.842a2.432 2.432 0 0 1 0 2.557Z" />
      <path d="M10 5.833a4.167 4.167 0 1 0 0 8.333 4.167 4.167 0 0 0 0-8.333Zm0 6.667A2.5 2.5 0 1 1 10 7.5a2.5 2.5 0 0 1 0 4.999Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default EyeOpened
