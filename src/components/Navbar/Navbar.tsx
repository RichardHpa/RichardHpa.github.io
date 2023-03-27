import { AppBar, Toolbar, Container, Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <AppBar position='fixed'>
        <Container>
          <Toolbar>
            <Button color='inherit' component={NavLink} to='/'>
              Home
            </Button>
            <Button color='inherit' component={NavLink} to='/about'>
              About
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  )
}
