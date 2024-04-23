import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../landing/Footer.js";
import Navbar from "../landing/Navbar.js";

const KategoriTest = () => {
  const [kategoriTests, setKategoriTests] = useState([]);

  useEffect(() => {
    getKategoriTests();
  }, []);

  const getKategoriTests = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/kategori_test?kategori=dass42");
      setKategoriTests(response.data);
    } catch (error) {
      console.error("Error fetching kategori test:", error);
    }
  };

  return (
    <>
      <Navbar />
      <section id="kategori-test" className="section before-content" style={{ backgroundColor: "#C4EAF4", color: "#141313", fontFamily: "Abril Fatface", marginTop: "-140px", paddingTop: "200px" }}>
        <Col md={16} className="d-flex align-items-center justify-content-center">
          <div className="container text-center">
            <h6 className="section-title mb-2 tfonts"><br></br>Kategori Test<br></br><br></br></h6>
          </div>
        </Col>
      </section>
      <hr></hr>
      <div className="container mt-5">
        <Row xs={1} md={2} lg={3} className="g-4">
          {kategoriTests.map((kategoriTest) => (
            <Col key={kategoriTest.id_test}>
              <Link to={`/kategoritest/${kategoriTest.id_test}`} className="kategori-test-link">
                <Card className="kategori-test-card" style={{ height: "100%" }}>
                  <Card.Body>
                    <Card.Title className="kategori-test-card-title">{kategoriTest.nama_test}</Card.Title>
                    <Card.Text className="kategori-test-card-deskripsi">
                      {kategoriTest.deskripsi_test}
                    </Card.Text>
                    <Link to={`/kategoritest/${kategoriTest.id_test}`}>
                      <Link variant="primary">Lihat Detail</Link>
                    </Link>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
      </>
  );
};

export default KategoriTest;
