import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";

function Jokes() {
  const cat = useParams();
  const [jokes, setJokes] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  useEffect(() => {
    try {
      axios
        .get("https://api.chucknorris.io/jokes/search?query=all")
        .then((res) => setJokes(res.data.result))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
    // const findingCategory = jokes.find((el) => {
    //   return el.categories.toString() === cat.cat;
    // });
  }, [jokes]);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = jokes.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(jokes.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % jokes.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "5%",
        }}
      >
        {currentItems
          .filter((el) => {
            return el.categories.toString() === cat.cat;
          })
          .map((el) => {
            return (
              <Card style={{ width: "18rem" }} key={el.id}>
                <Card.Img variant='top' src='holder.js/100px180' />
                <Card.Body>
                  <Card.Title>{el.id}</Card.Title>
                  <Card.Text>{el.value}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
      </div>
      <ReactPaginate
        breakLabel='...'
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel='< previous'
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Jokes;
