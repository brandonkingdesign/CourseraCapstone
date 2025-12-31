const specials = [
  { title: "Greek salad", price: "$12.99", source:"/Images/greek salad.jpg", desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." },
  { title: "Bruschetta", price: "$5.99", source:"/Images/bruchetta.svg", desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." },
  { title: "Lemon Dessert", price: "$5.00", source:"/Images/lemon dessert.jpg", desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." },
];

const testimonials = [
  {
    name: "Maria S.",
    text: "The food was absolutely incredible. Best Mediterranean restaurant in Chicago!",
    image: "/Images/avatar1.avif"
  },
  {
    name: "James L.",
    text: "Great atmosphere and friendly staff. The bruschetta was my favorite.",
    image: "/Images/avatar4.jpeg"
  },
  {
    name: "Aisha K.",
    text: "Authentic flavors and generous portions. We’ll definitely be back.",
    image: "/Images/avatar3.webp"
  },
  {
    name: "Daniel R.",
    text: "Loved the lemon dessert and the cozy vibe. Highly recommend!",
    image: "/Images/avatar2.avif"
  },
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
            <p className="bold-p">
              We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <button className="btn btn-dark">Reserve a Table</button>
          </div>

          <div className="hero-media">
            <img
                src="/Images/restauranfood.jpg"
                alt="Chef presenting Mediterranean dishes"
                className="hero-img"
            />
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
                <div className="card-img">
                    <img
                        src={s.source}
                        alt="Chef presenting Mediterranean dishes"
                        className="special-img"
                    />
                </div>
                <div className="card-body">
                  <div className="card-top">
                    <h4>{s.title}</h4>
                    <span className="price">{s.price}</span>
                  </div>
                  <p>{s.desc}</p>
                  <a className="card-cta" href="#order">
                    Order a delivery →<img src=""/>
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
            <div className="section-head">
                <h3>Testimonials</h3>
            </div>
            <div className="test-grid">
                {testimonials.map((t, index) => (
                    <article className="tcard" key={index}>
                        <div className="tcard-title">⭐ ⭐ ⭐ ⭐ ⭐</div>
                        <div className="tcard-row">
                            <div className="avatar">
                                <img
                                    src={t.image}
                                    alt="Chef presenting Mediterranean dishes"
                                    className="testimonial-img"
                                />
                            </div>
                            <div>{t.name}</div>
                        </div>
                        <p>{t.text}</p>
                    </article>
                ))}
            </div>
        </div>
    </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container about-grid">
          <div>
            <div className="section-head">
                <h3>Little Lemon</h3>
            </div>
            <h4>Chicago</h4>
            <p>
              Little Lemon is a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist. We believe great food starts with fresh ingredients, time-honored techniques, and bold flavors.
            </p>
            <p>
              Our menu is inspired by authentic Mediterranean cooking and a passion for creating meals meant to be shared and enjoyed in a warm, welcoming setting.
            </p>
          </div>

          <div className="about-media" aria-label="Restaurant images">
            <div className="img-a">
                <img src="/Images/restaurant chef B.jpg" />
            </div>
            <div className="img-b">
                <img src="/Images/Mario and Adrian A.jpg" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
