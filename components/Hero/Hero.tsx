import styles from './Hero.module.scss';
import Image from 'next/image';

const Hero: React.FC = () => {
	return (
		<header className={styles.Hero}>
			<h1>A modern publishing platform</h1>
			<p>Grow your audience and build your online brand</p>
			<div className={styles.buttonGroup}>
				<div>button 1</div>
				<div>button 2</div>
			</div>
		</header>
	);
};

export default Hero;
