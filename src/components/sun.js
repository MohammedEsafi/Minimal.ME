import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: ${props => props.side};
	height: ${props => props.side};
`

const Body = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.primary }
`

const Sun = ({ side }) => (
	<Container side={side} >
		<Body />
	</Container>
)

Sun.defaultProps = {
	side: '18px',
}

export default Sun;