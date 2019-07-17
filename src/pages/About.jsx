// src/pages/About.jsx
import React from "react";
import queryString from "query-string";

export default function About({ location }) {
  //const searchParams = new URLSearchParams(location.search);
  //console.log(searchParams.get("name"));
  const query = queryString.parse(location.search);
  console.log(query);
  const name = query.name;

  return (
    <div>
      <h2>About 페이지입니다.</h2>
      {name && <p>name 은 {name} 입니다.</p>}
    </div>
  );
}
