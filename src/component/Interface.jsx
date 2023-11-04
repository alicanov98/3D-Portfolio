/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className="section"
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <main>
      <div className="container">
        <AboutSection />
        <SkillSection />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

const AboutSection = () => {
  return (
    <Section>
      <div className="row">
        <h1 className="aboutMe">
          Hi, I am
          <br />
          <span> Malik Alijanov</span>
        </h1>
        <motion.p
          className="aboutText"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
        This is my first project written with
        <br/>
         React Three Fiber.
        </motion.p>
        <motion.button
          className="contactBtn"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
          Contact me
        </motion.button>
      </div>
    </Section>
  );
};

const skillsData = [
  {
    title: "Java Script",
    percentage: 80,
  },
  {
    title: "Type Script",
    percentage: 60,
  },
  {
    title: "React",
    percentage: 80,
  },
  {
    title: "React Three Fiber",
    percentage: 70,
  },
  {
    title: "3D Moddeling",
    percentage: 70,
  },
  {
    title: "CSS,SCSS",
    percentage: 90,
  },
];

const languages = [
  {
    lng: "Azerbaijan",
    performance: 95,
  },
  {
    lng: "Englsh",
    performance: 60,
  },
];

const SkillSection = () => {
  return (
    <Section>
      <div className="row">
        <h2 className="title">Skills</h2>
        <motion.div whileInView={"visible"} className="mySkills">
          {skillsData.map((item, index) => (
            <div className="skills" key={index}>
              <motion.h3
                className="skillTitle"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}
              >
                {item.title}
              </motion.h3>
              <div className="progress">
                <span
                  className="percentage"
                  style={{
                    left: `${item.percentage}%`,
                  }}
                >
                  {item.percentage}%
                </span>
                <motion.span
                  className="range"
                  style={{
                    width: `${item.percentage}%`,
                  }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                ></motion.span>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div className="mylng" whileInView={"visible"}> 
          <h2 className="title">Languages</h2>
          {languages.map((lng, index) => (
            <div className="lngs" key={index}>
              <motion.h3
                className="lngTitle"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 2 + index * 0.2,
                    },
                  },
                }}
              >
                {lng.lng}
              </motion.h3>
              <div className="progress">
                <span
                  className="percentage"
                  style={{
                    left: `${lng.performance}%`,
                  }}
                >
                  {lng.performance}%
                </span>
                <motion.span
                  className="range"
                  style={{
                    width: `${lng.performance}%`,
                  }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}
                ></motion.span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

const Projects = () => {
  return (
    <Section>
      <div className="row">
        <h2 className="title">Projects</h2>
      </div>
    </Section>
  );
};

const Contact = () => {
  return(

    <Section>
      <div className="row">
      <h2 className="title">Contact me</h2>
      <div className="contactForm">
        <form>
          <label htmlFor="name" className="contactT">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="inp"
            />
          <label
            htmlFor="email"
            className="contactT"
            >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="inp"
          />
          <label
            htmlFor="email"
            className="contactT"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="messageInp"
          />
          <button className="contactBtn">
            Submit
          </button>
        </form>
      </div>
      </div>
    </Section>
)};