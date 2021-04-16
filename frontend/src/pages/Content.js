import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import axios from "axios";

export default function Content() {
  const [page, setPage] = useState({});

  const id = window.location.href.split("/")[3];

  useEffect(() => {
    async function getData() {
      const response = await axios(
        `https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=${id}}`
      );
      const data = await response.data;
      setPage({
        image: data[0]["_embedded"]["wp:featuredmedia"][0].source_url,
        title: data[0].title.rendered,
        content: data[0].content.rendered,
      });
    }
    getData();
  }, [id]);

  return (
    <>
      <Header image={page.image} title={page.title} />
      <Container dangerouslySetInnerHTML={{ __html: page.content }}></Container>
    </>
  );
}
