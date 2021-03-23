import styles from './Footer.module.scss';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className={styles.Footer}>
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
				<ul role="list">
					<li>
						<a>Product</a>
					</li>
					<li>
						<a>Overview</a>
					</li>
					<li>
						<a>Pricing</a>
					</li>
					<li>
						<a>Marketplace</a>
					</li>
					<li>
						<a>Features</a>
					</li>
					<li>
						<a>Integrations</a>
					</li>
				</ul>
				<ul role="list">
					<li>
						<a>Company</a>
					</li>
					<li>
						<a>About</a>
					</li>
					<li>
						<a>Team</a>
					</li>
					<li>
						<a>Blog</a>
					</li>
					<li>
						<a>Careers</a>
					</li>
				</ul>
				<ul role="list">
					<li>
						<a>Connect</a>
					</li>
					<li>
						<a>Contact</a>
					</li>
					<li>
						<a>Newsletter</a>
					</li>
					<li>
						<a>LinkedIn</a>
					</li>
				</ul>
			</div>
			<p className={styles.signature}>
				Copyright &copy; 2021, Developed by Stephon Tomlinson
			</p>
		</footer>
	);
};

export default Footer;
