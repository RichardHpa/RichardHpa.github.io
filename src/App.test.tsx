import { render, screen } from '@testing-library/react'
import { Home } from './App'

test('renders learn react link', () => {
  render(<Home />)
  const welcome = screen.getByText(/portfolio coming soon/i)
  expect(welcome).toBeInTheDocument()
})
