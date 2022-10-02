import React, { useState } from 'react'
import styled from 'styled-components'
import { BsMoon, BsFillSunFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Nav() {
	const [Theme, SetTheme] = useState([])

	const handleLightMode = () => {
    SetTheme('light')
		document.documentElement.setAttribute('theme', 'light')
	}

	const handleDarkMode = () => {
    SetTheme('')
		document.documentElement.setAttribute('theme', '')
	}

	return (
		<Wrapper>
			<Link to={'/'}>
				<h1>Where in the world?</h1>
			</Link>
			<p onClick={Theme === 'light' ? handleDarkMode : handleLightMode}>
				{Theme === 'light' ? (<p><BsMoon /> Dark Mode</p>) : (<p><BsFillSunFill /> Light Mode</p>)}
			</p>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	padding: 0 15px;
	background-color: var(--element);
	color: var(--text);
	margin-bottom: 25px;
	box-shadow: 0px -15px 20px 0px hsl(0, 0%, 9%);
	transition: background-color 0.2s;
 

	h1 {
		font-weight: 800;
		font-size: 14px;
	}
	P {
		font-weight: 600;
		font-size: 16px;
    cursor: pointer;
	}
	@media (min-width: 768px) {
		padding: 0 80px;
		h1 {
			font-size: 24px;
		}
	}
`

export default Nav
