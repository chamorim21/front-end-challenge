import Header from "../components/Header";
import Card from "../components/Item";
import { Container, Button, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Initial() {
  const [pages, setPages] = useState(null);
  const [list, setList] = useState([]);
  const [atualPage, setAtualPage] = useState(2);

  const link =
    "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";

  const getData = async (url) => {
    const response = await axios(url);
    const data = await response.data;
    console.log(data);
    setList(data);
    setPages(response.headers["x-wp-totalpages"]);
  };

  useEffect(() => {
    getData(link);
  }, []);

  const renderList = (pages) => {
    return pages.map((page) => {
      page.image = page._embedded["wp:featuredmedia"][0].source_url;
      return (
        <Row>
          <Card
            key={page.id}
            title={page.title.rendered}
            image={page.image}
            slug={page.slug}
            link={page.link}
          />
        </Row>
      );
    });
  };

  const loadMore = async () => {
    if (!pages > 1) return;
    const response = await axios(link + `&page=${atualPage}`);
    const data = await response.data;
    setList([...list, ...data]);
    setAtualPage(atualPage + 1);
    return renderList(list);
  };

  return (
    <div className='d-flex flex-column'>
      <Header title='Página inicial' subtitle='Postagens'></Header>
      <Container className='w-100 d-flex flex-column' style={{ gap: "3rem" }}>
        {renderList(list)}
      </Container>
      <Button
        onClick={loadMore}
        className='m-2 p-2'
        style={{ width: "300px", height: "50px", alignSelf: "center" }}
      >
        Carregar Mais
      </Button>
    </div>
  );
}
