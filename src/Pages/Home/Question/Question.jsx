import React from "react";
import { Accordion } from "react-bootstrap";
import qustImg from './quest.svg'

const Question = () => {
  return (
    <>
      <div className="container my-5 py-3">
          <h3 className="text-center my-5">Have Any <span className="text-primary">Question</span></h3>
        <div className="row row-cols-1 row-cols-lg-2 align-items-center">
            <div className="col">
                <img className="img-fluid" src={qustImg} alt="" />
            </div>
          <div className="col my-3">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How Many Days Need For Delivery ?
                </Accordion.Header>
                <Accordion.Body>
                  It depend on your distance, but we try to make delivery in 3-7
                  days.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Can i payment on delivery time ?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, but you need to pay 50% when you order the product.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  I have more question ?
                </Accordion.Header>
                <Accordion.Body>
                  Send massage form the bellow.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Question;
