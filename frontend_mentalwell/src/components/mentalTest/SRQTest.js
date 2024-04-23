import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import Navbar from '../landing/Navbar';
import Footer from '../landing/Footer';

const KuisionerPage = () => {
  const [questions] = useState([
    "Apakah Anda sering merasa sakit kepala?",
    "Apakah Anda kehilangan nafsu makan?",
    "Apakah tidur Anda tidak nyenyak?",
    "Apakah Anda mudah merasa takut?",
    "Apakah Anda merasa cemas, tegang, atau khawatir?",
    "Apakah tangan Anda gemetar?",
    "Apakah Anda mengalami gangguan pencernaan?",
    "Apakah Anda merasa sulit berpikir jernih?",
    "Apakah Anda merasa tidak bahagia?",
    "Apakah Anda lebih sering menangis?",
    "Apakah Anda merasa sulit untuk menikmati aktivitas sehari-hari?",
    "Apakah Anda merasa kesulitan untuk mengambil keputusan?",
    "Apakah aktivitas-tugas sehari-hari Anda terbengkalai?",
    "Apakah Anda merasa tidak mampu berperan dalam kehidupan ini?",
    "Apakah Anda kehilangan minat terhadap banyak hal?",
    "Apakah Anda merasa tidak berharga?",
    "Apakah Anda mempunyai pikiran untuk mengakhiri hidup Anda?",
    "Apakah Anda merasa lelah sepanjang waktu?",
    "Apakah Anda merasa tidak enak di perut?",
    "Apakah Anda mudah lelah?"
  ]);

  const [answers, setAnswers] = useState(new Array(questions.length).fill(null));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [idPartisipan, setIdPartisipan] = useState(null);

  useEffect(() => {
    // Ambil id_partisipan dari localStorage
    const partisipanId = localStorage.getItem('partisipan_id');
    setIdPartisipan(partisipanId);
  }, []);

  const handleAnswer = (index, answer) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = answer;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      // Lakukan pengiriman data jawaban ke backend
      await axios.post('http://localhost:8080/api/jawaban-srq', {
        id_partisipan: idPartisipan, // Gunakan id_partisipan dari localStorage
        jawaban: answers
      });
      console.log('Jawaban berhasil dikirim:', answers);
    } catch (error) {
      console.error('Error submitting answers:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <Navbar />
    <Container>
      <header style={{ backgroundColor: '#FEA503', padding: '10px 0', marginBottom: '20px', color: 'white', textAlign: 'center' }}>
        <h1>Kuisioner</h1>
      </header>
      {questions.map((question, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <p>{index + 1}. {question}</p>
          <div>
            <Button
              variant={answers[index] === 1 ? 'primary' : 'outline-primary'}
              onClick={() => handleAnswer(index, 1)}
              disabled={isSubmitting}
              style={{ marginRight: '10px' }}
            >
              YA
            </Button>
            <Button
              variant={answers[index] === 0 ? 'danger' : 'outline-danger'}
              onClick={() => handleAnswer(index, 0)}
              disabled={isSubmitting}
            >
              TIDAK
            </Button>
          </div>
        </div>
      ))}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button onClick={handleSubmit} disabled={isSubmitting}>Submit</Button>
      </div>
    </Container>
    <Footer />
    </>
  );
};

export default KuisionerPage;
