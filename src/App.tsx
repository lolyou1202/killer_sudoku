import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Gameplay } from './pages/Gameplay'
import { Challenge } from './pages/Challenge'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/challenge',
		element: <Challenge />,
	},
	{
		path: '/gameplay',
		element: <Gameplay />,
	},
])

export default function App() {
	return <RouterProvider router={router} />
}
