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

     
    </>
  );
};

export default AboutUs;
