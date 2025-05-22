import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About US | JBA</title>
      </Head>
      <section className="bg-pd">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="about-center-l">
                <img src="/img/silver-amigo-bb-logo-large.png" alt="silver-amigo-bb-logo-large" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg">
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-lg-12">
              <div className="ab-pic">
                <img src="/img/banner/about-banner-pic.png" alt="about pic" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-60">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="about-header-one">
                <h1>Where Silver Tells a Story</h1>
                <p>Silver Amigo is an emerging brand dedicated to exquisite silver artifacts, gifts, and jewelry. Every piece we create is a reflection of timeless tradition, cultural heritage, and generational legacy.</p>
                <p>For centuries, silver has played a vital role in Indian customs and rituals. It holds not only aesthetic appeal but also deep-rooted symbolic and spiritual significance both in India and across the globe. At Silver Amigo, our mission is to restore and elevate silver to its true value, celebrating its richness in every form.</p>
              </div>
            </div>
          </div>
          <div className="row bg-gg">
            <Image
              src="/img/banner/about-bb-bg.png"
              alt="Background"
              fill
              style={{ objectFit: 'cover', zIndex: 0 }}
            />
            <div className="col-lg-5">
              <div className="abot-pp">
                <h3>Our Craftsmanship</h3>
                <p>Behind every creation is a team of passionate and skilled karigars (craftsmen) who bring years of experience and an unwavering commitment to artistry. With intricate detailing and precision, they breathe life into every silver article, ensuring exceptional quality and authenticity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-80 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="category-home-wraper">
                <div className="pic pic-tab">
                  <Link href="#">

                    <img
                      src="/img/cat-001.jpg"
                      alt="Picture of the author"
                      width={256}
                      height={256}
                    />
                    <span>Silver Jewelry</span>
                    <p>Elegant, timeless, and healing.</p>
                  </Link>
                </div>
                <div className="pic pic-tab">
                  <Link href="#">

                    <img
                      src="/img/cat-002.jpg"
                      alt="Picture of the author"
                      width={256}
                      height={256}
                    />
                    <span>Silver Coins</span>
                    <p>Perfect for auspicious beginnings and celebrations.</p>
                  </Link>
                </div>
                <div className="pic pic-tab">
                  <Link href="#">

                    <img
                      src="/img/cat-003.jpg"
                      alt="Picture of the author"
                      width={256}
                      height={256}
                    />
                    <span>Silver Gifts</span>
                    <p>Memorable treasures for your loved ones.</p>
                  </Link>
                </div>
                <div className="pic pic-tab">
                  <Link href="#">

                    <img
                      src="/img/cat-004.jpg"
                      alt="Picture of the author"
                      width={256}
                      height={256}
                    />
                    <span>Silver Baby Items</span>
                    <p>Safe, charming keepsakes for little ones</p>
                  </Link>
                </div>
                <div className="pic pic-tab">
                  <Link href="#">

                    <img
                      src="/img/cat-005.jpg"
                      alt="Picture of the author"
                      width={256}
                      height={256}
                    />
                    <span>Pooja Silver Articles</span>
                    <p>Sacred, pure, and traditional</p>
                  </Link>
                </div>
                <div className="pic pic-tab">
                  <Link href="#">

                    <img
                      src="/img/cat-006.jpg"
                      alt="Picture of the author"
                      width={256}
                      height={256}
                    />
                    <span>Silver Utensils</span>
                    <p>Durable elegance for everyday or festive use.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-c-01">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="flex-conttiner-grd">
                <div className="flex-i-item">
                  <div className="icn">
                    <img src="/img/license-01.png" alt="icon" />
                  </div>
                  <span>Quality</span>
                  <p>that lasts </p>
                </div>
                <div className="flex-i-item">
                  <div className="icn">
                    <img src="/img/license-02.png" alt="icon" />
                  </div>
                  <span>Transparency</span>
                  <p>in every transaction </p>
                </div>
                <div className="flex-i-item">
                  <div className="icn">
                    <img src="/img/license-03.png" alt="icon" />
                  </div>
                  <span>Tradition</span>
                  <p>rooted in culture</p>
                </div>
                <div className="flex-i-item">
                  <div className="icn">
                    <img src="/img/license-04.png" alt="icon" />
                  </div>
                  <span>Values</span>
                  <p>that reflect trust</p>
                </div>
                <div className="flex-i-item">
                  <div className="icn">
                    <img src="/img/license-05.png" alt="icon" />
                  </div>
                  <span>Artistry</span>
                  <p>that inspires</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="text-center-te">
               <p>We are committed to making silver accessible, versatile, and cherished by all. Join us in celebrating the enduring joy and value of silver — for every moment, milestone, and memory.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray mb-01">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="stripe-bg">
                <ul>
                  <li>

                    <div className="stripe-list">
                      <img src="/img/icon-01.png" alt="diamond-pic" />
                      <p>925 BIS <br />Hallmark Purity</p>
                    </div>
                  </li>
                  <li>
                    <div className="stripe-list">
                      <img src="/img/icon-02.png" alt="verified" />
                      <p>Global <br />Shipping</p>
                    </div>
                  </li>
                  <li>
                    <div className="stripe-list">
                      <img src="/img/icon-03.png" alt="sell" />
                      <p>100%
                        <br />Made in India </p>
                    </div>
                  </li>
                  <li>
                    <div className="stripe-list">
                      <img src="/img/icon-04.png" alt="diamond-pic" />
                      <p>A trusted brand <br />or 15 years</p>
                    </div>
                  </li>
                  <li>
                    <div className="stripe-list">
                      <img src="/img/icon-05.png" alt="verified" />
                      <p>Transparent <br />Pricing</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  );
};

export default AboutUs;
