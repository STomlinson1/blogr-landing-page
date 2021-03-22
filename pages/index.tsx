import Head from 'next/head';
import HomeLayout from '../components/Layouts/HomeLayout';
import { Hero, FirstSection } from '../components';

export default function Home() {
	return (
		<>
			<Head>
				<title>Blogr | Home</title>
				<link rel="icon" href="/images/favicon-32x32.png" />
			</Head>
			<HomeLayout>
				<Hero />
				<FirstSection/>
			</HomeLayout>
		</>
	);
}
