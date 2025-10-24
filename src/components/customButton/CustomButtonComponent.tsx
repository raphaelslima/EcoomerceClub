import React, { FunctionComponent, ButtonHTMLAttributes } from 'react'
import { CustomButtonContainer, IconContainer } from './customButtonStyle'

interface CustomButtonComponentProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: React.ReactNode
}

const CustomButtonComponent: FunctionComponent<CustomButtonComponentProps> = ({
  children,
  startIcon,
  ...rest
}) => {
  return (
    <>
      <CustomButtonContainer {...rest}>
        {startIcon && <IconContainer>{startIcon}</IconContainer>}
        {children}
      </CustomButtonContainer>
    </>
  )
}

export default CustomButtonComponent
