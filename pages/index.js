import { useEffect, useState } from "react";
import Head from 'next/head'
import HomeBannerSlider from "../components/sliders/HomeBannerSlider";
import CategoryHome from '../components/ecommerce/CategoryHome';
import FeaturedProduct from '../components/home/FeaturedProduct';
import NewArrivalProduct from '../components/home/NewArrivalProduct';
import AppURL from "./api/AppUrl";
import BoxPrmoProduct from "@/components/elements/BoxPrmoProduct";
import CustomerReview from "@/components/ecommerce/CustomerReview";
import CustomerCollectMore from "@/components/ecommerce/CustomerCollectMore";
export default function Home({ bannerdata, homecategorydata, featuredproductdata, newarrivalproductdata }) {
  const [bannerData] = useState(bannerdata);
  const [categoryData] = useState(homecategorydata);
  const [featuredproductData] = useState(featuredproductdata);
  const [newarrivalproductData] = useState(newarrivalproductdata);
  return (
    <div>
      <Head>
        <title>Loose Diamond Supplier, Manufacturer & Exporter from India | JBA</title>
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


          <section className="">
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
          <section className="mt-20">
            <div className='container'>
              <div className="section-title">
                <h2>New Arrivals</h2>
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

          <section className='p-9'>
            <div className='container'>
              <div className='row'>
                <BoxPrmoProduct />
              </div>
            </div>
          </section>

          <section className="mt-20">
            <div className='container'>
              <div className="section-title">
                <h2>Featured Products</h2>
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

          <section className="mt-20">
            <div className='container'>
              <div className="section-title">
                <h2>Customers Love</h2>
              </div>

            </div>
            <div className="container-fluid g-0">

              <div className='related-products position-relative'>
                <CustomerReview />

              </div>


            </div>
          </section>


          <section className="mt-20">
            <div className='container'>
              <div className="section-title">
                <h2>Explore our all Collection</h2>
              </div>

            </div>
            <div className="container-fluid g-0">

              <div className='related-products position-relative'>
                <CustomerCollectMore />

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
    const bannerres = await fetch(AppURL.banner);
    const bannerdata = await bannerres.json();
    const homecategoryresponse = await fetch(AppURL.category);
    const fetauredproductres = await fetch(AppURL.featuredproduct);
    const newarrivalproductresponse = await fetch(AppURL.newarrivalproduct);
    const homecategorydata = await homecategoryresponse.json();
    const featuredproductdata = await fetauredproductres.json();
    const newarrivalproductdata = await newarrivalproductresponse.json();
    return {
      props: { bannerdata, homecategorydata, featuredproductdata, newarrivalproductdata },
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