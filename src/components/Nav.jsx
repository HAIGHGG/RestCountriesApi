import React, { useState } from 'react'
import styled from 'styled-components'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Nav() {
	const [Theme, SetTeme] = useState([])

	const handleLightMode = () => {
    SetTeme('light')
		document.documentElement.setAttribute('theme', 'light')
	}

	const handleDarkMode = () => {
    SetTeme('dark')
		document.documentElement.setAttribute('theme', 'dark')
	}

	return (
		<Wrapper>
			<Link to={'/'}>
				<h1>Where in the world?</h1>
			</Link>
			<p onClick={Theme === 'dark' ? handleLightMode : handleDarkMode}>
				{Theme === 'dark' ? (<p><BsFillSunFill /> Light Mode</p>) : (<p><BsFillMoonFill /> Dark Mode</p>)}
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
 

	h1 {
		font-weight: 800;
		font-size: 14px;
	}
	P {
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
