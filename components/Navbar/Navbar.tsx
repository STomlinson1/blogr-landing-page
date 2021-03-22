import styles from './Navbar.module.scss';
import Image from 'next/image';

import Button from '../Button/Button';
import NavItem from '../NavItem/NavItem';

const Navbar = () => {
	return (
		<nav className={styles.Navbar}>
			<ul className={styles.group}>
				<li className={styles.logo}>
					<Image src="/images/logo.svg" alt="Blogr logo" width={85} height={35} />
				</li>
				<NavItem text="Product" />
				<NavItem text="Company" />
				<NavItem text="Connect" />
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
