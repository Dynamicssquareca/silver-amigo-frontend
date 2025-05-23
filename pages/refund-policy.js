import Head from "next/head";
import Link from "next/link";
import AppURL from "./api/AppUrl";
import { useEffect, useState } from "react";
 
const RefundPolicy = () => {
  const [details, setDetails] = useState(null);
 
  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await fetch(AppURL.RefundPolicy, {
          method: "GET",
        });
        const data = await response.json();
        setDetails(data.data[0]);  
       
      } catch (error) {
        console.error("Error fetching Refund Policy:", error);
      }
    };
 
    fetchTerms();
  }, []);
 
  return (
    <>
      <Head>
        <title>Refund Policy | Silver Amigo</title>
      </Head>
 
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span></span>Refund Policy
          </div>
        </div>
      </div>
 
      <section className="ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="new-header">Refund Policy</h1>
            </div>
            <div className="col-lg-12">
              <div className="inner-content-defalul">
                {details ? (
                  
                  <div
                    dangerouslySetInnerHTML={{
                      __html: details.description,  
                    }}
                  />
                ) : (
                   <div className="leadong-p"><div className="padd"><p>Loading...</p></div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
 
export default RefundPolicy;