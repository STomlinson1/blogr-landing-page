import styles from './FirstSection.module.scss';
import Image from 'next/image';

const SectionLarge = () => {
	return (
		<section className={styles.Section}>
			<h2 className={styles.header}>Designed for the future</h2>
			<div className={styles.img}>
				<Image
					src="/images/illustration-editor-mobile.svg"
					width={500}
					height={400}
					alt="illustration mobile image"
					layout="responsive"
				/>
			</div>
			<div className={styles.container}>
				<article className={styles.content}>
					<h3>Introducing an extensible editor</h3>
					<p>
						Blogr features an exceedingly intuitive interface which lets you focus on
						one thing: creating content. The editor supports managment of multiple
						blogs and allows easy manipulation of embeds such as images videos, and
						Markdown. Extensibility with plugins and themes provide easy ways to add
						functionality or cange the looks of a blog.
					</p>
				</article>
				<article className={styles.content}>
					<h3>Robust content management</h3>
					<p>
						Flexible content management enables users to easily move through posts.
						Increase the usability of your blog by adding customized categories,
						sections, format, or flow. With this functionality, your're in full
						control.
					</p>
				</article>
			</div>
		</section>
	);
};

export default SectionLarge;
