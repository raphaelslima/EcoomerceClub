import React, { FunctionComponent, InputHTMLAttributes } from 'react'
import { CustomInputContainer } from './customInputStyle'

interface CustomInputComponentProps
  extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean // tipo primitivo e opcional
}

const CustomInputComponent: FunctionComponent<CustomInputComponentProps> = ({
  hasError = false,
  ...rest
}) => {
  return <CustomInputContainer hasError={hasError} {...rest} />
}

export default CustomInputComponent
