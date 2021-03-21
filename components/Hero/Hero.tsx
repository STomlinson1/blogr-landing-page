import styles from './Hero.module.scss';
import Image from 'next/image';

import Button from '../Button/Button';

const Hero: React.FC = () => {
	return (
		<header className={styles.Hero}>
			<h1>A modern publishing platform</h1>
			<p>Grow your audience and build your online brand</p>
			<div className={styles.buttonGroup}>
				<Button text="Start for Free" variant="secondary" />
				<Button text="Learn More" variant="primary" />
			</div>
		</header>
	);
};

export default Hero;
