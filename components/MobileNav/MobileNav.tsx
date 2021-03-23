import styles from './MobileNav.module.scss';

import NavItem from '../NavItem/NavItem';
import Button from '../Button/Button';

const MobileNav = () => {
	return (
		<nav className={styles.MobileNav}>
			<ul role="list">
				<NavItem text="Product" mobile />
				<NavItem text="Company" mobile />
				<NavItem text="Connect" mobile />
				<li className={styles.break} />
				<li>
					<a>Login</a>
				</li>
				<li>
					<Button text="Sign Up" variant="mobile" />
				</li>
			</ul>
		</nav>
	);
};

export default MobileNav;
