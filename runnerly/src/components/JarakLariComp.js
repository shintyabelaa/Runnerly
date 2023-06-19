import React, { useState } from 'react';
import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useLocation, useNavigate } from 'react-router-dom';
import BeratBadanComp from './BeratBadanComp';

// Inisialisasi Firebase
const firebaseConfig = {
  // Konfigurasi Firebase Anda
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();

const JarakLariComp = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [directions, setDirections] = useState(null);
  const [weight, setWeight] = useState(0);
  const [calories, setCalories] = useState(0);
  const [runDate, setRunDate] = useState('');
  const [distanceText, setDistanceText] = useState('');
  const [durationText, setDurationText] = useState('');

  const RUNNING_FACTOR = 1.5;

  const location = useLocation();
  const level = location.pathname.split('/').pop();

  const handleCalculateDistance = async () => {
    const directionsServiceOptions = {
      origin,
      destination,
      travelMode: 'WALKING',
    };

    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(directionsServiceOptions, async (result, status) => {
      if (status === 'OK') {
        setDirections(result);

        const distance = result.routes[0].legs[0].distance.value;
        const duration = result.routes[0].legs[0].duration.value;

        const distanceInKm = distance / 1000;
        const durationInMinutes = duration / 60;

        setDistanceText(`${distanceInKm.toFixed(2)} km`);
        setDurationText(`${durationInMinutes.toFixed(0)} minutes`);

        const caloriesBurned = (distanceInKm * weight * RUNNING_FACTOR).toFixed(1);
        setCalories(caloriesBurned);

        // Simpan data jarak, waktu, dan kalori ke Firestore
        const jarakLariRef = firestore.collection(`jarakLari-${level}`).doc();
        await jarakLariRef.set({
          origin: origin,
          destination: destination,
          distance: `${distanceInKm.toFixed(2)} km`,
          duration: `${durationInMinutes.toFixed(0)} minutes`,
          calories: caloriesBurned,
          runDate: runDate,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          userUID: firebase.auth().currentUser.uid,
          level: level,
        });

        // Simpan data berat badan ke Firestore
        const beratBadanRef = firestore.collection('beratBadan').doc();
        await beratBadanRef.set({
          weight: weight,
          runDate: runDate,
        });
      } else {
        console.log('Directions request failed due to ' + status);
      }
    });
  };

  const handleWeightChange = (weight) => {
    setWeight(weight);
  };

  const handleRunDateChange = (date) => {
    setRunDate(date);
  };

  const navigate = useNavigate();

  const handleViewReport = () => {
    navigate(`/report/${level}`);
  };
  
  return (
    <div>
      <div className="my-6">
        <div className="d-flex justify-content-center mt-5">
          <GoogleMap
            mapContainerStyle={{ width: '80%', height: '500px', marginTop:'50px' }}
            center={{ lat: 0, lng: 0 }}
            zoom={2}
          >
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </div>
        <div className="container mt-5">
        <div className="card" style={{ width: '20%', margin: '0 auto', marginBottom: '20px', '@media (max-width: 768px)': { width: '100%' } }}>
            <div className="card-body" style={{height:'400%'}}>
              <h3 className="mb-4" style={{textAlign:'center',fontSize: '20px', color: 'black', fontWeight: 'bold' }}>Tracking Jarak Lari</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="originInput" className="form-label"style={{ textAlign:'center',fontSize: '14px', color: 'black' }}>
                    Titik Awal
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="originInput"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="destinationInput" className="form-label"style={{ textAlign:'center',fontSize: '14px', color: 'black' }}>
                    Tujuan
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="destinationInput"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="runDateInput" className="form-label"style={{ textAlign:'center',fontSize: '14px', color: 'black' }}>
                    Tanggal Berlari
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="runDateInput"
                    value={runDate}
                    onChange={(e) => handleRunDateChange(e.target.value)}
                  />
                </div>
                <div className="mb-3berat">
                  <BeratBadanComp
                    userLevel={level}
                    onWeightChange={handleWeightChange}
                  />
                </div>
                <div className="d-grid">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleCalculateDistance}
                  >
                    Hitung
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {distanceText && durationText && (
          <div className="d-flex justify-content-center mt-5">
            <div className="card">
              <div className="card-body" style={{height:'400%'}}>
                <h3 className="mb-4" style={{textAlign:'center',fontSize: '20px', color: 'black', fontWeight: 'bold' }}>Hasil Perhitungan</h3>
                <div className="mb-3">
                  <label htmlFor="distanceOutput" className="form-label" style={{ textAlign:'center',fontSize: '14px', color: 'black' }}>
                    Jarak Tempuh
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="distanceOutput"
                    value={distanceText}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="durationOutput" className="form-label"style={{ textAlign:'center',fontSize: '14px', color: 'black' }}>
                    Durasi
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="durationOutput"
                    value={durationText}
                    readOnly
                  />
                </div>
                {weight > 0 && (
                  <div className="mb-3">
                    <label htmlFor="caloriesOutput" className="form-label" style={{ textAlign:'center',fontSize: '14px', color: 'black' }}>
                      Kalori Terbakar
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="caloriesOutput"
                      value={calories}
                      readOnly
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
     </div>
     <div className="d-grid">
        <button type="button" className="btn btn-secondary mt-5" style={{width:'50%', margin:'auto', marginBottom:'20px'}} onClick={handleViewReport}>
          Lihat Laporan
        </button>
      </div>
    </div>
  );
};

export default JarakLariComp;
