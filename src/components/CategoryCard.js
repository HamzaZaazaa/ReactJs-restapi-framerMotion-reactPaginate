import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryCard({ cat }) {
  return (
    <div className='mt-3'>
      <Card style={{ width: "10rem" }}>
        <Card.Body>
          <Card.Title
            style={{
              fontWeight: "bold",
              textTransform: "uppercase",
              fontFamily: "cursive",
            }}
          >
            {cat}
          </Card.Title>
          <Link to={`/jokes/${cat}`}>
            <Button variant='primary'>Jokes</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CategoryCard;
