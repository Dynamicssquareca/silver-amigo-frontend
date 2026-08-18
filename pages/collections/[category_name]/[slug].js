import React from 'react';
import Link from 'next/link';
import ProductDetailsnew from '../../../components/ecommerce/ProductDetailsnew';
import Head from 'next/head';
import AppURL from '../../api/AppUrl';

const Slug = ({ category_name, slug, product, relatedProducts }) => {
    const { name = 'Product', meta_description = 'Product details page' } = product || {};

    return (
        <>
            <Head>
                <title>{`${name} | Silver Amigo`}</title>
                <meta name="description" content={meta_description} />
            </Head>

            <div className='page-header breadcrumb-wrap'>
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span>{category_name}</span>
                        <span>{slug}</span>
                    </div>
                </div>
            </div>
            {product && Object.keys(product).length > 0 ? (
                <ProductDetailsnew productData={product} relatedProducts={relatedProducts} />
            ) : (
                <p>Product details not found.</p>
            )}
        </>
    );
};

export default Slug;

 export async function getStaticPaths() {
  try {
    const res = await fetch(AppURL.products); 
    const products = await res.json();

    let paths = [];
    if (Array.isArray(products)) {
      paths = products
        .filter(product => product?.category?.slug && product?.first_variant?.slug)
        .map((product) => ({
          params: {
            category_name: product.category.slug,
            slug: product.first_variant.slug,
          },
        }));
    } else {
      console.error('getStaticPaths: Expected an array of products, but got:', typeof products);
    }

    return {
      paths,
      fallback: 'blocking',  
    };
  } catch (err) {
    console.error('Error in getStaticPaths:', err);
    return {
      paths: [],
      fallback: 'blocking', 
    };
  }
}

export async function getStaticProps({ params }) {
    const { category_name, slug } = params;

    try {
        const res = await fetch(AppURL.productdetails(category_name, slug));
        if (!res.ok) throw new Error('Failed to fetch product details');

        let { product, relatedProducts } = await res.json();

        // Filter the main product data to only include used fields
        if (product) {
            const productImages = product.images ? product.images.split(',') : [];
            product = {
                name: product.name || 'Product',
                meta_description: product.meta_description || 'Product details page',
                images: productImages.slice(0, 2).join(','),
                sku_id: product.sku_id || '',
                short_description: product.short_description || '',
                sale_price: product.sale_price || 0,
                product_id: product.product_id || ''
            };
        }

        // Filter the related products to prevent large-page-data warnings
        if (Array.isArray(relatedProducts)) {
            relatedProducts = relatedProducts.slice(0, 15).map(item => {
                const variants = Array.isArray(item.variants) && item.variants.length > 0 ? item.variants : [{}];
                const variantImages = variants[0].images ? variants[0].images.split(',') : [];
                return {
                    name: item.name || '',
                    sku_id: item.sku_id || '',
                    category: { slug: item.category?.slug || '' },
                    variants: [{
                        slug: variants[0].slug || '',
                        sale_price: variants[0].sale_price || 0,
                        images: variantImages.slice(0, 2).join(',')
                    }]
                };
            });
        }

        return {
            props: { category_name, slug, product, relatedProducts },
            revalidate: 3600,
        };
    } catch (error) {
        console.error('Error fetching product details:', error.message);
        return { notFound: true };
    }
}
