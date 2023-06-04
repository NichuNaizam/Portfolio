import { AiFillGithub, AiFillBook } from 'react-icons/ai';

type ProjectCardProps = {
  title: string;
  paragraphs: string[];
  github?: string;
  docs?: string;
};

export default function ProjectCard({ title, paragraphs, github, docs }: ProjectCardProps) {
  return (
    <div className='bg-gray-100 rounded-md p-5  dark:bg-gray-800'>
      <h3 className='text-2xl py-1 text-center'>{title}</h3>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100'
        >
          {paragraph}
        </p>
      ))}

      <div className='flex justify-around'>
        {github && (
          <div className='flex justify-center space-x-4 mt-2'>
            <a
              href={github}
              className='flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-2 rounded-md'
            >
              <AiFillGithub className='mr-2' />
              <span>GitHub</span>
            </a>
          </div>
        )}

        {docs && (
          <div className='flex justify-center space-x-4 mt-2'>
            <a
              href={docs}
              className='flex items-center justify-center bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-2 rounded-md'
            >
              <AiFillBook className='mr-2' />
              <span>Documentation</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
