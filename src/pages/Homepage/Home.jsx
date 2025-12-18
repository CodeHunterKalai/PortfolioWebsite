import logo from './Profile.jpg'
import './Homepage.css'
import LogeshResume from './LOGESH_RESUME_1.pdf'   // ✅ Final correct import


export const Home = () => {

  const myName = 'KALAIYARASAN';

  return (
    <>
      <div className="home-container" id="home">

        <div className="home-content">
          <h3 className="hi text-secondary mb-3" id="go-to-top">
            Hi👋 Buddy's I'm
          </h3>

          <h1 className="my-name">
            {myName} <span className="text-primary">C</span>
          </h1>
          <br />

          <h5 className="my-role text-secondary">
            <div className="my-career mb-1">
            Full Stack Developer | Frontend Developer |
            </div>

            <div className="my-career"> Passionate Learner | Tech Explorer | Java Developer 
            </div>
          </h5>
          <br />

          {/* Buttons */}
          <div className="super-btns">
            <button className="get-btn btn btn-primary p-2 text-center">
              Hire Me
              <i className="right-arrow text-center fa-solid fa-arrow-right"></i>
            </button>

            <button className="download-btn btn btn-outline-primary p-2 ms-4 ">
              <a
                href={LogeshResume}
                download="LogeshResume"
                className="download-resume-link"
              >
                Download Resume
                <i className="ms-1 fa-regular fa-file"></i>
              </a>
            </button>
            <br /><br />
          </div>

          {/* Social Icons */}
          <div className="social-icons-group">
            <a
              className="social-anchor-tag"
              href="kedin.com/in/kalaiyarasan-c"
              target="_blank"
              rel="noreferrer"
            >
              <i className="social-icons fa-brands fa-linkedin"></i>
            </a>

            <a
              className="social-anchor-tag"
              href="https://github.com/CodeHunterKalai"
              target="_blank"
              rel="noreferrer"
            >
              <i className="social-icons fa-brands fa-github ms-4"></i>
            </a>

            <a
              className="social-anchor-tag"
              href="mailto:yarasankalai35@gmail.com"
            >
              <i className="social-icons fa-solid fa-envelope ms-4"></i>
            </a>

            <a
              className="social-anchor-tag"
              href="tel:6380354047"
            >
              <i className="social-icons fa-solid fa-phone ms-4"></i>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="profile-img">
          <img
            src={logo}
            alt="My-Profile"
            className="my-profile"
            width={320}
            height={320}
            title={`Hi! Buddy I'm Logesh Pandiyan.`}
          />
        </div>
      </div>
    </>
  )
}
