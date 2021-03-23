import Head from 'next/head';
import HomeLayout from '../components/Layouts/HomeLayout';
import { Hero, ContentLarge, ContentSmall } from '../components';
import { Fragment } from 'react';

const sectionContent = {
	section1: [
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
	],
	section2: [
		{
			heading: 'Free, open, simple',
			text:
				'Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.'
		},
		{
			heading: 'Powerful tooling',
			text:
				'Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.'
		}
	]
};

const smallContent = {
	heading: 'State of the Art Infrastructure',
	text:
		'With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.'
};

export default function Home() {
	return (
		<Fragment>
			<Head>
				<title>Blogr | Home</title>
				<link rel="icon" href="/images/favicon-32x32.png" />
			</Head>
			<HomeLayout>
				<Hero />
				<ContentLarge
					heading="Designed for the future"
					articles={sectionContent.section1}
					background="editor"
				/>
				<ContentSmall {...smallContent} />
				<ContentLarge
					heading="A Platform you can Trust"
					articles={sectionContent.section2}
					background="laptop"
				/>
			</HomeLayout>
		</Fragment>
	);
}
