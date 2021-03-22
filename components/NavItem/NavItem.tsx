import { useState } from 'react';
import Image from 'next/image';

import styles from './NavItem.module.scss';

interface NavItemProps {
	text: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, children }) => {
	const [ show, setShow ] = useState(false);

	return (
		<li className={styles.NavItem} onClick={(e) => setShow(!show)}>
			<a>{text}</a>
			<div className={`${styles.arrow} ${show ? styles.open : ''}`}>
				<Image src="/images/icon-arrow-light.svg" width={10} height={8} />
			</div>
			{show && children}
		</li>
	);
};

export default NavItem;
