const specials = [
  { title: "Greek salad", price: "$12.99", desc: "Crispy lettuce, peppers, olives, feta..." },
  { title: "Bruschetta", price: "$5.99", desc: "Grilled bread with garlic and olive oil..." },
  { title: "Lemon Dessert", price: "$5.00", desc: "Straight from grandma’s recipe book..." },
];

export default function Main() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="btn">Reserve a Table</button>
          </div>

          <div className="hero-media">
            <div className="img-placeholder">Image</div>
          </div>
        </div>
      </section>

      {/* SPECIALS */}
      <section className="specials" id="menu">
        <div className="container">
          <div className="section-head">
            <h3>Specials</h3>
            <button className="btn btn-dark">Online Menu</button>
          </div>

          <div className="cards-grid">
            {specials.map((s) => (
              <article className="card" key={s.title}>
                <div className="card-img">Img</div>
                <div className="card-body">
                  <div className="card-top">
                    <h4>{s.title}</h4>
                    <span className="price">{s.price}</span>
                  </div>
                  <p>{s.desc}</p>
                  <a className="card-cta" href="#order">
                    Order a delivery →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <h3 className="center">Testimonials</h3>

          <div className="test-grid">
            {Array.from({ length: 4 }).map((_, i) => (
              <article className="tcard" key={i}>
                <div className="tcard-title">Rating</div>
                <div className="tcard-row">
                  <div className="avatar" />
                  <div>Name</div>
                </div>
                <p className="muted">Review text</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container about-grid">
          <div>
            <h3>Little Lemon</h3>
            <h4>Chicago</h4>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div className="about-media" aria-label="Restaurant images">
            <div className="img-a">Img A</div>
            <div className="img-b">Img B</div>
          </div>
        </div>
      </section>
    </main>
  );
}
