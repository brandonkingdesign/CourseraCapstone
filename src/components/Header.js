import Nav from "./Nav.js";

export default function Header({ className = "", ...props }) {
  const cls = `site-header${className ? " " + className : ""}`;
  return (
    <header className={cls} {...props}>
      <a href="/" className="logo">
        <img
          src="/Images/Logo.svg"    // put your logo in /public
          alt="Little Lemon"
          width="140"
          height="auto"
        />
      </a>
      <Nav />
    </header>
  );
}