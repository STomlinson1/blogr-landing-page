import { useState } from 'react';
import Image from 'next/image';

import styles from './NavItem.module.scss';

interface NavItemProps {
	text: string;
	mobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ text, children, mobile }) => {
	const [ show, setShow ] = useState(false);

	return (
		<li
			className={styles.NavItem}
			onMouseEnter={(e) => setShow(true)}
			onMouseLeave={(e) => setShow(false)}
		>
			<a>{text}</a>
			<div className={`${styles.arrow} ${show ? styles.open : ''}`}>
				{mobile ? (
					<Image src="/images/icon-arrow-dark.svg" width={10} height={8} />
				) : (
					<Image src="/images/icon-arrow-light.svg" width={10} height={8} />
				)}
			</div>
			{show && children}
		</li>
	);
};

export default NavItem;
