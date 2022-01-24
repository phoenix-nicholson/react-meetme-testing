import { render, screen } from '@testing-library/react'
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<Home user={user} />)

  const header = await screen.findByAltText(/header/i)
  expect(header).toBeInTheDocument()

  const avatar = screen.getByAltText(/avatar/i)
  expect(avatar).toBeInTheDocument()

  const name = screen.getByRole('heading', { name: /vonta/i })
  expect(name).toBeInTheDocument()

  const motto = screen.getByLabelText(/motto/i)
  expect(motto).toBeInTheDocument()

  const favColor = screen.getByText(/crimson/i)
  expect(favColor).toBeInTheDocument()

  const interests = screen.getByRole('heading', { name: /interests/i })
  expect(interests).toBeInTheDocument()

  const list = screen.getByRole('list')
  expect(list).toBeInTheDocument()
})
