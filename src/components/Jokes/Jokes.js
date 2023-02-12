import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Link, useParams } from "react-router-dom";
import "./jokes.css";
import { AiOutlineRollback } from "react-icons/ai";

function Jokes() {
  const cat = useParams();
  const [jokes, setJokes] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/search?query=all")
      .then((res) => setJokes(res.data.result))
      .finally(() => setLoading((loading = false)))
      .catch((err) => console.log(err));
  }, [jokes]);
  const findingCategory = jokes.filter((el) => {
    return el.categories.toString() === cat.cat;
  });
  const uncategorized = jokes.filter((el) => {
    return el.categories.length === 0;
  });
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = findingCategory.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(findingCategory.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % findingCategory.length;
    setItemOffset(newOffset);
  };
  const endOffset2 = itemOffset + itemsPerPage;
  const currentItems2 = uncategorized.slice(itemOffset, endOffset2);
  const pageCount2 = Math.ceil(uncategorized.length / itemsPerPage);
  const handlePageClick2 = (event) => {
    const newOffset = (event.selected * itemsPerPage) % uncategorized.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      {currentItems.length && cat.cat !== "uncategorized" ? (
        <div>
          <h1 className='myJokesTitle'>{cat.cat} Jokes</h1>
          <Link to='/categories'>
            <Button variant='outline-info' className='goBackBtn'>
              <AiOutlineRollback />
            </Button>
          </Link>
        </div>
      ) : currentItems2.length && cat.cat === "uncategorized" ? (
        <div>
          <h1 className='myJokesTitle'>{cat.cat} Jokes</h1>
          <Link to='/categories'>
            <Button variant='outline-info' className='goBackBtn'>
              <AiOutlineRollback />
            </Button>
          </Link>
        </div>
      ) : null}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          marginTop: "5%",
        }}
      >
        {currentItems.length && !loading && cat.cat !== "uncategorized" ? (
          currentItems.map((el) => {
            return (
              <Card
                style={{
                  width: "18rem",
                  marginTop: "5%",
                  marginBottom: "5%",
                  boxShadow: "6px 4px aqua",
                }}
                key={el.id}
                border='info'
                bg='dark'
                text='white'
              >
                <Card.Img variant='top' src={el.icon_url} />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Text
                    style={{ fontFamily: "monospace", fontSize: "small" }}
                  >
                    {el.value}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })
        ) : cat.cat === "uncategorized" && !loading ? (
          currentItems2.map((el) => {
            return (
              <Card
                style={{
                  width: "18rem",
                  marginTop: "5%",
                  marginBottom: "5%",
                  boxShadow: "6px 4px aqua",
                }}
                key={el.id}
                border='info'
                bg='dark'
                text='white'
              >
                <Card.Img variant='top' src={el.icon_url} />
                <Card.Body style={{ textAlign: "center" }}>
                  <Card.Text
                    style={{ fontFamily: "monospace", fontSize: "small" }}
                  >
                    {el.value}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })
        ) : loading ? (
          <Spinner
            animation='border'
            role='status'
            variant='info'
            style={{ marginTop: "10%" }}
          >
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        ) : (
          <div>
            <h1 className='NoJokes'>No jokes Available</h1>
            <Link to='/categories'>
              <Button variant='outline-info' className='goBackBtn'>
                <AiOutlineRollback />
              </Button>
            </Link>
          </div>
        )}
      </div>
      {pageCount > 1 && cat.cat !== "uncategorized" ? (
        <ReactPaginate
          breakLabel='...'
          nextLabel='next >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel='< previous'
          renderOnZeroPageCount={null}
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
      ) : pageCount2 > 1 && cat.cat === "uncategorized" ? (
        <ReactPaginate
          breakLabel='...'
          nextLabel='next >'
          onPageChange={handlePageClick2}
          pageRangeDisplayed={3}
          pageCount={pageCount2}
          previousLabel='< previous'
          renderOnZeroPageCount={null}
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
      ) : null}
    </>
  );
}

export default Jokes;
