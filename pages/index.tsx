import Head from 'next/head';
import HomeLayout from '../components/Layouts/HomeLayout';
import { Hero, ContentLarge } from '../components';
import { Fragment } from 'react';

const articles = [
	{
		heading: 'Introducing an extensible editor',
		text:
			'Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports managment of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.'
	},
	{
		heading: 'Robust content management',
		text:
			"Flexible content management enables users to easily move through posts.Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, your're in full control."
	}
];

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Blogr | Home</title>
				<link rel="icon" href="/images/favicon-32x32.png" />
			</Head>
			<HomeLayout>
				<Hero />
				<ContentLarge heading="Designed for the future" articles={articles} />
			</HomeLayout>
		</Fragment>
	);
}
