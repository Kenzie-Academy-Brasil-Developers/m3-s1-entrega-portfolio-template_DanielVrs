import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { AboutMeSection } from "../../components/sections/AboutMeSection"
import { BannerSection } from "../../components/sections/BannerSection"
import { ProjectSection } from "../../components/sections/projectsection/ProjectList"
import { TechList } from "../../components/sections/techsection/TechList"


export const HomePage = () => {

	return (
		<>
		<Header />
		<main>
			<BannerSection />
			<AboutMeSection />
			<TechList />
			<ProjectSection />
		</main>
		<Footer />
		</>
	)
}

