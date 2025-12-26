export default function Footer() {
  return (
    <footer class="site-footer">
        <div class="container footer-grid">
            {/* <!-- Brand / logo --> */}
            <section class="footer-brand">
            <a href="/" class="logo">
                <img src="/images/Logo.svg" alt="Little Lemon" width="120" height="120" />
            </a>
            </section>

            {/* <!-- Navigation --> */}
            <nav class="footer-nav" aria-labelledby="footernavheading">
            <h2 id="footernavheading" class="visually-hidden">Navigation</h2>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            </nav>

            {/* <!-- Contact --> */}
            <section class="footer-contact" aria-labelledby="contact-heading">
            <h2 id="contact-heading">Contact</h2>
            <address>
                123 Citrus Ave<br />
                Lemon Grove, CA 91945<br />
                <a href="tel:+15555551234">(555) 555-1234</a><br />
                <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
            </address>
            </section>

            {/* <!-- Social media links --> */}
            <nav class="footer-social" aria-labelledby="social-heading">
            <h2 id="social-heading">Social media links</h2>
            <ul>
                <li><a href="https://instagram.com/littlelemon"
                    target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://facebook.com/littlelemon"
                    target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://x.com/littlelemon"
                    target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
            </nav>
        </div>
    </footer>
  );
}
