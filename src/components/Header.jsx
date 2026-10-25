
function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <header className="header">
      <a href="/" className="logo">
        <span className="logo-icon">✦</span>
        <span>DevSpace</span>
      </a>

   
<div className="search-box">
  <svg
    className="search-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="10.8" cy="10.8" r="6.8" />
    <path d="m16 16 4.5 4.5" />
  </svg>

  <input
    type="text"
    placeholder="Search articles..."
    className="search-input"
    aria-label="Search articles"
  />
</div>


      <div className="header-actions">
        <button className="sign-in">Sign In</button>

        <button
          className={`menu-btn ${isMenuOpen ? "menu-active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close categories" : "Open categories"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <span className="close-icon">✕</span>
          ) : (
            <span className="dots-icon">⋮</span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
