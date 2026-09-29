import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="footer-icon">S</div>

        <div>
          <strong>Student Portal</strong>
          <span>Information Management System</span>
        </div>
      </div>

      <p>
        Built with React using reusable components and Props
      </p>

      <a href="#top">Back to top ↑</a>
    </footer>
  );
}

export default Footer;