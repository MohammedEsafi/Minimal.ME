import React from 'react';
import { Layout } from '../components';
import { Main } from '../styles';
import { Hero, About } from '../sections';

const IndexPage = () => (
	<Layout>
		<Main>
			<Hero headline='Hello!' description="— I'm Mohammed Esafi, a software engineer based in Morocco." />
			<About />
		</Main>
	</Layout>
)

export default IndexPage;
