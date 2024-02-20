import Heading from '@/components/Heading/Heading';
import './projects.scss';
import Carousel from './Carousel';

const Projects = () => {
  return (
    <section
      id='projects'
      className='projects'
    >
      <Heading type='h2'>MY PROJECTS</Heading>
      <div className='projects__list'>
        <Carousel />
      </div>
    </section>
  );
};

export default Projects;
