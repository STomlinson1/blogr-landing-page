import { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import Image from 'next/image';

import Button from '../Button/Button';
import NavItem from '../NavItem/NavItem';
import Dropdown from '../Dropdown/Dropdown';

const Navbar = () => {
	const [ scrollPosition, setScrollPosition ] = useState(0);

	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`${styles.Navbar} ${scrollPosition > 350 ? styles.active : ''}`}>
			<div className={styles.container}>
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
						<Dropdown
							links={[ 'Overview', 'Pricing', 'Features', 'Integrations' ]}
						/>
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

				<div className={styles.menuIcon}>
					<Image
						src="/images/icon-hamburger.svg"
						alt="Blogr logo"
						width={50}
						height={35}
						layout="responsive"
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
