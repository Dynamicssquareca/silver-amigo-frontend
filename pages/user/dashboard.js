import Head from "next/head";
import Link from "next/link";
import React from "react";
import UserSideBar from "../../components/user/UserSideBar";
import UserAccOrder from "../../components/user/UserAccOrder";
import userAuth from "../hooks/userAuth";

const UserAccounts = () => {
  const { userData, loading } = userAuth();
 
  if (loading) {
    return <div>Loading...</div>; 
  }
 
  if (!userData) {
    return <div>No user data found.</div>;  
  }
  return (

    <>
      <Head>
        <title>{userData.name} - Dashboard | Silver Amigo</title>
        <meta
          name="description"
          content="Loose Diamond Supplier, Manufacturer & Exporter from India"
        />
      </Head>
      <div className="page-header breadcrumb-wrap mb-50">
        <div className="container">
          <div className="breadcrumb">
            
              <a href="/">Home</a>
            
            <span></span>Accounts
          </div>
        </div>
      </div>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10  col-xxl-9 m-auto">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="commen-side-head">
                                    <h1>My Account</h1>
                                </div>
                            </div>
                            
                            <div className="col-lg-8  col-md-8 col-sm-12 order-md-2">
                              <UserAccOrder useData={userData}/>
                            </div>
                            <div className="col-lg-4  col-md-4 col-sm-12 order-md-1">
                                <UserSideBar userData={userData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default UserAccounts;
