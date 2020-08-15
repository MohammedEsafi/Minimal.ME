import React from 'react';
import styled from 'styled-components';
import { Flex, Section, External, media } from '../styles';
import Icons from '../icons';
import { hex2rgba } from '../utils';
import { Social } from '.';

const StyledFooter = styled(Section)`
	padding: 25px 100px;
	width: 100%;

	${media.tablet`
		padding: 50px;
		border-top: 1px solid ${({ theme }) => hex2rgba(theme.primary, 0.3)};
	`};
	
	${media.phone`
		padding: 50px 25px;
	`};
`

const Text = styled.p`
	padding: 0;
	margin: 0;
	text-align: center;
	color: ${({ theme }) => theme.primary};

	${media.tablet`
		margin-top: 15px;
	`};
`

const Footer = () => (
	<StyledFooter as='footer' >
		<Flex justifyContent='center' alignItems='center' flexDirection='column' >
			<Social />
			<Text>
				Designed & Built by
				<External to='https://github.com/MohammedEsafi/V1' >
					<span>&nbsp;Mohammed Esafi&nbsp;</span>
					<Icons name='external' side='1.4rem' />
				</External>
			</Text>
		</Flex>
	</StyledFooter>
)

export default Footer;