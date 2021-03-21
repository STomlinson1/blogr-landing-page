import styles from './Navbar.module.scss';
import Image from 'next/image';

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
				<li>Product</li>
				<li>Company</li>
				<li>Connect</li>
			</ul>

			<ul className={`${styles.group} ${styles.groupRight}`}>
				<li>Login</li>
				<li>SignUp</li>
			</ul>
		</nav>
	);
};

export default Navbar;
