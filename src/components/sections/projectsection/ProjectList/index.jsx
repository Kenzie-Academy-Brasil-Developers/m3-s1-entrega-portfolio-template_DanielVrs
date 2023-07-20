import { projects } from "../../../../data/projects"
import { ProjectCard } from "../ProjectCard"
import styles from "./style.module.css"

export const ProjectSection = () => {

	return (
		<section id="projects" className={styles.sectionProjects}>
			<div className="container">
					<h2 className="title2">Projetos</h2>
				<ul>
					{projects.map(project =>
							<ProjectCard key={project.id} project={project} />
					)}
				</ul>
			</div>
		</section>
	)
	
}