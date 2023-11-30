import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      {/*
       * O Outlet é um componente especial do react-router-dom que
       * renderiza o componente correspondente à rota atual.
       */}
      <Outlet />
    </LayoutContainer>
  )
}
