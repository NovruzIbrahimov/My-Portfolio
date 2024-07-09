import styles from './ProjectsStyles.module.css';
import furniture from '../../assets/furniture2.png';
import game from '../../assets/game4.png';
import fashion from '../../assets/fashion4.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={furniture}
          link="https://github.com/NovruzIbrahimov/Furniture_ecommerce_project.git"
          h3="Furniture"
          p="Furniture Ecommerce"
        />
        <ProjectCard
          src={game}
          link="https://github.com/NovruzIbrahimov/Shopify_project.git"
          h3="Game Shopify"
          p="Game Accessories"
        />
        <ProjectCard
          src={fashion}
          link="https://github.com/NovruzIbrahimov/Ecommerce-Project.git"
          h3="Porto"
          p="Fashion Shop"
        />
      </div>
    </section>
  );
}

export default Projects;