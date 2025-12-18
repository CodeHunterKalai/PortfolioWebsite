import html from '../../assets/HTML5.png'
import css from '../../assets/CSS 3.png'
import bootstrap from '../../assets/Bootstrap.png'
import springBoot from '../../assets/icons8-spring-boot-480.png'
import js from '../../assets/JS.png'
import reactJs from '../../assets/RectJs.png'
import nodejs from '../../assets/Node.js.png'
import restApi from '../../assets/icons8-rest-api-100.png'
import Github from '../../assets/GitHub.png'
import Git from '../../assets/icons8-git-480.png'
import mySql from '../../assets/MySQL.png'
import MongoDB from '../../assets/MongoDB.png'
import Java from '../../assets/Java.png'

import './Skills.css'

const Skills = () => {
  return (
   <>
   <div className="skills-section">
     <h2 className="skills-heading text-center text-bold">Skills Set </h2>
     <p className="tech text-center text-secondary">Technologies I work with 💼</p>

<section className='skill-sections'>
     <div className="tech-stack-1 ">
        <img src={html} alt="html"              title='HTML'   />
        <img src={css} alt="css"                title='CSS'   />
        <img src={bootstrap} alt="bootstrap"    title='Bootstrap'    />
        <img src={springBoot} alt="SpringBoot"title='SpringBoot'     />
        <img src={js} alt="js"                  title='JavaScript'    />
        <img src={reactJs} alt="reactjs"        title='Reactjs'     />
     </div>

     <div className="tech-stack-2 " >
        {/* <img src={nodejs} alt="nodejs"       title='Nodejs'    /> */}
        <img src={restApi} alt="RestApi" title='Rest Api'    />
        <img src={Java} alt="Java"          title='Java'   />
        <img src={mySql} alt="mySql"         title='MySql'   />
        <img src={MongoDB} alt="mySql"        title='GitHub'   />
        <img src={Git} alt="Git"       title='git'    />
        <img src={Github} alt="Github"       title='Github'    />


     </div>

</section>
<br /><br /><br />

   </div>
   </>
  )
}

export default Skills