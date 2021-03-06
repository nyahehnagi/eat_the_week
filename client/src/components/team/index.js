import { Row, Col } from "react-bootstrap";

export default function Team() {
  return (
    <div className="out-container" style={{textAlign:"center"}}>
      <h1> Meet the Team! </h1>
      <Row>
        <Col md="2">
          <h4> Claire </h4>
          <img src="https://ca.slack-edge.com/T03ALA7H4-U02QBFTSM3M-02e2ce9cc7bf-512" className="img-fluid" alt="claire" style={{width:"100px", height:"100px"}} />
          <p> "If only we could just..." </p>
          <p> "I'm just gonna need a cup of tea" </p>
        </Col>
        <Col md="2">
          <h4> Shirley </h4>
          <img src="https://ca.slack-edge.com/T03ALA7H4-U02Q8GW763F-6dd1c9ecbf4e-512" className="img-fluid" alt="shirley" style={{width:"100px", height:"100px"}} />
          <p> "I'm off cycling" </p>
          <p> "I'll grab a tea too!" </p>
        </Col>
        <Col md="2">
          <h4> Jane </h4>
          <img src="https://ca.slack-edge.com/T03ALA7H4-U02QDP72M8C-8e4f06dcb2a6-512" className="img-fluid" alt="jane" style={{width:"100px", height:"100px"}} />
          <p> "I feel like a pig in Chablis"</p>
        </Col>
        <Col md="2">
          <h4> Bromley </h4>
          <img
            src="https://ca.slack-edge.com/T03ALA7H4-U02QBFUMKC3-d4b0f4b00679-512"
            className="img-fluid"
            alt="bromley"
            style={{ width: "100px", height: "100px" }}
          />
          <p> "Love you, love you"</p>
          <p> "Was that done by a 5 year old"</p>
        </Col>
        <Col md="2">
          <h4> Ben </h4>
          <img
            src="https://ca.slack-edge.com/T03ALA7H4-U02QBFTPQR1-ab091b593659-512"
            className="img-fluid"
            alt="ben"
            style={{ width: "100px", height: "100px" }}
          />
          <p> "Sorry about the dog barking..."</p>
        </Col>
        <Col md="2">
          <h4> Ledley </h4>
          <img
            src="/Ledley.jpg"
            className="img-fluid"
            alt="ben"
            style={{ width: "80px", height: "100px" }}
          />
          <p> "Sorry about the barking..."</p>
        </Col>
      </Row>
    </div>
  );
}
