import { useEffect, useState } from "react";
import Head from 'next/head'
import HomeBannerSlider from "../components/sliders/HomeBannerSlider";
import CategoryHome from '../components/ecommerce/CategoryHome';
import FeaturedProduct from '../components/home/FeaturedProduct';
import NewArrivalProduct from '../components/home/NewArrivalProduct';
import AppURL from "./api/AppUrl";
import BoxPrmoProduct from "@/components/elements/BoxPrmoProduct";
import CustomerReview from "@/components/ecommerce/CustomerReview";

export default function Home({ bannerdata, homecategorydata, featuredproductdata, newarrivalproductdata,testimonialdata }) {
  const [bannerData] = useState(bannerdata);
  const [categoryData] = useState(homecategorydata);
  const [featuredproductData] = useState(featuredproductdata);
  const [newarrivalproductData] = useState(newarrivalproductdata);
  const [testimonialData] = useState(testimonialdata)
  return (
    <div>
      <Head>
        <title>Silver Amigo dives into the spirit of everyday celebration, reflecting on the ethos of luxury
        through minimal gold jewelry. | Silver Amigo</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>

      <main>
        <div>
          <section className="home-slider position-relative">
            <div className="container-fluid g-0">
              <div className="home-slide-cover">
                {bannerData && bannerData.length >= 0 && (
                  <HomeBannerSlider banner={bannerData} />
                )}
              </div>
            </div>
          </section>

          <section className="bg-gray mb-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="stripe-bg">
                    <ul>
                      <li>
                        <div className="stripe-list">
                          <img src="/img/diamond-pic.png" alt="diamond-pic" />
                          <p>Splurge in <span>18 Kt</span> <br />Minimal Jewels</p>
                        </div>
                      </li>
                      <li>
                        <div className="stripe-list">
                          <img src="/img/verified.png" alt="verified" />
                          <p>Indulge in <b>100 %</b> <br />Hallmarked Jewels</p>
                        </div>
                      </li>
                      <li>
                        <div className="stripe-list">
                          <img src="/img/sell.png" alt="sell" />
                          <p>Avail Transparent <br /><span>Fare Pricing</span></p>
                        </div>
                      </li>
                      <li>
                        <div className="stripe-list">
                          <img src="/img/diamond-pic.png" alt="diamond-pic" />
                          <p>Splurge in <span>18 Kt</span> <br />Minimal Jewels</p>
                        </div>
                      </li>
                      <li>
                        <div className="stripe-list">
                          <img src="/img/verified.png" alt="verified" />
                          <p>Indulge in <span>100 %</span> <br />Hallmarked Jewels</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section className="mb-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {categoryData && categoryData.length >= 0 && (
                    <CategoryHome homecategory={categoryData} />
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="mt-40">
            <div className='container'>
              <div className="section-title">
                <h2>New Arrivals</h2>
              </div>

            </div>
            <div className="container-fluid g-0">
             <div className='related-products position-relative'>
              {newarrivalproductData && newarrivalproductData.length >= 0 && (
              <NewArrivalProduct newarrivaldata={newarrivalproductData} />
              )}
              </div>
              </div>
          </section>

          <section className='p-9 mb-60'>
            <div className='container'>
              <div className='row'>
                <BoxPrmoProduct />
              </div>
            </div>
          </section>

          <section className=" mb-60">
            <div className='container'>
              <div className="section-title">
                <h2>Featured Products</h2>
              </div>

            </div>
            <div className="container-fluid g-0">
            <div className='related-products position-relative'>
              {featuredproductData && featuredproductData.length >= 0 && (
                <FeaturedProduct featureddata={featuredproductData} />
              )}
              </div>
              </div>
          </section>

          <section className="mt-20 mb-60">
            <div className='container'>
              <div className="section-title">
                <h2>Customers Love</h2>
              </div>

            </div>
            <div className="container-fluid g-0">

              <div className='related-products position-relative'>
                {testimonialData && testimonialData.length >=0 && (
                  <CustomerReview reviewdata={testimonialData}/>
                )}
              </div>
            </div>
          </section>
      
        </div>
      </main>


    </div>
  )
}

export const getServerSideProps = async (context) => {
  try {
    const bannerres = await fetch(AppURL.allbanners);
    const bannerdata = await bannerres.json();
    const homecategoryresponse = await fetch(AppURL.collections);
    const fetauredproductres = await fetch(AppURL.featuredproducts);
    const newarrivalproductresponse = await fetch(AppURL.newarrivalproducts);
    const testimonialresponse = await fetch(AppURL.alltestimonials);
    const homecategorydata = await homecategoryresponse.json();
    const featuredproductdata = await fetauredproductres.json();
    const newarrivalproductdata = await newarrivalproductresponse.json();
    const testimonialdata = await testimonialresponse.json();
    return {
      props: { bannerdata, homecategorydata, featuredproductdata, newarrivalproductdata,testimonialdata },
    };
  } catch (err) {
    console.log(err);
    return {
      props: {
        data: false,
      },
    };
  }
};