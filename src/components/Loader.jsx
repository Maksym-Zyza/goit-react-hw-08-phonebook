import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import css from "../App.module.css";

const Loader = () => {
  return (
    <div className={css.loaderDiv}>
      <PropagateLoader loading={true} color={"red"} />
    </div>
  );
};

export default Loader;
