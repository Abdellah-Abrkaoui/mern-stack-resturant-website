// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function CategoryItems({ name, href, backgroundColor, color }) {
  const style = {
    backgroundColor: backgroundColor,
    color: color,
    borderColor: color,
  };
  return (
    <div>
      <Link to={href} className="rounded-full">
        <div
          className="uppercase px-6 py-2 text-center rounded-full"
          style={style}
        >
          {name}
        </div>
      </Link>
    </div>
  );
}

function CategoryList() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 ">
      <CategoryItems
        name="entrees"
        href="/categories/entrees"
        backgroundColor={"#E74C3C"}
        color={"#F4F6F7"}
      />
      <CategoryItems
        name="breakfast"
        href="/categories/breakfast"
        backgroundColor={"#5499C7"}
        color={"#F4F6F7"}
      />
      <CategoryItems
        name="lunch"
        href="/categories/lunch"
        backgroundColor={"#52BE80"}
        color={"#F4F6F7"}
      />
      <CategoryItems
        name="deserts"
        href="/categories/deserts"
        backgroundColor={"#F4D03F"}
        color={"#F4F6F7"}
      />
      <CategoryItems
        name="sides"
        href="/categories/sides"
        backgroundColor={"#797D7F"}
        color={"#F4F6F7"}
      />
      <CategoryItems
        name="drinks"
        href="/categories/drinks"
        backgroundColor={"#BB8FCE"}
        color={"#F4F6F7"}
      />
    </div>
  );
}

function CategoryWrapper() {
  return (
    <div>
      <CategoryList />
    </div>
  );
}

export default CategoryWrapper;
