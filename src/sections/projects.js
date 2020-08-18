import React from 'react';
import styled, { css } from 'styled-components';
import { Title } from '../components';
import { Grid, Section, Flex } from '../styles';

const addCSS = css`
	--pad: 10px;
	list-style: none;
	padding: 0;
	margin: 0;
	grid-auto-rows: 1fr;
`

const Container = styled.div`
	padding: var(--pad);
	position: relative;
	height: 100%;

	span:first-child {
		position: absolute;
		width: 100%;
		height: 1px;
		left: 0;
		top: var(--pad);
		background: ${({ theme }) => theme.primary};
	}

	span:nth-child(2) {
		position: absolute;
		width: 1px;
		height: 100%;
		right: var(--pad);
		top: 0;
		background: ${({ theme }) => theme.primary};
	}

	span:nth-child(3) {
		position: absolute;
		width: 100%;
		height: 1px;
		bottom: var(--pad);
		left: 0;
		background: ${({ theme }) => theme.primary};
	}

	span:nth-child(4) {
		position: absolute;
		width: 1px;
		height: 100%;
		left: var(--pad);
		top: 0;
		background: ${({ theme }) => theme.primary};
	}
`

const contentCSS = css`
	height: 100%;
	padding: var(--pad);

	& > p {
		flex: 1;
	}
`

const Projects = () => (
	<Section id='projects' >
		<Title title={['W', 'ORK']} ariaLabel='projects' />
		<Grid as='ul' templateColumns='repeat(auto-fill, minmax(250px, 1fr))' gap='50px' addCSS={addCSS} >
			{Array(5).fill('TEXT').map((value, index) => (
				<li key={index} >
					<Container>
						{Array(4).fill('').map((value, index) => (
							<span key={index} ></span>
						))}
						<Flex flexDirection='column' addCSS={contentCSS} >
							<Flex>TOP</Flex>
							<p>
								DISCRIPTION
								{
									(index & 1) ? <p>OTHER TEXT <br /> OTHER TEXT</p> : null
								}
							</p>
							<Flex>BOTTOM</Flex>
						</Flex>
					</Container>
				</li>
			))}
		</Grid>
	</Section>
)

export default Projects;