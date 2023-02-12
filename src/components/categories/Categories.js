import React, { useState, useEffect } from "react";
import axios from "axios";
import "../categories/categories.css";
import { Button, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Categories() {
  const [categories, setCategories] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((res) => setCategories(res.data))
      .finally(() => setLoading((loading = false)))
      .catch((err) => console.log(err));
  }, [categories]);
  const newArr = ["uncategorized", ...new Set(categories)];
  return (
    <div>
      <h1 className='myTitle'>Categories</h1>
      <div className='mappedCards'>
        {!loading ? (
          newArr.map((cat) => {
            return (
              <motion.div
                className='mt-3'
                animate={{ x: 20 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <Card
                  style={{ width: "10rem", boxShadow: "4px 2px aqua" }}
                  bg='dark'
                  text='light'
                  border='info'
                >
                  <Card.Body>
                    <Card.Title
                      style={{
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        fontFamily: "cursive",
                      }}
                    >
                      <h6 style={{ display: "flex", justifyContent: "center" }}>
                        {cat}
                      </h6>
                    </Card.Title>
                    <Link to={`/jokes/${cat}`}>
                      <motion.div
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button variant='outline-info'>Jokes</Button>
                      </motion.div>
                    </Link>
                  </Card.Body>
                </Card>
              </motion.div>
            );
          })
        ) : (
          <Spinner
            animation='border'
            role='status'
            variant='info'
            style={{ marginTop: "10%" }}
          >
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        )}
      </div>
    </div>
  );
}

export default Categories;
