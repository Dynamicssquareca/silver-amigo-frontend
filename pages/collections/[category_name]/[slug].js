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
                <title>{name} | Silver Amigo</title>
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
 
export async function getServerSideProps({ params }) {
    const { category_name, slug } = params;
 
    try {
         
        const res = await fetch(AppURL.productdetails(category_name, slug));
        if (!res.ok) throw new Error('Failed to fetch product details');
        const { product, relatedProducts } = await res.json();
        return {
            props: { category_name, slug, product, relatedProducts },
        };
    } catch (error) {
        console.error('Error fetching product details:', error.message);
        return {
            props: { category_name: '', slug: '', product: {}, relatedProducts: [] },
        };
    }
}
 