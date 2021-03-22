import Head from 'next/head';
import HomeLayout from '../components/Layouts/HomeLayout';
import { Hero, SectionLarge } from '../components';

export default function Home() {
	return (
		<>
			<Head>
				<title>Blogr | Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomeLayout>
				<Hero />
				<SectionLarge/>
			</HomeLayout>
		</>
	);
}
