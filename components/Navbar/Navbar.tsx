import styles from './Navbar.module.scss';
import Image from 'next/image';

import Button from '../Button/Button';

const Navbar = () => {
	return (
		<nav className={styles.Navbar}>
			<ul className={styles.group}>
				<li>
					<Image
						src="/../public/images/logo.svg"
						alt="Blogr logo"
						width={80}
						height={35}
					/>
				</li>
				<li>
					<a>Product</a>
				</li>
				<li>
					<a>Company</a>
				</li>
				<li>
					<a>Connect</a>
				</li>
			</ul>

			<ul className={`${styles.group} ${styles.groupRight}`}>
				<li>
					<a>Login</a>
				</li>
				<li>
					<Button text="Sign Up" variant="secondary" />
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
