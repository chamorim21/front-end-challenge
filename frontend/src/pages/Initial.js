import Header from "../components/Header";
import Card from "../components/Card";
import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = async (url) => {
      const resp = await axios(url);
      const data = await resp.data;
      setList(data);
    };

    getData("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518");
  }, []);

  const renderList = (data) => {
    return data.map((item) => {
      const image = item._embedded["wp:featuredmedia"][0].source_url;
      return (
        <Card
          key={item.id}
          title={item.title.rendered}
          image={image}
          link={item.link}
        />
      );
    });
  };

  return (
    <>
      <Header title="Página inicial" subtitle="ticogostoso"></Header>
      <Container>{renderList(list)}</Container>
      <button>Carregar Mais</button>
    </>
  );
};
