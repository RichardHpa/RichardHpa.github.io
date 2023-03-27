import { Typography } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { Layout } from 'components/Layout'
import { NoMatch } from 'components/NoMatch'

export const Home = () => {
  return (
    <Typography variant='h3' component='div' sx={{ flexGrow: 1 }} textAlign='center'>
      Portfolio Coming Soon
    </Typography>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />

        {/* Using path="*"" means "match anything", so this route
        acts like a catch-all for URLs that we don't have explicit
        routes for. */}
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default App

function About() {
  return (
    <Typography variant='h3' component='div' sx={{ flexGrow: 1 }} textAlign='center'>
      About
    </Typography>
  )
}
