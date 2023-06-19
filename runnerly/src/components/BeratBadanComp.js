import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { firestore, auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const BeratBadanComp = ({ userLevel, onWeightChange }) => {
  const [weight, setWeight] = useState('');
  const [date, setDate] = useState('');
  const [userUID, setUserUID] = useState('');
  const [daysSinceLastInput, setDaysSinceLastInput] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserUID(user.uid);

        // Dapatkan tanggal entri berat badan terakhir
        getLastInputDate(user.uid);
      } else {
        setUserUID('');
      }
    });

    return () => unsubscribe();
  }, []);

  const getLastInputDate = (userUID) => {
    firestore
      .collection('beratBadan')
      .where('userUID', '==', userUID)
      .where('level', '==', userLevel)
      .orderBy('date', 'desc')
      .limit(1)
      .get()
      .then((snapshot) => {
        if (!snapshot.empty) {
          const lastEntry = snapshot.docs[0].data();
          const lastInputDate = lastEntry.date.toDate();
          const today = new Date();
          const differenceInTime = today.getTime() - lastInputDate.getTime();
          const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
          setDaysSinceLastInput(differenceInDays);

          // Set berat badan terakhir menggunakan prop onWeightChange
          onWeightChange && onWeightChange(lastEntry.weight);
        } else {
          setDaysSinceLastInput(null);
        }
      })
      .catch((error) => {
        console.error('Error memeriksa entri berat badan:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userUID) {
      console.error('Error: userUID tidak valid');
      return;
    }

    firestore
      .collection('beratBadan')
      .add({
        userUID,
        weight: parseInt(weight),
        date: new Date(date),
        level: userLevel,
      })
      .then(() => {
        console.log('Berat badan berhasil ditambahkan');
        setWeight('');
        setDate('');
        getLastInputDate(userUID);

        // Mengalihkan ke halaman report sesuai level pengguna
        navigate(`/jaraklari/${userLevel}`);
      })
      .catch((error) => {
        console.error('Error menambahkan berat badan:', error);
      });
  };

  return (
    <div className="mt-5 d-flex justify-content-center">
       <Card style={{ marginTop: '60px', height:'18rem',width: '18rem', marginBottom: '40px', 
                     '@media (max-width: 768px)': { width: '100%' } }}>
        <Card.Body>
        <Card.Title style={{ textAlign:'center',fontSize: '20px', color: 'black', fontWeight: 'bold' }}>
          Input Berat Badan
        </Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="weight">
              <Form.Label style={{ textAlign:'center',fontSize: '14px', color: 'black' }}>
              Berat Badan (dalam kg)
              </Form.Label>
              <Form.Control
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label style={{ textAlign:'center',fontSize: '14px', color: 'black' }}>
                Tanggal</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{marginTop:'20px'}}>
              Submit
            </Button>
          </Form>
          {daysSinceLastInput !== null && (
            <div className="mt-3">
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default BeratBadanComp;
