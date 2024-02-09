import React from "react";
import {Link} from "react-router-dom";
import {Row,Col,Form,label,Button} from "react-bootstrap";

const ResultLoginPage = () => {

    return(
        <>
        <Link to='/' className="btn btn-dark"
        style={{marginTop:"1rem"}}>Go Back</Link>

        <Row className="text-center">
            <Col>
               <h4>Check your results here...</h4>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col></Col>
            <Col style={{marginLeft:"-61.5rem"}}></Col>
            <Col>
            <Form>
                <label>Enter your Register No:</label><br/> 
                <input type="text" placeholder="Enter your register no."
                style={{width:"70%"}}/><br/>
                <Button type="submit" style={{marginTop:"1rem"}}>Submit</Button>
            </Form>
            </Col>
        </Row>

        </>
    )
}
export default ResultLoginPage;