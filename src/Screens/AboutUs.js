import React from "react";
import {Row,Col} from "react-bootstrap";

const AboutUs = () => {
    return(
        <div>
            <Row>
                <Col>
                   <img src="/images/vision.jpg" className="about-img1"/>
                </Col>
                <Col>
                   <p className="p1-style">
                        <h3>Vision</h3>
                        To become an outstanding Technological University at the cutting edge 
                        of Science and Technology that produces world class Knowledge-
                        delivery, Research, Extension and Leadership in Technology innovation 
                        for Industry and Society.
                        <br/><br/>
                        To become an outstanding Technological University at the cutting edge 
                        of Science and Technology that produces world class Knowledge-
                        delivery, Research, Extension and Leadership in Technology innovation 
                        for Industry and Society.
                   </p>
                </Col>
            </Row>

            <Row>
                <Col>
                  <p className="p2-style">
                        <h3>Mission</h3>
                        To plan the development of technical education,to establish value-based and need-based education 
                        and training in engineering and technology,with a view to generate qualified and competent manpower, 
                        responsive to technological and societal needs.
                        <br/><br/>
                        To plan the development of technical education,to establish value-based and need-based education 
                        and training in engineering and technology,with a view to generate qualified and competent manpower, 
                        responsive to technological and societal needs.
                  </p>
                </Col>
                <Col>
                   <img src="/images/mission.jpg" className="about-img2"/>
                </Col>
            </Row>

            <Row>
                <Col>
                  <img src="/images/mandate.jpg" className="about-img3"/>
                </Col>
                <Col>
                  <p className="p3-style">
                    <h3>Mandate</h3>
                        The Visvesvaraya Technological University has been established by the Government of the Karnataka 
                        in order to Promote planned and sustainable development of technical education consistent with state and national policies.
                        Design need based programs that ensure adequate human resource of the right kind.
                        Establish objective evaluation and certification systems for students,programs and institutions.
                        Collaborate with national and international institutions R&D establishments organizations like AICTE, MHRD, UGC, etc.industry and user agencies.
                        <br/><br/>
                        The Visvesvaraya Technological University has been established by the Government of the Karnataka 
                        in order to Promote planned and sustainable development of technical education consistent with state and national policies.
                        Design need based programs that ensure adequate human resource of the right kind.
                  </p>
                </Col>
            </Row>
        </div>
    )
}
export default AboutUs;