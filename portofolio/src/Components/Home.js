import { Button } from "bootstrap";
import { Row, Col, Container } from "react-bootstrap";

const Home = () => {
    return (
        <div className="Home">
            <div style={{ textAlign: "center" }}>

            <img src={"anggi.jpeg"} className="Fotoku" alt="logo" />
                <h1> Anggi Mustika Sari</h1>
                <p> (Web Developer)</p>


                <br></br>
                <hr></hr>
                <div className="overview ">

              
                    <h2> overview</h2>
                    <p>  Hi, saya adalah web developer yang berdomisisli di Lampung Selatan.
                        Saat ini sedang belajar HTML di Politeknik Negeri Lampung.</p>
                </div>
                <div className="Skill">

                    <Container>
                <div className="garis">
                        <Row>
                            <Col>
                            <button>

                                <td>
                                    Skill
                                </td>
                            </button>

                            </Col>
                            <Col>
                            <button>
                                
                                <td>
                                    Pengalaman
                                </td>
                            </button>
                            </Col>
                        </Row>
                        </div>
                        <Row>
                            <Col>
                            <button>


                                <td>
                                    <ul>
                                        <li>HTML (Expert)</li>
                                        <li>CSS (Beginner)</li>
                                        <li>Javascript (Beginner)</li>
                                    </ul>
                                </td>
                                </button>
                            </Col>
                            <Col>
                            <button>

                         
                                <td>
                                    <ul>
                                        <li>Freelancer di Internet</li>
                                        <li>Leaeder Local Linux Community</li>
                                        <li>Leaeder Local Linux Community</li>
                                    </ul>
                                </td>
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>

    );
};

export default Home;
