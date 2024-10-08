import Head from "next/head";
import Link from "next/link";
const AboutUs = () => {
  return (
    <>
     <Head>
        <title>About US | JBA</title>
      </Head>
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">
             Home
            </Link>
            <span></span>About US
          </div>
        </div>
      </div>
      <section className="pt-40">
        <div className="container">
          <div className="product-header-banner-1">
            <div className="row">
              <div className="col-lg-8">
                <h1 className="header-h">About us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="abot-sec">
        <div className="container">
          <div className="row abot-sec-cont">
            <div className="col-lg-6 align-self-center">
              <div className="about-left">
                <p>
                Silver Amigo is an emerging silver artifact, gifting and jewelry brand. Here, every silver article resonates with tradition, heritage and lineage. From ancient times to the present day, silver has been an integral part of the Indian tradition and culture. Silver has a rich history around the world as well. 
                </p>

                <p>
                Our mission is to hoist silver to the true value it encapsulates. Along with us, our dedicated and creative craftsmen strive to deliver intricate silver pieces. Our karigars (craftsmen) have unwavering zeal for artisanship. Silver Amigo is a brand that entails quality, transparency, tradition, values and artistry. 
                </p>
                <p>We bring forth beautiful silver items catering to the needs of every clientele. At Silver Amigo, we offer the best of silver coins, silver jewelry, silver gifts, silver baby items, pooja silver items and silver utensils. You will find everything from traditional to contemporary silver pieces delicately crafted with experience and skill. </p>
                <p>Silver Amigo wishes to preserve and pursue the legacy of silver, making it accessible for all. Come along on this journey and celebrate the value and joy of silver. Our clients get to experience affordable, durable, versatile and healing silver jewelry, artifacts and gifts. We bring a gamut of silver items for every occasion.</p>
              </div>
            </div>
            <div className="col-lg-1 align-self-center"></div>

            <div className="col-lg-5">
              <div className="about-right">
                <img src="/img/about/about-side-pic.png" alt="about-side-pic" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pd-to">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="miss-viss">
                <img src="/img/about/mission.png" alt="mission" />

                <h2>Our Vision</h2>

                <p>
                  We aim to strengthen our position as the world's most trusted
                  supplier of diamonds, gemstones, fine jewelry, silver, and
                  pearls that are certified, high-quality, ethically sourced,
                  and meticulously manufactured.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="miss-viss">
                <img src="/img/about/vision.png" alt="mission" />

                <h2>Our Mission</h2>

                <p>
                  We are on a mission to inspire and make you fall in love with
                  the beauty and elegance of JBA's exquisitely designed jewelry
                  that makes heads turn and tells your unique story!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="prom-sec">
        <div className="container">
          <div className="row abot-sec-cont">
            <div className="col-lg-4 col-md-6 align-self-center">
              <div className="card-left card-heg">
                <h2>Our Values</h2>

                <p>JBA is building long-lasting relationships by valuing</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card-mid card-heg">
                <img
                  src="/img/about/icon-1.png"
                  width="48"
                  height="48"
                  alt="icon-1"
                />

                <h3>Faith</h3>

                <p>
                  Faith propels trust. Jewels by Anu approaches every decision
                  and action with absolute and unwavering faith. Our people aim
                  high at building abiding trust amongst customers, employees,
                  clients, well-wishers, associates, and all stakeholders.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card-mid card-heg">
                <img
                  src="/img/about/icon-2.png"
                  width="48"
                  height="48"
                  alt="icon-2"
                />

                <h3>Hard Work</h3>

                <p>
                  At JBA, we value persistence & hard work. This has been the
                  key to our success in all our offerings. It is through our
                  people's dedication to hard work that we can consistently meet
                  milestones, setting higher standards for ourselves - our 40+
                  years' growth secret.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card-mid card-heg">
                <img
                  src="/img/about/icon-3.png"
                  width="48"
                  height="48"
                  alt="icon-3"
                />

                <h3>Innovation</h3>

                <p>
                  We passionately believe in providing freedom and ownership to
                  foster innovation. This approach is adding value to all our
                  services, empowering our people, and bringing uniqueness to
                  the table every time since our inception.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card-mid card-heg">
                <img
                  src="/img/about/icon-4.png"
                  width="48"
                  height="48"
                  alt="icon-4"
                />

                <h3>Togetherness</h3>

                <p>
                  Ideas can only be freely exchanged in a conducive environment.
                  We strive to maintain it across all levels and functions.
                  Integrated culture is something we take pride in at JBA; it is
                  not just employees but also their families.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card-last card-heg">
                <img src="/img/about/pic-diamond.png" alt="pic-diamond" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-grid-se">
                <a href="/book-a-virtual-appointment/">
                  <div className="inn-img">
                    <img src="/img/about/j-2.jpg" alt="left-frame" />
                  </div>
                  <div className="ineer-cont">
                    <h3>
                    Book A Virtual Appointment
                    </h3>
                    <p>We're here to help find your perfect jewelry. Book an appointment with our expert.</p>
                    <span>Book Now</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img-grid-se">
                <a href="/bespoke/">
                  <div className="inn-img">
                    <img src="/img/about/j-1.jpg" alt="left-frame" />
                  </div>
                  <div className="ineer-cont">
                    <h3>
                    Bespoke Jewelry
                    </h3>
                    <p>Build legacy of bespoke jewels. Totally unique and personalized. Bespoke jewellery for new possibilities.</p>
                    <span>Create Yours</span>
                  </div>
                </a>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
