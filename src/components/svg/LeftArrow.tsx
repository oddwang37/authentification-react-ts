import * as React from "react"
import { SVGProps } from "react"

const LeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={10}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.667 3.333H2L4.193 1.14a.666.666 0 1 0-.94-.947L.393 3.06C.143 3.308.001 3.647 0 4c.003.35.145.686.393.933L3.253 7.8a.667.667 0 1 0 .94-.947L2 4.666h6.667a.667.667 0 1 0 0-1.333Z"
      fill="#6F7488"
    />
  </svg>
)

export default LeftArrow
