'use client';

import { useState } from 'react';
import { BsFillMoonStarsFill, BsDiscord } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
} from 'react-icons/ai';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true' ? true : false);

  function toggleDarkTheme() {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', darkMode ? 'false' : 'true');
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className={`bg-white dark:bg-gray-900  px-10 dark:text-gray-100 transition-all duration-300`}>
        <section className='transition-all duration-300'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl'>Naizam Ali Najad</h1>
            <ul className='flex items-center'>
              <li>
                <a onClick={toggleDarkTheme}>
                  <BsFillMoonStarsFill className='cursor-pointer text-xl' />
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/NichuNaizam'
                  className='bg-gradient-to-r from-cyan-500 to-teal-400 text-white px-4 py-2 rounded-md ml-8'
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section className='min-h-screen shadow-xl my-10'>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>
              Naizam Ali Najad
            </h2>
            <h3 className='text-2xl py-2'>
              Full Stack Web Dev and C/C++ programmer
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100'>
              Let me introduce myself – I&apos;m Naizam Ali Najad, a young and
              passionate developer with a knack for technology. At the age of
              15, I have already embarked on an exciting journey in programming,
              driven by my curiosity and determination to make a difference in
              the digital world.
              <br />
              <br />
              Despite my young age, I have already gained valuable experience
              and skills in various programming domains. I have delved into
              full-stack web development, mastering technologies such as HTML,
              CSS, JavaScript, Node.js, Express, C#, Java, and more. From
              crafting captivating user interfaces to building robust back-end
              systems, I am dedicated to delivering high-quality solutions that
              meet modern standards.
              <br />
              <br />
              My enthusiasm extends to game development, where I have explored
              tools like Unity, C#, and Java to create immersive gaming
              experiences. Through my projects, I aim to push the boundaries of
              creativity and deliver engaging gameplay that captivates players.
              <br />
              <br />
              As a young programmer, I possess a strong foundation in multiple
              programming languages, including JavaScript, Python, C#, Java, and
              C++. This diverse skill set allows me to approach problems from
              different angles and adapt to new technologies with ease.
              <br />
              <br />
              Despite my age, I am committed to writing clean, efficient, and
              maintainable code, paying meticulous attention to detail in every
              project I undertake. I continuously expand my knowledge by staying
              up-to-date with the latest industry trends and actively seeking
              opportunities to enhance my skills.
              <br />
              <br />
              With my youthful energy and passion for programming, I am eager to
              contribute to exciting projects and collaborate with professionals
              in the field. I bring a fresh perspective, coupled with a strong
              drive to learn and grow as a developer. As I embark on this
              exciting journey, I am committed to making a meaningful impact
              through my work and pushing the boundaries of what technology can
              achieve.
              <br />
              <br />I invite you to explore my portfolio and witness firsthand
              the projects I have developed at such a young age. If you are
              seeking a motivated and talented developer who is eager to make a
              mark in the industry, I would be thrilled to connect with you and
              discuss potential collaborations. Together, let&apos;s embark on a
              journey of innovation and create extraordinary digital
              experiences.
            </p>
          </div>
        </section>

        {/* Services Section */}

        <section className='my-10'>
          <div className='text-center p-10 shadow-xl'>
            <h3 className='text-3xl py-1 text-center'>Services that I offer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-100'>
              I offer a comprehensive range of services to cater to your
              development needs. In the realm of full-stack web development, I
              utilize HTML, CSS, and JavaScript to create visually appealing and
              user-friendly interfaces. From crafting stunning web designs to
              implementing interactive elements and seamless navigation, I
              ensure that your web applications leave a lasting impression.
            </p>

            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-100'>
              For mobile app development, I specialize in building high-quality
              cross-platform applications using React Native. Leveraging my HTML
              skills, I design intuitive user interfaces that work seamlessly on
              both Android and iOS devices. With a focus on robust features and
              functionalities, I create polished and enjoyable mobile app
              experiences that engage users and deliver value.
            </p>

            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-100'>
              In the field of game development, I am experienced in utilizing
              industry-standard game engines like Unity. Additionally, I am
              skilled in implementing graphics-intensive games using
              technologies like OpenGL and C++. From conceptualizing innovative
              game mechanics to designing captivating gameplay and optimizing
              performance, I deliver exceptional gaming experiences that
              captivate audiences.
            </p>

            <p className='text-md py-5 leading-8 text-gray-800 dark:text-gray-100'>
              Whether you need a dynamic web application, a feature-rich mobile
              app, or an immersive game, I have the expertise and skills to
              bring your ideas to life. My dedication to crafting high-quality
              solutions ensures that your specific requirements are met, and
              your users have an outstanding experience. Let&apos;s collaborate and
              create something remarkable together!
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <div className='text-center py-8 p-10 shadow-xl'>
            <h3 className='text-3xl py-1 text-center'>Projects</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100'>
              Below you&apos;ll find a selection of my recent projects that showcase
              my skills and expertise. Each project represents a unique
              challenge and demonstrates my ability to create efficient,
              user-friendly, and visually appealing solutions. Take a look and
              explore the diverse range of projects I&apos;ve worked on. You can
              check out my GitHub profile to see all of my projects.
            </p>

            <div className='flex justify-center gap-10 py-10'>
              <div className='w-1/2'>
                <ProjectCard
                  title='Portfolio'
                  paragraphs={[
                    'Developed my personal portfolio website using Next.js and Tailwind CSS. The website serves as a showcase of my skills, projects, and contact information. Implemented responsive design to ensure optimal viewing experience across different devices and screen sizes.',
                    'Utilized Next.js for server-side rendering and improved performance. Integrated Tailwind CSS for efficient styling and customization. Implemented dynamic routing to navigate between different sections and project details.',
                    'Included contact information and social media links to facilitate communication and networking. Created a clean and visually appealing design to enhance the user experience and make a lasting impression. Utilized modern web development practices and technologies to ensure code quality and maintainability.',
                  ]}
                  github='https://github.com/NichuNaizam/Portfolio'
                />
              </div>
              <div className='w-1/2'>
                <ProjectCard
                  title='NLang'
                  paragraphs={[
                    'NLang is a high-level, statically-typed programming language designed for simplicity, expressiveness, and performance. It provides developers with an intuitive and efficient way to write clean, readable code while achieving optimal runtime performance.',
                    'With NLang, you can seamlessly integrate with existing C++ codebases, leveraging the vast ecosystem of C++ libraries and tools. The language features a powerful type system, allowing for strong static typing and efficient memory management, resulting in safer and more reliable code.',
                    'NLang supports a wide range of programming paradigms, including object-oriented programming, enabling developers to choose the best approach for their projects. It offers features such as classes and structs, empowering developers to build scalable and maintainable software solutions.',
                  ]}
                  github='https://github.com/NichuNaizam/NLang'
                  docs='https://nlang.nichunaizam.me/docs'
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <div className='text-center py-8 p-10 shadow-xl'>
            <h3 className='text-3xl py-1 text-center'>Skills</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100'>
              I have a strong foundation in multiple programming languages,
              including JavaScript, Python, C#, Java, and C++. This diverse
              skill set allows me to approach problems from different angles and
              adapt to new technologies with ease. I am committed to writing
              clean, efficient, and maintainable code, paying meticulous
              attention to detail in every project I undertake.
            </p>

            <div className='flex justify-center gap-10 py-10'>
              <div className='w-1/2 shadow-sm'>
                <h3 className='text-2xl py-1 text-center'>Frontend</h3>
                <ul className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>React Native</li>
                  <li>Tailwind CSS</li>
                  <li>Bootstrap</li>
                </ul>
              </div>

              <div className='w-1/2 shadow-sm'>
                <h3 className='text-2xl py-1 text-center'>Backend</h3>
                <ul className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100'>
                  <li>Node.js</li>
                  <li>Express</li>

                  <li>Python</li>

                  <li>Java</li>
                  <li>C#</li>
                  <li>C++</li>
                  <li>Rust</li>
                </ul>
              </div>
            </div>

            <div className='flex justify-center gap-10 py-10'>
              <div className='w-1/2 shadow-sm'>
                <h3 className='text-2xl py-1 text-center'>Databases</h3>
                <ul className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100'>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>

              <div className='w-1/2 shadow-sm'>
                <h3 className='text-2xl py-1 text-center'>Game Development</h3>
                <ul className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100'>
                  <li>Unity</li>
                  <li>OpenGL</li>
                  <li>Raylib</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section>
          <div className='text-center py-8 p-10 shadow-xl'>
            <h3 className='text-3xl py-1 text-center'>Contact</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100'>
              I am always open to new opportunities and exciting projects. If
              you are interested in collaborating with me, feel free to reach
              out to me via email or social media. I look forward to hearing
              from you!
            </p>

            <div className='flex text-5xl justify-evenly mt-20 text-gray-600 dark:text-gray-100'>
              <a href='mailto:me@nichunaizam.me'>
                <AiFillMail />
              </a>
              <a href='https://twitter.com/TNaizam'>
                <AiFillTwitterCircle />
              </a>
              <a href='https://instagram.com/nichunaizam100'>
                <AiFillInstagram />
              </a>
              <a href='https://github.com/NichuNaizam'>
                <AiFillGithub />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className='text-center py-8 p-10 shadow-xl'>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-100'>
            © 2023 Naizam Ali Najad. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}
