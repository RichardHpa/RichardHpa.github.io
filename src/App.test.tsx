import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const welcome = screen.getByText(/portfolio coming soon/i)
  expect(welcome).toBeInTheDocument()
})
