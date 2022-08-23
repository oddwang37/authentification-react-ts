import * as React from "react"
import { SVGProps } from "react"

const InputError = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11 1a.833.833 0 0 0-1.178 0L6 4.822 2.178 1A.833.833 0 0 0 1 2.178L4.822 6 1 9.822A.833.833 0 0 0 2.178 11L6 7.178 9.822 11A.833.833 0 1 0 11 9.822L7.178 6 11 2.178A.833.833 0 0 0 11 1Z"
      fill="#F46666"
    />
  </svg>
)

export default InputError;
