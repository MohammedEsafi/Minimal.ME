import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: ${props => props.side};
	height: ${props => props.side};
	margin: 10px;
`

const Circle = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	border: 1px ${({ theme }) => theme.primary } solid;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.primary };

	&:after {
		content: '';
		border-radius: 100px 0 0 100px;
		background-color: ${({ theme }) => theme.surface };
		position: absolute;
		width: 50%;
		height: 100%;
		left: 0;
		top: 0;
	}
`

const Switcher = ({ side }) => (
	<Container side={side} >
		<Circle side={side} />
	</Container>
)

Switcher.defaultProps = {
	side: '20px',
}

export default Switcher;