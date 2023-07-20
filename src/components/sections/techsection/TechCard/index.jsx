

export const Techcard = ({tech}) => {

	return(
		<li className="title3">
			<img src={tech.img} alt={tech.name} />
			<h3>{tech.name}</h3>
		</li>
	)
}