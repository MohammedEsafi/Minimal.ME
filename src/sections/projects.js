import React from 'react';
import styled, { css } from 'styled-components';
import { Title } from '../components';
import { Grid, Section, Flex, media } from '../styles';
import { hex2rgba } from '../utils';

const addCSS = css`
	--pad: 10px;
	list-style: none;
	display: none;
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

const nodeCSS = css`
	border-bottom: 1px solid ${({ theme }) => hex2rgba(theme.primary, 0.1)};
	flex-wrap: wrap;
	padding: 18px 0;
`

const SUBTitle = styled.div`
	width: 150px;
	font-weight: 600;
`

const Stars = styled.div`
	width: 100px;
	text-align: right;
`

const Description = styled.p`
	flex: 1;
	margin: 0;

	${media.desktop`
		order: 2;
    flex: 1 1 100%;
	`}
`

const Noteworthy = () => (
	<Flex flexDirection='column' >
		<Flex flexDirection='row' justifyContent='space-between' addCSS={nodeCSS} >
			<SUBTitle>FOLDSettings</SUBTitle>
			<Description>A cleanup script to free some memory on your 42 session / workstation </Description>
			<Stars>5669 ★</Stars>
		</Flex>
	</Flex>
)

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
		<Noteworthy />
		<Noteworthy />
		<Noteworthy />
	</Section>
)

export default Projects;