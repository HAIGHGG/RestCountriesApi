import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Loader from './Loader'

function Countries() {
	const [country, setCountry] = useState([])
	const [isLoading, setIsLoading] = useState(true)



	const getCountry = async () => {
		const api = await fetch(`https://restcountries.com/v3.1/all`)
		const data = await api.json()
		setCountry(data)
		setIsLoading(false)
		
	}

	useEffect(() => {
		getCountry()
	}, [])

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<Wrapper>
					{country.map(country => {
						return (
							<Card key={country.cca3}>
								<Link to={'country/' + country.cca3}>
									<div>
										<img src={country.flags.png} alt='' />
										<h2>{country.name.common}</h2>
										<p>
											<span>Population: </span>
											{country.population}
										</p>
										<p>
											<span>Region: </span>
											{country.region}
										</p>
										<p>
											<span>Capital: </span> {country.capital}
										</p>
									</div>
								</Link>
							</Card>
						)
					})}
				</Wrapper>
			)}
		</div>
	)
}

const Wrapper = styled.div`
	display: grid;
	margin: 45px 5%;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 75px;
	@media (max-width: 1355px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media (max-width: 1010px) {
		grid-template-columns: 1fr 1fr;
	}
	@media (max-width: 651px) {
		grid-template-columns: 1fr;
	}
`
const Card = styled.div`
	width: 264px;
	height: 336px;
	margin: 0 auto;
	border-radius: 5px;
	overflow: hidden;
	background-color: var(--element);
	box-shadow: 0px 0px 20px -15px hsl(0, 0%, 8%);

	img {
		width: 264px;
		height: 160px;
		margin-bottom: 20px;
	}
	h2 {
		margin: 0px 25px 15px 25px;
		font-weight: 800;
		font-size: 18px;
	}
	p {
		margin-left: 25px;
		font-size: 14px;
		font-weight: 300;
		line-height: 23px;
		span {
			font-weight: 600;
		}
	}
	div {
		height: 336px;
	}
`

export default Countries
