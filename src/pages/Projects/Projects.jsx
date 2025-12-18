import React from 'react'
import { NavLink } from 'react-router-dom';
import './Projects.css'

const Projects = () => {

  const pro = 'Projects ';
  const pro1 = 'SuperMarket Management System (Inventory, Billing & Sales Automation) ';
  const pro2 = 'US Cricket Game – Interactive Cricket Simulation Game';

  return (
    <>
      <div className="projects">
        <main>
          <h2 className="text-center">{pro}</h2>
          <h6 className="text-center text-secondary">
            Project I've worked & have been working 🚀
          </h6>
        </main>

        <section className="project-section">

          {/* ===== Project 1 ===== */}
          <div className="pro mt-4">
            <h4 className="pro-title ms-3"><b>{pro1}</b></h4>

            <p className="pro-description text-secondary mt-3">
              Developed a full-stack SuperMarket Management System with inventory tracking, barcode billing, real-time stock updates, and sales reporting.
            </p>

            <h5 className="mt-4 mb-3 ">Technologies Used</h5>
            <span className="tech-stack HTML ms-3">HTML</span>
            <span className="tech-stack CSS ms-3">CSS</span>
            <span className="tech-stack JavaScript ms-3">JavaScript</span><br /> <br />
            <span className="tech-stack CNN  ms-3">React JS</span>
            <span className="tech-stack Python ms-3">Spring Boot</span><br /><br />
            <span className="tech-stack NumPy ms-3">Restful API</span>
            <span className="tech-stack Tensorflow ms-3">MY SQL</span>
            {/* <span className="tech-stack APIs ms-3">APIs</span> */}

            <h5 className="mt-4">Key Features</h5>
            <ul>
              <li className="text-secondary">Product Management</li>
              <li className="text-secondary">Barcode-Based Billing</li>
              <li className="text-secondary">Sales Management</li>
              <li className="text-secondary">Secure Data Handling</li>
              <li className="text-secondary">Real-time Stock Updates</li>
              <li className="text-secondary">User-Friendly Interface</li>
            </ul>

            <button type="button" className="btn btn-primary project-link-btn">
              <NavLink
                to="https://github.com/CodeHunterKalai/supermarket-frontend"
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                View project
              </NavLink>
            </button>
          </div>

          {/* ===== Project 2 ===== */}
          <div className="pro mt-4">
            <h4 className="pro-title ms-3"><b>{pro2}</b></h4>

            <p className="pro-description text-secondary mt-3">
             Developed a JavaScript-based cricket game implementing batting mechanics, score tracking, and rule-based gameplay.
            </p>

            <h5 className="mt-4 mb-3">Technologies Used</h5><br />
            <span className="tech-stack Python ms-3">HTML5</span>
            <span className="tech-stack jest ms-3">CSS</span>
            <span className="tech-stack NumPy ms-3">JAVASCRIPT</span><br /><br />
            <span className="tech-stack CNN ms-3">Dom Manuplation</span><br />
            {/* <span className="tech-stack HTML ms-3">Bootstrap </span>
            <span className="tech-stack CSS ms-3"></span> */}

            <h5 className="mt-5">Key Features</h5>
            <ul>
              <li className="text-secondary">Batting Gameplay Mechanics </li>
              <li className="text-secondary">Score & Over Tracking</li>
              <li className="text-secondary">Basic Cricket Rules Engine</li>
              <li className="text-secondary">Dynamic DOM Manipulation</li>
              <li className="text-secondary">Interactive Game UI</li>
              <li className="text-secondary">Restart & Replay Functionality</li>
            </ul>

            <button type="button" className="btn btn-primary project-link-btn">
              <NavLink
                to="https://github.com/CodeHunterKalai/CricketGame"
                className="text-white"
                target="_blank"
                rel="noreferrer"
              >
                View project
              </NavLink>
            </button>
          </div>

          {/* ===== Cool Projects Section ===== */}
          <div className="pro mt-4">
            <h4 className="text-center mb-3">Some Cool Projects</h4><br />

            <div className="cool-pro project-1">
              <p className="pro-title">
                CRUD Operations
                <a
                  href="https://github.com/CodeHunterKalai/user_crud"
                  target="_blank"
                  rel="noreferrer"
                  className="ms-5"
                >
                  Visit here
                </a>
              </p>
            </div> <br />

            {/* <div className="cool-pro project-2">
              <p className="pro-title">
                Dictionary App
                <a
                  href="https://dictionary-website-henna.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="ms-5"
                >
                  Visit here
                </a>
              </p>
            </div> */}

            <div className="cool-pro project-3">
              <p className="pro-title">
                To-Do List App
                <a
                  href="https://github.com/CodeHunterKalai/TodoApp"
                  target="_blank"
                  rel="noreferrer"
                  className="ms-5"
                >
                  Visit here
                </a>
              </p>
            </div><br />

            <div className="cool-pro project-4">
              <p className="pro-title">
                Digital Wall Clock
                <a
                  href="https://github.com/CodeHunterKalai/Digital_Clock"
                  target="_blank"
                  rel="noreferrer"
                  className="ms-5"
                >
                  Visit here
                </a>
              </p>
            </div><br />

            <div className="cool-pro project-5">
              <p className="pro-title">
                Login Page
                <a
                  href="https://github.com/CodeHunterKalai/Login_Page"
                  target="_blank"
                  rel="noreferrer"
                  className="ms-5"
                >
                  Visit here
                </a>
              </p>
            </div>
          </div>

        </section>
      </div>
      <br />
    </>
  )
}

export default Projects
