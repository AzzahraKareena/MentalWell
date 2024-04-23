// import React from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom/cjs/react-router-dom.min.js";
// import Footer from "../landing/Footer.js";
// import Navbar from "../landing/Navbar.js";
// import detail1 from "../images/dass42-detail1.png"; // Import gambar
// import detail2 from "../images/dass42-detail2.png"; // Import gambar
// import DASS42 from "../images/dass42-tes.png"; // Import gambar

// const DASS42Detail = () => {

//   return (
//     <div>
//       <Navbar />
//       <section id="psikolog-list" className="section before-content" style={{ backgroundColor: "#C4EAF4", color: "#141313", fontFamily: "Abril Fatface", marginTop: "-140px", paddingTop: "200px" }}>
//       <Col md={12} className="d-flex align-items-center justify-content-center">
//         <div className="container text-left ">
//           <h6 className="section-title mb-2 tfonts">DASS42-Test</h6>
//           <h6 className="subtitle" style={{ fontSize: "28px" }}>Depression, Anxiety, Stress Scale (DASS) 42 <br></br>adalah kuesioner psikologi yang 
//           memetakan tiga faktor psikologis, yakni depresi, kecemasan, dan stress. 
//           Kuesioner ini terdiri atas 42 pertanyaan dan telah diuji validitas dan reliabilitasnya</h6> <br></br><br></br><br></br>
//         </div>
//         <img src={DASS42} alt="Logo" style={{ width: "500px", height: "500px", maxWidth: "100%", maxHeight: "100%" }} /> {/* Panggil gambar dengan variabel */}
//       </Col>
//       </section>
//       <hr></hr>
//       <hr></hr>
//       <Container className="my-5">
//         <Row className="justify-content-center">
//         <Col md={4} className="d-flex align-items-center justify-content-center">
//             <img src={detail1} alt="Image" style={{ maxWidth: "100%", maxHeight: "100%" }} /> {/* Panggil gambar dengan variabel */}
//           </Col>
//           <Col md={8}>
//                 <p style={{ fontSize: "25px" }}><br></br>Penggunaan DASS42 dapat digunakan dalam berbagai konteks, seperti dalam penelitian ilmiah, penilaian kesehatan mental 
//                 dalam lingkungan kerja, evaluasi kesehatan mental sebelum pelayanan medis tertentu, dan sebagainya.<br></br><br></br></p>
//           </Col>        
//         </Row>
//       </Container>
//       <hr></hr>
//       <hr></hr>
//       <Container className="my-5">
//         <Row className="justify-content-center">
//         <Col md={4} className="d-flex align-items-center justify-content-center">
//             <img src={detail2} alt="Image" style={{ maxWidth: "100%", maxHeight: "100%" }} /> {/* Panggil gambar dengan variabel */}
//           </Col>
//           <Col md={8}>
//                 <p style={{ fontSize: "25px" }}><br></br>DASS42 tidak dapat menggantikan diagnosis dari psikiater atau psikolog klinis, namun dapat digunakan sebagai alat bantu dalam menilai 
//                 tingkat depresi, kecemasan, dan stres seseorang untuk mengarahkan tindakan lebih lanjut atau rujukan yang tepat.</p>
//           </Col>
//         </Row>
//       </Container>
//       <Container className="my-5">
//             <Col md={14}>
//             <p style={{ fontSize: "25px", textAlign: "justify" }}>
//                 <br></br>Skala jawaban DASS42 meliputi skala 0 hingga 3 untuk setiap pertanyaan, dengan penjelasan sebagai berikut: 
//                 <br></br><br></br>0: Tidak ada gejala
//                 <br></br>1: Terkadang
//                 <br></br>2: Sering
//                 <br></br>3: Selalu
//                 <br></br><br></br>Hasil akhir dari pengisian kuesioner DASS42 akan memberikan gambaran tentang tingkat depresi, kecemasan, dan stres yang dialami oleh responden.
//             </p>
//             </Col>
//         </Container>

      
//       <Container className="my-6">
//         <Row className="justify-content-center">
//           <Col md={14}>
//             <Card className="about-us-card" style={{ backgroundColor: "#FFD2DD"}}>
//               <Card.Body>
//               <h5  style={{ fontSize: "30px", color:"#25B7D3", fontWeight:"bold" }}>Petunjuk Tes :<br></br></h5>
//                 <p style={{ fontSize: "25px" }}><br></br>1. Metode: diisi sendiri (rahasia).<br></br>
//                 2. Jawablah semua pertanyaan sesuai dengan kondisi saat ini yang anda alami atau rasakan selama 7 hari terakhir.
//                 <br></br>3. Setiap pertanyaan memiliki skala jawaban dari 0 hingga 3.
//                 <br></br>4. Pilihlah jawaban yang paling sesuai dengan kondisi Anda dalam 7 hari terakhir.
//                 <br></br>5. Setelah selesai menjawab semua pertanyaan, klik Lihat Hasil Tes untuk melihat hasilnya.
//                 <br></br>Selamat Mengerjakan!
//                 </p>
//               </Card.Body>
//             </Card>
//           </Col>
          
//         </Row>
//       </Container>
//       <Container>
      
//       <Col md={14} className="text-center">
//           <Link to="/dass42kategori-user">
//             <Button variant="light" style={{ backgroundColor: "#25B7D3", borderColor: "#25B7D3", color: "white", fontWeight: "bold" }} >Mulai Tes DASS42</Button>
//           </Link>
//         </Col>
//         </Container>
//         <hr></hr>
//       <Footer />
//     </div>
//   );
// };

// export default DASS42Detail;
