import styles from "./Footer.module.css";
export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<span>Политика конфеденциальности</span>
			<span>Правила пользования</span>
			<span>Все права защещены</span>
		</footer>
	);
};
