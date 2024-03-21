'use client'

// import SectionHeading from "../SectionHeading/SectionHeading";
import "./error.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Preloader from "@/components/Preloader/Preloader";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import { useEffect, useState } from "react";
import axios from 'axios';
import Link from 'next/link'; // Import Link from next/link

const Page404 = () => {
  const [users, setUsers] = useState(null);

  const getUsers = async () => {
    try {
      const { data } = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
      setUsers(data.user);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        users && (
          <div>
            <CustomCursor />
            <Header data={users} />
            <div className="st-page-not-found st-flex-center text-center">
              <div className="">
                <h3>4<span>0</span>4</h3>
                <h4>Page Not Found</h4>
                <p>Oops, the page you are looking for can&apos;t be found!</p>
                {/* Use Link from next/link for client-side navigation */}
                <Link legacyBehavior href="/">
                  <a className="st-btn st-style1 st-color1">Go to Home</a>
                </Link>
              </div>
            </div>
            <Footer />
          </div>
        )
      )}
    </>
  );
};

export default Page404;
