
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/globals.css';
// import "../public/css/style.css";
import Layout from '../components/layout/Layout';
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/router'
import LoadingBar from 'react-top-loading-bar'
import AppURL from "./api/AppUrl";


function MyApp({ Component, pageProps,menuItems }) {
  const router = useRouter()
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    router.events.on('routeChangeStart',()=>{
      setProgress(4000)                           
    })
    
    router.events.on('routeChangeComplete',()=>{
      setProgress(1000)
    })
  })
  useEffect(() => {
    const checkAndMergeCart = async () => {
        const token = localStorage.getItem('authToken');  
        const cartData = JSON.parse(localStorage.getItem('cart')) || {};  
        if (token && Object.keys(cartData).length > 0) {
            try {
                const response = await fetch(AppURL.MergeGuestCart, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ cartItems: cartData }),
                });

                const data = await response.json();
                if (response.ok) {
                     
                    localStorage.removeItem('cart');
                    localStorage.removeItem('cartcount');
                } else {
                    console.error('Cart merge failed:', data.message);
                }
            } catch (error) {
                console.error('Error merging guest cart:', error);
            }
        }
    };

    checkAndMergeCart();
}, []);

   
  return <>
  <LoadingBar
        color='#db2777'
        progress={progress}
        waitingTime={400}
        height = {4}
        onLoaderFinished={() => setProgress()}
      />
<Layout menuItem={menuItems}>
<Component {...pageProps} />
</Layout>
 
 
  </>
}
 
export default MyApp

MyApp.getInitialProps = async () => {
  const response = await fetch(AppURL.collections);
  const menuItems = await response.json();
   
  return {
    menuItems,
  };
};