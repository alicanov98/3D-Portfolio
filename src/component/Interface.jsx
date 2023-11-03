/* eslint-disable react/prop-types */


const Section = (props) => {
  const { children } = props;

  return (
    <section
      className="section"
    >
      {children}
    </section>
  );
};

export const Interface = () => {
  return (
    <main>
    <div className="container">
<AboutSection/>
<SkillSection/>
      <Section>
      <div className="row">
        <h1>Projects</h1>
    </div>
      </Section>
      <Section>
      <div className="row">
        <h1>Contact</h1>
    </div>
      </Section>
        </div>
    </main>
  );
};


const AboutSection =()=>{
    return (
        <Section>
        <div className="row">
        <h1 className="aboutMe">Hi, I am
            <br/>
            <span > Malik Alijanov</span>
        </h1>
        <p className="aboutText">I make Youtube videos to help developers
            <br/>
            learn how to build 3D apps
        </p>
        <button className="contactBtn">
            Contact me
        </button>
    </div>
      </Section>
    )
}




const SkillSection=()=>{
  return (
    <Section>
    <div className="row">
      <h2 className="title">Skills</h2>
      <div className="mySkills">
      <div className="skills"> 
           <h3 className="skillTitle">React / React Three Fiber</h3>
            <span className="rang">60%</span>
        </div>
  
      </div>
      <div className="mylng">
    
            <div className="lngs" > 
            <h2>Languages</h2>
            <h3 className="lngTitle">Englsh</h3>
             <span className="rang">60</span>
         </div>
     
      </div>
  </div>
    </Section>
  )
}

