import styled from 'styled-components'
import React from 'react'

function Loader() {
	return (
		<Wrapper>
			<LoaderDiv />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 50%;
	@media (min-width: 1140px) {
		margin-top: 15%;
	}
`

const LoaderDiv = styled.div`
	border: 16px solid #2b3945; 
	border-top: 16px solid #ffffff; 
	border-radius: 50%;
	width: 120px;
	height: 120px;
	animation: spin 2s linear infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
export default Loader
