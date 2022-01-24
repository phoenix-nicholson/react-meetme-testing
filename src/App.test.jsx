import { screen, render, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  const logo = screen.getByAltText(/alchemy logo/i)
  expect(logo).toBeInTheDocument()

  const meet = screen.getByText(/meet /i)
  expect(meet).toBeInTheDocument()

  const name = await screen.findByText(/Vonta/i)
  expect(name).toBeInTheDocument()
})
