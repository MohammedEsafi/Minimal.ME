import React from 'react';
import styled, { css } from 'styled-components';
import { Flex, Section, External } from '../styles';
import Icons from '../icons';
import { hex2rgba } from '../utils';

const StyledFooter = styled(Section)`
	padding: 0;
	width: 100%;
	border-top: 1px solid ${({ theme }) => hex2rgba(theme.primary, 0.03)};
`

const addCSS = css`
	min-height: 70px;
`

const Text = styled.p`
	padding: 0;
	margin: 0;
	color: ${({ theme }) => hex2rgba(theme.primary, 0.3)};
`

const Footer = () => (
	<StyledFooter as='footer' >
		<Flex justifyContent='center' alignItems='center' addCSS={addCSS} >
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