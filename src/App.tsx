import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Gameplay } from './pages/Gameplay'
import { Challenge } from './pages/Challenge'
import { AppLayout } from './components/Layout/AppLayout/AppLayout'
import { MantineProvider } from '@mantine/core'

export default function App() {
	return (
		<MantineProvider>
			<BrowserRouter>
				<AppLayout>
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
				</AppLayout>
			</BrowserRouter>
		</MantineProvider>
	)
}
