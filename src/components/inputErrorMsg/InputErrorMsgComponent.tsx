import { FunctionComponent } from 'react'
import { ErrorMessageContainer } from './inputErrorMsgStyle'

const InputErrorMsgComponent: FunctionComponent = ({ children }) => {
  return <ErrorMessageContainer>{children}</ErrorMessageContainer>
}

export default InputErrorMsgComponent
