import whatsappIcon from "../../assets/whatsapp-icon.png";
import linkedinIcon from "../../assets/linkedin-icon.png";
import githubIcon from "../../assets/github-icon.png";
import { user } from "../../data/user";
import styles from "./style.module.css"


export const Footer = () => {
	
	return (
		<footer className={styles.footer}>
			<div className="container">
				<div>
					<h2 className="title2" >Contato</h2>
					<div className={styles.containerImg}>
						<img src={whatsappIcon} alt="icone do whatsapp" />
						<img src={linkedinIcon} alt="icone do linkedin" />
						<img src={githubIcon} alt="icone github" />
					</div>
				</div>
				<p className="paragraph" >Todos os direitos reservados - {user}</p>
			</div>
		</footer>
	)
}