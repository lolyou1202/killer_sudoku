import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Gameplay } from './pages/Gameplay'
import { Challenge } from './pages/Challenge'
import { Layout } from './components/Layout/Layout'
import { MantineProvider } from '@mantine/core'

export default function App() {
	return (
		<MantineProvider>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route
							path='/'
							element={<Home />}
						/>
						<Route
							path='challenge'
							element={<Challenge />}
						/>
						<Route
							path='gameplay'
							element={<Gameplay />}
						/>
					</Routes>
				</Layout>
			</BrowserRouter>
		</MantineProvider>
	)
}
