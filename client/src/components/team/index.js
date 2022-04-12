import { Row, Col, Container, Card, Button } from "react-bootstrap";

export default function Team() {
  return (
    <div className="container-sm" style={{textAlign:"center"}}>
      <h1> Meet the Team! </h1>
      <Row>
        <Col md="2">
          <h4> Claire </h4>
          <img src="https://ca.slack-edge.com/T03ALA7H4-U02QBFTSM3M-02e2ce9cc7bf-512" className="img-fluid" alt="claire" style={{width:"100px", height:"100px"}} />
          <p> "Is Kirsty there Brom so I can have a word?"" </p>
        </Col>
        <Col md="2">
          <h4> Shirley </h4>
          <img src="https://ca.slack-edge.com/T03ALA7H4-U02Q8GW763F-6dd1c9ecbf4e-512" className="img-fluid" alt="shirley" style={{width:"100px", height:"100px"}} />
          <p> "It's not posh it's South African"</p>
        </Col>
        <Col md="2">    
          <h4> Jane </h4>
          <img src="https://ca.slack-edge.com/T03ALA7H4-U02QDP72M8C-8e4f06dcb2a6-512" className="img-fluid" alt="jane" style={{width:"100px", height:"100px"}} />
          <p> "Anyway, I'd better go and get dressed from the waist down"</p>
        </Col>
        <Col md="2">  
          <h4> Bromley </h4>
          <img src="https://ca.slack-edge.com/T03ALA7H4-U02QBFUMKC3-d4b0f4b00679-512" className="img-fluid" alt="bromley" style={{width:"100px", height:"100px"}} />
          <p> "Love you, love you"</p>
          <p> "Was that done by a 5 year old"</p>
        </Col>
        <Col md="2">  
          <h4> Ben </h4>
          <img src="https://ca.slack-edge.com/T03ALA7H4-U02QBFTPQR1-ab091b593659-512" className="img-fluid" alt="ben" style={{width:"100px", height:"100px"}} />
          <p> "Sorry about the dog barking..."</p>
        </Col>
        <Col md="2">  
          <h4> Ledley </h4>
          <img src="/Ledley.jpg" className="img-fluid" alt="ben" style={{width:"80px", height:"100px"}} />
          <p> "Sorry about the barking..."</p>
        </Col>

      </Row>
    </div>
  )
} 