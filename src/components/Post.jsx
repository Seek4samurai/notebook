import React from "react";

import style from "../styles/Post.module.css";

const Post = (props) => {
  const handleClick = () => {
    let box = document.getElementById(`Container_${props.idx}`);
    let btn = document.getElementById(`Btn_${props.idx}`);

    if (box.style.height !== "fit-content") {
      box.style.height = "fit-content";
      btn.innerText = "Collapse";
    } else {
      box.style.height = "200px";
      btn.innerText = "Expand";
    }
  };

  return (
    <>
      <div className={style.Container}>
        <div>
          <div className={style.Heading}>{props.data.title}</div>
          <div className={style.Tagline}>#{props.data.tagline}</div>
          <div className={style.Description}>{props.data.description}...</div>
          <div className={style.Data} id={"Container_" + props.idx}>
            {props.data.data}
          </div>
        </div>
        <div className={style.Bottom}>
          <button
            className={style.Btn}
            id={"Btn_" + props.idx}
            onClick={() => handleClick()}
          >
            Expand
          </button>
          <button className={style.Btn}>Contribute</button>
        </div>
      </div>
    </>
  );
};

export default Post;
