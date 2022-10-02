import { BrowserRouter } from 'react-router-dom'
import Pages from './pages/Pages'
import Nav from './components/Nav'


function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Nav />
				<Pages />
			</BrowserRouter>
		</div>
	)
}

export default App
