import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import Select from 'react-select'

function Filter() {
	const [input, setInput] = useState('')
	const navigate = useNavigate()
	let params = useParams()

	const options = [
		{ value: 'africa', label: 'Africa' },
		{ value: 'america', label: 'America' },
		{ value: 'asia', label: 'Asia' },
		{ value: 'europe', label: 'Europe' },
		{ value: 'oceania', label: 'Oceania' },
	]

	const customStyles = {
		option: (provided, state) => ({
			...provided,
			backgroundColor: 'var(--element)',
			color: state.isSelected ? 'red' : 'var(--text)',
			padding: 10,
		}),
		menu: (provided, state) => ({
			...provided,
			backgroundColor: 'var(--element)',
		}),
		control: (base, state) => ({
			...base,
			color: 'var(--text)',
			background: 'var(--element)',
			border: 'none',
		}),
		singleValue: provided => ({
			...provided,
			color: 'var(--text)',
		}),
	}

	const submitHandler = e => {
		e.preventDefault()
		input.length === 0 ? navigate('/') : navigate('/name/' + input)
	}

	const changeHandler = e => {
		navigate('/region/' + e.value)
	}

	return (
		<Wrapper>
			<form onSubmit={submitHandler}>
				<WrapperForInput>
					<div>
						<BiSearch size={20} />
						<input
							maxLength={56}
							onChange={e => setInput(e.target.value)}
							type='text'
							value={input}
							placeholder='Search for country...'
						/>
					</div>
				</WrapperForInput>
			</form>
			<WrapperForSelect>
				<Styleddiv>
					<Select
						styles={customStyles}
						options={options}
						onChange={changeHandler}
						isSearchable={true}
						placeholder='Filter by Region'
					/>
				</Styleddiv>
			</WrapperForSelect>
		</Wrapper>
	)
}

const WrapperForSelect = styled.div`

	display: flex;
	justify-content: center;
`
const Styleddiv = styled.div`

	width: 50%;
	max-width: 380px;
	@media (min-width: 768px) {
		width: 220px;
	}
`

const WrapperForInput = styled.div`

	left: 0;
	display: flex;
	justify-content: center;
	

	div {
		
		position: relative;
		max-width: 380px;
		@media (min-width: 768px) {
		width: 480px;
	}
	}

	svg {
		position: absolute;
		top: 15px;
		left: 30px;
	}

	input {
		width: 100%;
		height: 48px;
		padding-left: 70px;
		margin-bottom: 40px;
		font-size: 12px;
		border-radius: 5px;
		border: transparent;
		color: var(--text);
		background-color: var(--element);
		box-shadow: 0px 0px 20px -15px hsl(0, 0%, 8%);

		&::placeholder {
			color: var(--text);
		}
	}
`
const Wrapper = styled.div`

	display: flex;
	flex-direction: column;
	@media (min-width: 768px) {
		justify-content: space-between;
		flex-direction: row;
		margin: 0 75px;
	}
`

export default Filter
