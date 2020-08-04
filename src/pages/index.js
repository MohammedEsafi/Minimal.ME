import React from 'react';
import { Layout } from '../components';
import { Main } from '../styles';
import { Hero, About } from '../sections';

const IndexPage = () => (
	<Layout>
		<Main>
			<Hero headline='Hello!' description="I'm <span>Mohammed Esafi</span> — a software engineer based in Morocco." />
			<About />
		</Main>
	</Layout>
)

export default IndexPage;
