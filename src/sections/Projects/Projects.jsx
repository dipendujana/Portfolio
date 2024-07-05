import styles from './ProjectsStyles.module.css';
import oes from '../../assets/OES.png';
import food_recipe_finder from '../../assets/food_recipe_finder.png';
import to_do_list from '../../assets/to_do_list.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={oes}
          link="https://online-exam-system-bl45.onrender.com/"
          h3="OES"
          p="Online exam system"
        />
        <ProjectCard
          src={food_recipe_finder}
          link="https://food-recipe-finder.onrender.com/"
          h3="Food Recipe App"
          p="Recipe finder"
        />
        <ProjectCard
          src={to_do_list}
          link="https://to-do-list-make-your-day-structure.netlify.app/"
          h3="To-Do App"
          p="Add your task"
        />
      </div>
    </section>
  );
}

export default Projects;