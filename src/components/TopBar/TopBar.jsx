import "./TopBar.css";

function TopBar() {
  return (
    <header className="topbar">
      <a href="#top" className="brand">
        <div className="brand-icon">S</div>

        <div className="brand-text">
          <strong>Student</strong>
          <span>Portal</span>
        </div>
      </a>

      <nav className="topbar-nav">
        <a href="#students">Students</a>
        <a href="#about">About</a>
      </nav>

      <div className="portal-status">
        <span></span>
        Live Portal
      </div>
    </header>
  );
}

export default TopBar;