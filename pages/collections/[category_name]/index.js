import React, { useState, useEffect } from "react";
import Head from "next/head";
import SingleProductShop from "../../../components/ecommerce/SingleProductShop";
import AppURL from "../../api/AppUrl";

const Index = ({ category_name, data, categoryDetails, error }) => {
  const resProducts = data || [];
  const [sortedProducts, setSortedProducts] = useState(resProducts);

  useEffect(() => {
    setSortedProducts(resProducts);
  }, [resProducts]);

  const sortProducts = (order) => {
    const sorted = [...resProducts].sort((a, b) => {
      return order === 'asc'
        ? a.first_variant.sale_price - b.first_variant.sale_price
        : b.first_variant.sale_price - a.first_variant.sale_price;
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
        <title>{categoryDetails?.name || category_name} - Silver Amigo</title>
        <meta name="description" content={categoryDetails?.meta_description || ''} />
      </Head>

      <section className="pt-40">
        <div className="container">
          <div className="product-headers">
            <h5>{categoryDetails?.name || category_name}</h5>
            {categoryDetails?.meta_description && (
              <div dangerouslySetInnerHTML={{ __html: categoryDetails.meta_description }} />
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

            <strong className="text-center pt-40">
              Know more about {categoryDetails?.name || category_name}
            </strong>
            {categoryDetails?.description && (
              <div dangerouslySetInnerHTML={{ __html: categoryDetails.description }} />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

export const getStaticPaths = async () => {
  try {
    const res = await fetch(AppURL.collections);
    const categories = await res.json();

    const paths = categories.map((cat) => ({
      params: { category_name: cat.slug },
    }));

    return {
      paths,
      fallback: 'blocking',  
    };
  } catch (error) {
    console.error('Error fetching collections for paths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export const getStaticProps = async (context) => {
  const { category_name } = context.params;

  try {
    const res = await fetch(AppURL.productbycollection(category_name));
    
    // If the API returns a 404, we safely return notFound instead of crashing the JSON parser
    if (res.status === 404) {
      return { notFound: true };
    }
    
    // If the API throws a 500 error or is returning an HTML error page, throw an error
    // so that ISR preserves the cache and Vercel knows the API is failing.
    if (!res.ok) {
      throw new Error(`API returned status ${res.status}`);
    }

    const text = await res.text();
    let rawData;
    try {
      rawData = JSON.parse(text);
    } catch (e) {
      throw new Error(`Failed to parse JSON response. API returned HTML or invalid data: ${text.substring(0, 100)}...`);
    }

    if (!rawData || rawData.error || !Array.isArray(rawData)) {
      throw new Error('Invalid data returned from API');
    }
    
    let categoryDetails = null;
    if (rawData.length > 0 && rawData[0].category) {
      categoryDetails = {
        name: rawData[0].category.name || '',
        meta_description: rawData[0].category.meta_description || '',
        description: rawData[0].category.description || ''
      };
    }

    // Filter out unneeded fields to prevent large-page-data warnings
    // CRITICAL: We only pass the slug here, avoiding duplicating the huge category description for every single product
    const data = rawData.map(item => {
      const imagesList = item.first_variant?.images ? item.first_variant.images.split(',') : [];
      return {
        name: item.name || '',
        product_sku_id: item.product_sku_id || '',
        category: { 
          slug: item.category?.slug || ''
        },
        first_variant: item.first_variant ? {
          slug: item.first_variant.slug || '',
          sale_price: item.first_variant.sale_price || 0,
          images: imagesList.slice(0, 2).join(',')
        } : null
      };
    });

    return {
      props: { category_name, data, categoryDetails, error: false },
      revalidate: 300,  
    };
  } catch (error) {
    console.error('Error fetching products by collection:', error);
    // Throw error so ISR aborts and serves the last known good static page
    throw error;
  }
}; 
