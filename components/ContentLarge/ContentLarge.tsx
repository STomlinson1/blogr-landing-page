import styles from './ContentLarge.module.scss';
import Image from 'next/image';

interface SectionLargeProps {
	heading?: string;
	articles: Article[];
}

interface Article {
	heading: string;
	text: string;
}

const SectionLarge: React.FC<SectionLargeProps> = ({ heading, articles }) => {
	return (
		<section className={styles.Section}>
			{heading && <h2 className={styles.header}>{heading}</h2>}

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
				{articles.map((article) => (
					<article key={article.heading} className={styles.content}>
						<h3>{article.heading}</h3>
						<p>{article.text}</p>
					</article>
				))}
			</div>
		</section>
	);
};

export default SectionLarge;
