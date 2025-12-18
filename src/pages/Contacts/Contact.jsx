import './Contact.css'

const Contact = () => {

  // ✅ Added simple handler function (you can customize it later)
  const sendMessage = (e) => {
    e.preventDefault()
    alert("Message sent successfully!");
  }

  return (
    <>
      <div className="contact-container mt-5">
        <h2 className="contact-heading text-center">
          <b>Get In Touch</b>
        </h2>
        <p className="text-secondary text-center mb-5">Let's work together</p>

        <div className="contact-full-information">
          {/* ===== Left Side: Contact Form ===== */}
          <div className="contact-details">
            <form onSubmit={sendMessage}>
              <input
                type="text"
                placeholder="Your name"
                className="text-input border rounded-1 mb-2"
                required
              /> <br />

              <input
                type="email"
                placeholder="Your email"
                className="text-input border rounded-1 mb-2"
                required
              /> <br />

              <textarea
                placeholder="Type your message here..."
                className="text-area border rounded-1 mb-2"
                required
              ></textarea> <br />

              <button
                type="submit"
                className="send-btn btn btn-primary"
              >
                send message{" "}
                <span>
                  <i className="fa-regular fa-paper-plane"></i>
                </span>
              </button>
            </form>
          </div>

          {/* ===== Right Side: Contact Info ===== */}
          <div className="contact-info">
            <p>
              I’m currently open to new opportunities and collaborations. 🚀<br />
              Whether you have a project idea, a question, or just want to connect, I’d love to hear from you. <br />
              Feel free to reach out anytime — let’s build something amazing together! 🤝
            </p>

            <div className="social-links ms-3">
              <i className="contact-social-links fa-solid fa-envelope me-3"></i> Email
              <a
                href="mailto:yarasankalai35@gmail.com"
                className="social-anchor ms-2"
                title="Click here"
              >
                yarasankalai35@gmail.com
              </a>
              <br />

              <i className="contact-social-links fa-solid fa-phone me-3"></i> Phone
              <a
                href="tel:6380354047"
                className="social-anchor ms-2"
                title="Click here"
              >
                6380354047
              </a>
              <br />

              <i className="contact-social-links fa-brands fa-whatsapp me-3"></i> WhatsApp
              <a
                href="https://wa.me/6380354047"
                className="social-anchor ms-2"
                title="Click here"
                target="_blank"
                rel="noreferrer"
              >
                6380354047
              </a>
              <br />

              <i className="contact-social-links fa-brands fa-linkedin-in me-3"></i>
              <a
                href="https://www.linkedin.com/in/kalaiyarasan-c/"
                className="social-anchor ms-2"
                title="Click here"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/kalaiyarasan-c
              </a>
            </div>
          </div>
        </div>
      </div>

      <br /><br /><br />
    </>
  )
}

export default Contact
