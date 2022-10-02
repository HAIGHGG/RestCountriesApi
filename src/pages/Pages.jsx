import React from 'react'
import Home from './Home'
import Name from './Name'
import Country from './Country'
import Region from './Region'
import { Route, Routes, useLocation } from 'react-router-dom'

function Pages() {
	const location = useLocation()
		return (
	<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Home />} />
				<Route path='/name/:search' element={<Name />} />
				<Route path='/country/:name' element={<Country />} />
				<Route path='/region/:search' element={<Region />} />
			</Routes>
	)
}

export default Pages