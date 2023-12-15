import React from "react";
import FluidImage from "../Image/ImageC";
import { Badge, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function ProductCard({ data = {}, handleAdd = (e) => {} }) {
  return (
    <div className="container">
      <div className="card p-2 mb-3">
        <div className="row">
          <div className="col-2">
            <FluidImage imageURL={data.images} />
          </div>
          <div className="col-8">
            <h5>{data.title}</h5>
            <div className="col-2">
              <Badge bg="success">
                <h6>{data.rating}</h6>
              </Badge>
            </div>
            <div className="row">
              <p>{data.description}</p>
            </div>
            <div className="row" style={{ color: "red" }}>
              <h4>{"-" + data.discountPercentage + "%"}</h4>
              <p>Discount</p>
            </div>
            <div className="col-2">
              <Badge bg="danger">Hurry Up,only {data.stock} left!!!</Badge>
            </div>
            <div className="row">
              <h3>{data.brand}</h3>
            </div>
            <h6>{data.category}</h6>

            <div className="row d-flex flex-row-reverse">
              <div className="col-2">
                <Button
                  as="button"
                  variant="primary"
                  onClick={() => handleAdd(data)}>
                  + ADD
                </Button>
                <div className="col px-3 my-2" style={{ color: "darkgreen" }}>
                  <h6>{"$" + data.price}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
