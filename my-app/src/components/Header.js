import Nav from "./Nav.js";

export default function Header() {
  return (
    <header className="site-header">
        <div className="container header-inner">
            <a href="/" className="logo">
                <img
                src="/Images/Logo.svg"    // put your logo in /public
                className="headerlogo"
                alt="Little Lemon"
                width="140"
                height="auto"
                />
            </a>
            <Nav />
        </div>
    </header>
  );
}