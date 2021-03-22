import styles from './Dropdown.module.scss';

interface DropdownProps {
	links: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ links }) => {
	return (
		<div className={styles.Dropdown}>
			<ul role="list">
				{links.map((link) => (
					<li key={link}>
						<a>{link}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Dropdown;
