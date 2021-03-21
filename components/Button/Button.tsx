import styles from './Button.module.scss';

interface ButtonProps {
	text: string;
	variant?: string;
}

const Button: React.FC<ButtonProps> = ({ text, variant }) => {
	return (
		<a className={`${styles.Button} ${variant ? styles[variant] : ''}`}>{text}</a>
	);
};

export default Button;
