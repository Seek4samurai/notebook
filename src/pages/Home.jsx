import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaShippingFast } from "react-icons/fa";
import { content_data } from "../content/data";
import { content_home } from "../content/home";
import { auth } from "../lib/firebaseConfig";
import style from "../styles/Home.module.css";
import Post from "../components/Post";

const Home = () => {
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState();

  // Getting active user --------------------------------------------------
  const fetchUser = async () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserDetails(user);
      } else {
        navigate("/");
      }
    });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  if (userDetails) {
    return (
      <>
        <div className={style.Container}>
          <div className={style.TopBar}>
            <div className={style.Card}>
              Welcome back, {userDetails.email}{" "}
              <FaShippingFast></FaShippingFast>
            </div>
          </div>
          <div className={style.SubSection}>
            <div className={style.About}>{content_home.subheading}</div>
            <div className={style.Bottom}>
              <button className={style.Btn}>
                Contribute <FaShippingFast></FaShippingFast>
              </button>
              <button className={style.Btn}>Know back story</button>
            </div>
          </div>
          <div className={style.ContentContainer}>
            {Object.values(content_data).map((item, idx) => {
              return <Post data={item} idx={idx} key={idx}></Post>;
            })}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className={style.Container}>
        <h2 className="text-center my-3">Loading...</h2>
      </div>
    );
  }
};

export default Home;
