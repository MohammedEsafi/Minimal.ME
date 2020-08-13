import React from 'react';
import { Section, Flex, External } from '../styles';
import Icons from '../icons';
import { Title } from '../components';

const About = () => (
	<Section id='about' >
		<Flex flexDirection='column' >
			<Title title='who am i?' secondTitle='About' />
			<Flex flexDirection='row' >
				<Flex flexDirection='column' >
					<p>Hey <span role='img' aria-label='hey' >👋</span> I'm Mohammed, a software engineer based in Morocco ! <span role='img' aria-label='Morocco' >🇲🇦</span></p>
					<p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
					<p>Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
					<p>Here are a few technologies I've been working with — 
						<External to='/resume.pdf' rel="nofollow noopener noreferrer" >
							<span>&nbsp;MY RESUME&nbsp;</span>
							<Icons name='external' side='1.4rem' />
						</External>
					</p>
				</Flex>
			</Flex>
		</Flex>
	</Section>
)

export default About;