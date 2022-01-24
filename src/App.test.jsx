import { screen, render, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('Should render the header', () => {
  render(<App />)

  const heading = screen.getByRole('heading', {
    name: /Alchemy Logo/i,
  })

  const logo = screen.getByAltText(/Alchemy Logo/i)

  expect(heading).toBeInTheDocument()
  expect(logo).toBeInTheDocument()
})
