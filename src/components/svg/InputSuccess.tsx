import * as React from "react"
import { SVGProps } from "react"

const InputSuccess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m.261 8.905 3.472 3.472a2.5 2.5 0 0 0 3.535 0L17.99 1.655A.833.833 0 0 0 16.81.477L6.09 11.2a.833.833 0 0 1-1.179 0L1.44 7.727A.833.833 0 0 0 .26 8.905Z"
      fill="#17BC77"
    />
  </svg>
)

export default InputSuccess;
