import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import Navbar from '../landing/Navbar';
import Footer from '../landing/Footer';

const KuisionerPage = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const id_partisipan = localStorage.getItem('partisipan_id'); // Menangkap id_partisipan yang login

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/kuisioner');
        const initialAnswers = {};
        response.data.forEach(question => {
          initialAnswers[question.id_kuesioner] = null;
        });
        setQuestions(response.data);
        setAnswers(initialAnswers);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = async (questionId, answer) => {
    try {
      setIsSubmitting(true);
      // Lakukan pengiriman data jawaban ke backend
      // Gunakan id_partisipan yang telah ditangkap
      await axios.post('http://localhost:8080/api/jawaban', {
        id_partisipan: parseInt(id_partisipan),
        id_kuisioner: questionId,
        jawaban: answer
      });
      console.log('Jawaban berhasil dikirim:', answer);
      // Update state answers dengan jawaban yang dipilih
      setAnswers({ ...answers, [questionId]: answer });
    } catch (error) {
      console.error('Error submitting answer:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <header style={{ backgroundColor: '#FEA503', padding: '10px 0', marginBottom: '20px', color: 'white', textAlign: 'center' }}>
          <h1>Kuisioner Kategori 1</h1>
        </header>
        {questions.map((question, index) => (
          <div key={question.id_kuesioner} style={{ marginBottom: '20px' }}>
            <p>{index + 1}. {question.pertanyaan}</p>
            <div>
              <Button
                variant={answers[question.id_kuesioner] === 'YA' ? 'primary' : 'outline-primary'}
                onClick={() => handleAnswer(question.id_kuesioner, 'YA')}
                disabled={isSubmitting}
                style={{ marginRight: '10px' }}
              >
                YA
              </Button>
              <Button
                variant={answers[question.id_kuesioner] === 'TIDAK' ? 'danger' : 'outline-danger'}
                onClick={() => handleAnswer(question.id_kuesioner, 'TIDAK')}
                disabled={isSubmitting}
              >
                TIDAK
              </Button>
            </div>
          </div>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default KuisionerPage;
