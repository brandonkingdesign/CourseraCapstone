export default function Nav({ className = "", ...props }) {
  const cls = `site-nav${className ? " " + className : ""}`;
  return (
    <nav className={cls} aria-label="Primary" {...props}>
      <ul className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  );
}