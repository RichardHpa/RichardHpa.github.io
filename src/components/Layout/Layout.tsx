import { Container } from '@mui/material'
import { Navbar } from 'components/Navbar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Container
        sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Outlet />
      </Container>
    </>
  )
}
