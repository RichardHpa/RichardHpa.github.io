import { Routes, Route } from 'react-router-dom'

import { NoMatch } from 'components/NoMatch'

import { Home } from 'pages/Home'

export const BaseRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NoMatch />} />
    </Routes>
  )
}
