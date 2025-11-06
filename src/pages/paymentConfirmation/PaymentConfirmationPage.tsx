import { FunctionComponent, useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Header from '../../components/header/HeaderComponent'
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent
} from './paymentConfirmation'
import CustomButtonComponent from '../../components/customButton/CustomButtonComponent'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from 'react-icons/ai'
import Colors from '../../theme/thmeColors'
import { CartContext } from '../../contexts/cartContext'

const PaymentConfirmationPage: FunctionComponent = () => {
  const { clearProducts } = useContext(CartContext)
  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const handleeGoToHomePage = () => {
    navigate('/')
  }

  const status = searchParams.get('success')
  const isCanceled = searchParams.get('camceled') === 'true'

  useEffect(() => {
    if (status === 'true') {
      clearProducts()
    }
  }, [status])

  return (
    <>
      <Header />
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {status === 'true' && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.success} />
              <p>Sua compra foi finalizada com sucesso!</p>
            </>
          )}
          {(status === 'false' || isCanceled) && (
            <>
              <AiOutlineCloseCircle size={120} color={Colors.error} />
              <p>
                Ocorreu um erro ao finalizar sua compra. Por favor tente
                novamente!
              </p>
            </>
          )}

          <CustomButtonComponent
            startIcon={<AiOutlineHome size={18} />}
            onClick={handleeGoToHomePage}>
            Ir para a página inicial
          </CustomButtonComponent>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  )
}

export default PaymentConfirmationPage
