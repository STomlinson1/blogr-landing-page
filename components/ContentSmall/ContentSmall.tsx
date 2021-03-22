import styles from './ContentSmall.module.scss';
import Image from 'next/image';

interface ContentSmallProps {
	heading: string;
	text: string;
}

const ContentSmall: React.FC<ContentSmallProps> = ({ heading, text }) => {
	return (
		<section className={styles.Section}>
			<div className={styles.container}>
				<div className={styles.img}>
					<Image
						src="/images/illustration-phones.svg"
						width={600}
						height={600}
						alt="phone images"
						layout="responsive"
					/>
				</div>
				<article className={styles.content}>
					<h2>{heading}</h2>
					<p>{text}</p>
				</article>
			</div>
		</section>
	);
};

export default ContentSmall;
