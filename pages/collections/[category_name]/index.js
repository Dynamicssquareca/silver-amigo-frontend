import React, { useState, useEffect } from "react";
import Head from "next/head";
import SingleProductShop from "../../../components/ecommerce/SingleProductShop";
import AppURL from "../../api/AppUrl";
 
const Index = ({ category_name, data, error }) => {
  const resProducts = data || [];
  const [sortedProducts, setSortedProducts] = useState(resProducts);
 
  useEffect(() => {
    setSortedProducts(resProducts);
  }, [resProducts]);
 
  const sortProducts = (order) => {
    const sorted = [...resProducts].sort((a, b) => {
      return order === 'asc' ? a.first_variant.sale_price - b.first_variant.sale_price : b.first_variant.sale_price - a.first_variant.sale_price;
    });
    setSortedProducts(sorted);
  };
 
  if (error || sortedProducts.length === 0) {
    return (
      <>
        <Head>
          <title>Product not listed - Silver Amigo</title>
        </Head>
        <section className="pt-40">
          <div className="container text-center">
            <h5>Product not listed in this category</h5>
            <p>We couldn't find any products in this category. Please try another category.</p>
          </div>
        </section>
      </>
    );
  }
 
  return (
    <>
      <Head>
        <title>{sortedProducts[0].category.name} - Silver Amigo</title>
        <meta name="description" content={sortedProducts[0].category.meta_description} />
      </Head>
      <section className="pt-40">
        <div className="container">
          <div className="product-headers">
            <h5>{sortedProducts[0].category.name}</h5>
            {sortedProducts.length > 0 && (
              <div dangerouslySetInnerHTML={{ __html: sortedProducts[0].category.meta_description }} />
            )}
            <h1 className="header-h">{category_name}</h1>
          </div>
        </div>
      </section>
      <section className="pb-60 pt-20">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-xl-9 col-lg-8">
              <div className="list-of-products-p">
                <div className="row">
                  {sortedProducts.map((item, i) => (
                    <div className="col-xxl-4 col-md-6 col-sm-6 col-6" key={i}>
                      <SingleProductShop
                        productName={item.name}
                        productSlug={item.first_variant.slug}
                        productprice={item.first_variant.sale_price}
                        sku={item.product_sku_id}
                        frontImg={item.first_variant.images.split(',')[0]}
                        backImg={item.first_variant.images.split(',')[1]}
                        category_name={item.category.slug}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
           
            <div className="col-xl-3 col-lg-4">
              <div className="prodect-filter-wrper sticky-top">
                <div className="fliter-head">
                  <h3>Filter By</h3>
                </div>
                <div className="h-600">
                  <div className="filter-list-sec">
                    <h4>Sort By</h4>
                    <div className="form-check jba-checkbox">
                      <div>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sort"
                          onChange={() => sortProducts('desc')}
                          id="highLow"
                        />
                        <label className="form-check-label" htmlFor="highLow"> Price High to Low </label>
                      </div>
                      <div>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sort"
                          onChange={() => sortProducts('asc')}
                          id="lowHigh"
                        />
                        <label className="form-check-label" htmlFor="lowHigh"> Price Low to High </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <strong className="text-center pt-40">Konw more about {sortedProducts[0].category.name}</strong>
            <div dangerouslySetInnerHTML={{ __html: sortedProducts[0].category.description }} />
          </div>
        </div>
      </section>
    </>
  );
};
 
export default Index;
 
 
export const getStaticPaths = async () => {
  // Fetch all category names to generate paths
  const res = await fetch(AppURL.collections);
  const categories = await res.json();

  const paths = categories.map((cat) => ({
    params: { category_name: cat.slug }
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async (context) => {
  const { category_name } = context.params;
  try {
    const res = await fetch(AppURL.productbycollection(category_name));
    const data = await res.json();
    if (!data || data.error) {
      return { props: { category_name, data: null, error: true } };
    }
    return { props: { category_name, data, error: false } };
  } catch (err) {
    console.log(err);
    return { props: { category_name, data: null, error: true } };
  }
};