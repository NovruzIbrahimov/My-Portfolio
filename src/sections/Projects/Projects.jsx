import "../Projects/projects.css";
import furniture from "../../assets/furnitureMain.png";
import book from "../../assets/book.png";
import game from "../../assets/shopify1.png";
// import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="container">
      <h1 className="sectionTitle">Projects</h1>
      <div className="projectsContainer">
        <div className="projectCard">
          <a
            href="https://holl.az/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={furniture} alt="Furniture Ecommerce" />
          </a>
          <h3>Furniture</h3>
          <p>Furniture Ecommerce</p>
        </div>

        <div className="projectCard">
          <a
            href="https://eazy.az/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={book} alt="Book Ecommerce" />
          </a>
          <h3>Book</h3>
          <p>Book Ecommerce</p>
        </div>

        <div className="projectCard">
          <a
            href="https://github.com/NovruzIbrahimov/Shopify_project.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={game} alt="Game Accessories" />
          </a>
          <h3>Game Shopify</h3>
          <p>Game Accessories</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
