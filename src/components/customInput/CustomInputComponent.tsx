import React, { InputHTMLAttributes } from 'react'
import { CustomInputContainer } from './customInputStyle'

interface CustomInputComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean
}

const CustomInputComponent = React.forwardRef<
  HTMLInputElement,
  CustomInputComponentProps
>(({ hasError = false, ...rest }, ref) => {
  return <CustomInputContainer ref={ref} hasError={hasError} {...rest} />
})

CustomInputComponent.displayName = 'CustomInputComponent'

export default CustomInputComponent
