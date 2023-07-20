import { technologies } from "../../../../data/technologies"
import { Techcard } from "../TechCard"
import styles from "./style.module.css"

export const TechList = () => {
	
	technologies
	return (
		<section id="stack" className={styles.sectionTech}>
			<div className="container">
					<h2 className="title2">Tecnologias</h2>
				<ul>
					{technologies.map(tech =>
							<Techcard key={tech.id} tech={tech} />
					)}
				</ul>
			</div>
		</section>
		
	)
	
}