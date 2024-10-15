import React, { useState, useEffect } from "react";
import Head from "next/head";
import SingleProductShop from "@/components/ecommerce/SingleProductShop";
import AppURL from "@/pages/api/AppUrl";
 
const Index = ({ slug, data, error }) => {
  const resProducts = data || [];
  const [sortedProducts, setSortedProducts] = useState(resProducts);
 
  // Update sorted products when data changes
  useEffect(() => {
    setSortedProducts(resProducts);
  }, [resProducts]);
 
  // Sort products by price
  const sortProducts = (order) => {
    const sorted = [...resProducts].sort((a, b) => {
      return order === "asc"
        ? a.first_variant.sale_price - b.first_variant.sale_price
        : b.first_variant.sale_price - a.first_variant.sale_price;
    });
    setSortedProducts(sorted);
  };
 
  // If error occurs or no products found
  if (error || sortedProducts.length === 0) {
    return (
      <>
        <Head>
          <title>Product not listed - Silver Amigo</title>
        </Head>
        <section className="pt-40">
          <div className="container text-center">
            <h5>Product not listed in this category</h5>
            <p>
              We couldn't find any products in this category. Please try another
              category.
            </p>
          </div>
        </section>
      </>
    );
  }
 
  return (
    <>
      <Head>
        <title>{slug} Products - Silver Amigo</title>
        <meta name="description" content={`Products under ${slug}`} />
      </Head>
 
      {/* Section for product headers */}
      <section className="pt-40">
        <div className="container">
          <div className="product-headers">
            <h1 className="header-h">{slug}</h1>
          </div>
        </div>
      </section>
 
      {/* Section for product listings */}
      <section className="pb-60 pt-20">
        <div className="container">
          <div className="row flex-row-reverse">
            <div className="col-xl-9 col-lg-8">
              <div className="list-of-products-p">
                <div className="row">
                  {sortedProducts.map((item, i) => (
                    <div className="col-xxl-3 col-md-6 col-sm-6 col-6" key={i}>
                      <SingleProductShop
                        productName={item.name}
                        productSlug={item.first_variant.slug}
                        productprice={item.first_variant.sale_price}
                        sku={item.product_sku_id}
                        frontImg={item.first_variant.images.split(",")[0]}
                        backImg={item.first_variant.images.split(",")[1]}
                        category_name={item.category.slug}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
 
            {/* Product Filter Section */}
            <div className="col-xl-3 col-lg-4">
              <div className="product-filter-wrapper sticky-top">
                <div className="h-600">
                  <div className="filter-list-sec">
                    <h4>Sort By</h4>
                    <div className="form-check jba-checkbox">
                      <div>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sort"
                          onChange={() => sortProducts("desc")}
                          id="highLow"
                        />
                        <label className="form-check-label" htmlFor="highLow">
                          Price High to Low
                        </label>
                      </div>
                      <div>
                        <input
                          className="form-check-input"
                          type="radio"
                          name="sort"
                          onChange={() => sortProducts("asc")}
                          id="lowHigh"
                        />
                        <label className="form-check-label" htmlFor="lowHigh">
                          Price Low to High
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
 
export default Index;
 
// Fetch data from the server side
export const getServerSideProps = async (context) => {
    const search = context.query.q;
  try {
    const res = await fetch(AppURL.SearchProduct(search));
    const data = await res.json();
 
    if (!data || data.error) {
      return { props: { search, data: null, error: true } };
    }
 
    return { props: { search, data, error: false } };
  } catch (err) {
    console.error(err);
    return { props: { search, data: null, error: true } };
  }
};