import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Filter from '../components/Filter'

function Name() {
	const [searchedCountries, setSearchedCountries] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [isFound, setIsFound] = useState(false)

	let params = useParams()
	const getSearched = async () => {
		const api = await fetch(`https://restcountries.com/v3.1/name/${params.search}`)
		const data = await api.json()
		data.status !== 404 ? setIsFound(true) : console.log('')
		setSearchedCountries(data)
		setIsLoading(false)
	}

	useEffect(() => {
		getSearched(params.search)
	}, [params.search])

	return (
		<div><Filter />
			{isLoading ? (
				<Loader />
			) : isFound ? (
				<Wrapper>
					{searchedCountries.map(country => {
						return (
							<Card key={country.cca3}>
								<Link to={'/country/' + country.cca3}>
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
			) : (
				<WrapperNotFound>
					<DivNotFound>No results found</DivNotFound>
				</WrapperNotFound>
			)}
		</div>
	)
}

const WrapperNotFound = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 50%;
	@media (min-width: 900px) {
		margin-top: 10%;
	}
`

const DivNotFound = styled.div`
	font-size: 34px;
	font-weight: 800;
`

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
	color: var(--text);
	transition: background-color 0.2s;

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

export default Name
