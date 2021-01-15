import Header from "../components/Header";
import Card from "../components/Card";
import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const [pages, setPages] = useState(null);
  const [list, setList] = useState([]);
  const link =
    "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";

  useEffect(() => {
    const getData = async (url) => {
      const resp = await axios(url);
      const data = await resp.data;
      setList(data);
      setPages(resp.headers["x-wp-totalpages"]);
    };

    getData(link);
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

  const load = async () => {
    if (!pages > 1) return;
    const resp = await axios(link + "&page=2");
    const data = await resp.data;
    setList([...list, ...data]);
    return renderList(list);
  };
  return (
    <div className="d-flex flex-column">
      <Header title="Página inicial" subtitle="ticogostoso"></Header>
      <Container>{renderList(list)}</Container>
      <button
        onClick={load}
        className="m-2 p-2"
        style={{ width: "300px", height: "50px", alignSelf: "center" }}
      >
        Carregar Mais
      </button>
    </div>
  );
};
