import portfolioImg from "../../assets/portfolio.png"
import styles from "./style.module.css"

export const Header = () => {
	
	return (
		<header className={styles.header}>
			<div className="container">
				<img src={portfolioImg} alt="Logo portfolio" />
				<nav>
					<a className="paragraph" href="#about">Sobre</a>
					<a className="paragraph" href="#stack">Stack</a>
					<a className="paragraph" href="#projects">Projeto</a>
				</nav>
				<button className="btn" >Contato</button>
			</div>
		</header>
	)
}