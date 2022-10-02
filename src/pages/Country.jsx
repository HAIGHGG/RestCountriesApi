import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import styled from 'styled-components'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'

import React from 'react'

function Country() {
	let params = useParams()
	const navigate = useNavigate()
	const [details, setDetails] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [border, setBorders] = useState([])

	const backButton = () => {
		navigate(-1)
	}

	const fetchDetails = async () => {
		const data = await fetch(`https://restcountries.com/v3.1/alpha/${params.name}`)
		const [detailData] = await data.json()
		setDetails(detailData)
		setBorders(detailData.borders)
		setIsLoading(false)
	}

	useEffect(() => {
		fetchDetails()
	}, [params.name])

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					<WrapperButton>
						<div onClick={backButton}>
							<AiOutlineArrowLeft /> Back
						</div>
					</WrapperButton>
					<Wrapper>
						<img src={details.flags.svg} alt='' />
						<section>
							<div>
								<h2>{details.name.common}</h2>
								<p>
									<span>Official name: </span>
									{details.name.official}
								</p>
								<p>
									<span>Population: </span>
									{details.population}
								</p>
								<p>
									<span>Region: </span>
									{details.region}
								</p>
								<p>
									<span>Sub Region: </span>
									{details.subregion}
								</p>
								<p>
									<span>Capital: </span>
									{details.capital}
								</p>
							</div>
							<div>
								<p>
									<span>Top Level Domain: </span>
									{details.tld}
								</p>
								<p>
									<span>Currencies: </span>
									{Object.values(details.currencies)
										.map(currency => currency.name)
										.join(', ')}
								</p>
								<p>
									<span>Languages: </span>
									{Object.values(details.languages)
										.map(language => language)
										.join(', ')}
								</p>

								{typeof border === 'undefined' ? (
									<p>Borders: None</p>
								) : (
									<p>
										Borders:
										{border.map(border => {
											return (
												<Link to={'/country/' + border} key={border}>
													<BorderButton>{border}</BorderButton>
												</Link>
											)
										})}
									</p>
								)}
							</div>
						</section>
					</Wrapper>
				</div>
			)}
		</div>
	)
}
const BorderButton = styled.span`
	margin: 0 5px;
	padding: 5px;
	box-shadow: 0px 0px 5px 0px hsl(0, 0%, 9%);
	background-color: var(--element);
`

const WrapperButton = styled.div`
	display: flex;
	justify-content: center;

	div {
		display: flex;
		align-items: center;
		justify-content: space-around;
		height: 32px;
		width: 104px;
		margin: 40px 200px 60px 0;
		padding: 0 20px;
		border-radius: 2px;
		box-shadow: 0px 0px 5px 0px hsl(0, 0%, 9%);
		background-color: var(--element);
		cursor: pointer;
	}
	@media (min-width: 768px) {
		justify-content: flex-start;
		div {
			margin-left: 100px;
		}
	}
`

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 305px;
		height: 229px;
		margin-bottom: 45px;
		border-radius: 5px;
	}

	h2 {
		font-size: 22px;
		font-weight: 800;
		margin-bottom: 15px;
	}
	section {
		width: 305px;
		overflow-wrap: break-word;
		div {
			p {
				font-size: 14px;
				font-weight: 300;
				line-height: 33px;
				span {
					font-weight: 600;
				}
			}
		}
		div:nth-child(2) {
			margin-top: 25px;
		}
	}
	@media (min-width: 975px) {
		flex-direction: row;
		justify-content: space-around;

		img {
			width: 447px;
			height: 320px;
			margin-bottom: 45px;
			border-radius: 5px;
		}

		h2 {
			font-size: 32px;
			font-weight: 800;
			margin-bottom: 25px;
		}
		section {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			width: 700px;
			div {
				p {
					font-size: 16px;
					font-weight: 300;
					line-height: 33px;
					span {
						font-weight: 600;
					}
				}
			}
			div:nth-child(1) {
				min-width: 300px;
			}
			div:nth-child(2) {
				margin-top: 30px;
				margin-left: 50px;
			}
		}
	}
	@media (min-width: 1140px) {
		img {
			width: 560px;
			height: 401px;
		}
	}
`

export default Country
