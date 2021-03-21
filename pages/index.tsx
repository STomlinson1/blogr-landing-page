import Head from 'next/head';
import HomeLayout from '../components/Layouts/HomeLayout';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HomeLayout>
				<h1>Blogr Landing Page</h1>
			</HomeLayout>
		</div>
	);
}
