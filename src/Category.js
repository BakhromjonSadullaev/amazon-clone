import React, { useEffect } from "react";
import "./category.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";
const Category = ({ tag, title, image }) => {
  const history = useHistory();

  const [{ basket, category }, dispatch] = useStateValue();
  const categoryFn = () => {
    dispatch({
      type: "CATEGORY",
      payload: {
        route: tag,
      },
    });
  };

  return (
    <div className="category">
      <h3 onClick={() => console.log(category)}>{title}</h3>

      <img onClick={categoryFn} className="category-img" src={image} alt="" />
      <Link style={{ textDecoration: "none" }} to={`${category.route}`}>
        <p
          onClick={useEffect(() => categoryFn, [])}
          className="category-linker"
        >
          Shop now{" "}
        </p>
      </Link>
    </div>
  );
};

export default Category;
