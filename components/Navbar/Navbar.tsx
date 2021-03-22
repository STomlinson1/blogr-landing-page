import styles from './Navbar.module.scss';
import Image from 'next/image';

import Button from '../Button/Button';
import NavItem from '../NavItem/NavItem';
import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {
	return (
		<nav className={styles.Navbar}>
			<div className={styles.logo}>
				<Image
					src="/images/logo.svg"
					alt="Blogr logo"
					width={85}
					height={35}
					layout="responsive"
				/>
			</div>

			<ul className={styles.group}>
				<NavItem text="Product">
					<Dropdown links={[ 'Overview', 'Pricing', 'Features', 'Integrations' ]} />
				</NavItem>
				<NavItem text="Company">
					<Dropdown links={[ 'About', 'Team', 'Blog', 'Careers' ]} />
				</NavItem>
				<NavItem text="Connect">
					<Dropdown links={[ 'Contact', 'Newsletter', 'LinkedIn' ]} />
				</NavItem>
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
