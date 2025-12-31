import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav" aria-label="Primary">
      <Link to="/">Home</Link>
      <Link to="/booking">Reservations</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/about">About</Link>
      <Link to="/order">Order Online</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}


// export default function Nav() {
//   return (
//     <nav className="Nav" aria-label="Primary">
//       <ul className="menu">
//         <li><a href="/">Home</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a href="/menu">Menu</a></li>
//         <li><a href="/reservations">Reservations</a></li>
//         <li><a href="/order">Order Online</a></li>
//         <li><a href="/login">Login</a></li>
//       </ul>
//     </nav>
//   );
// }