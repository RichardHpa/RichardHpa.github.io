import { render, screen } from '@testing-library/react'

import { Home } from './Home'

describe('Home', () => {
  it('should render', () => {
    render(<Home />)

    expect(screen.getByText("Hey I'm Richard")).toBeInTheDocument()
  })
})
