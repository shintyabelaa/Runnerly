import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { Card, CardContent } from '@mui/material';

const ReportComp = ({ firebaseApp, userLevel }) => {
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  const [weightData, setWeightData] = useState([]);
  const [distanceData, setDistanceData] = useState([]);
  const [totalDistance, setTotalDistance] = useState(0);
  const [totalDuration, setTotalDuration] = useState('');
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (userLevel === 'beginner' || userLevel === 'intermediate' || userLevel === 'advance') {
          getWeightData(user.uid, userLevel);
        }
        getDistanceData(user.uid, userLevel);
      } else {
        setWeightData([]);
        setDistanceData([]);
      }
    });

    return () => unsubscribe();
  }, [userLevel]);

  const getWeightData = (userUID, level) => {
    const weightRef = collection(firestore, 'beratBadan');
    const q = query(weightRef, where('userUID', '==', userUID), orderBy('date', 'asc'));

    getDocs(q)
      .then((snapshot) => {
        const weights = snapshot.docs.map((doc) => {
          const data = doc.data();

          return {
            date: data.date.toDate(),
            weight: parseFloat(data.weight),
            level: data.level,
          };
        });

        // Filter data berdasarkan level pengguna
        const filteredData = weights.filter((data) => data.level === level);

        setWeightData(filteredData);
      })
      .catch((error) => {
        console.error('Error retrieving weight data:', error);
      });
  };

  const getDistanceData = (userUID, level) => {
    const distanceRef = collection(firestore, `jarakLari-${level}`);
    const q = query(distanceRef, where('userUID', '==', userUID), orderBy('timestamp', 'asc'));

    getDocs(q)
      .then((snapshot) => {
        const distances = snapshot.docs.map((doc) => {
          const data = doc.data();
          const durationMinutes = parseInt(data.duration.replace(' minutes', ''));

          const totalDuration = formatDuration(durationMinutes);

          return {
            date: data.timestamp.toDate(),
            distance: parseFloat(data.distance.replace(' km', '')),
            duration: totalDuration,
            calories: parseFloat(data.calories),
            level: data.level,
          };
        });

        // Filter data berdasarkan level pengguna
        const filteredData = distances.filter((data) => data.level === level);

        setDistanceData(filteredData);

        const totalDistanceSum = filteredData.reduce((total, data) => total + data.distance, 0);
        const totalDurationSum = filteredData.reduce((total, data) => total + parseDurationToMinutes(data.duration), 0);

        const formattedTotalDuration = formatDuration(totalDurationSum);

        const totalCaloriesSum = filteredData.reduce((total, data) => total + data.calories, 0);
        const formattedTotalCalories = totalCaloriesSum.toFixed(1);

        setTotalDistance(totalDistanceSum);
        setTotalDuration(formattedTotalDuration);
        setTotalCalories(formattedTotalCalories);
      })
      .catch((error) => {
        console.error('Error retrieving distance data:', error);
      });
  };

  const parseDurationToMinutes = (duration) => {
    const parts = duration.split(' ');
    const hours = parseInt(parts[0]);
    const minutes = parseInt(parts[2]);
    return hours * 60 + minutes;
  };

  const formatDuration = (minutes) => {
    const totalHours = Math.floor(minutes / 60);
    const totalMinutes = minutes % 60;
    return `${totalHours} jam ${totalMinutes} menit`;
  };

  // Menentukan label berdasarkan level pengguna
  let jarakLariLabel = '';
  if (userLevel === 'beginner') {
    jarakLariLabel = 'Jarak Lari untuk Level Pemula';
  } else if (userLevel === 'intermediate') {
    jarakLariLabel = 'Jarak Lari untuk Level Menengah';
  } else if (userLevel === 'advance') {
    jarakLariLabel = 'Jarak Lari untuk Level Lanjutan';
  }

  return (
    <div style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
      <div>
        <Card style={{ marginBottom: '20px' }}>
          <CardContent>
            <h3>Data Berat Badan</h3>
            {weightData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={weightData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="weight" fill="rgba(54, 162, 235, 0.6)" barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p>Tidak ada data berat badan yang tersedia.</p>
            )}
          </CardContent>
        </Card>
      </div>

      <div>
        <Card>
          <CardContent>
            <h3>{jarakLariLabel}</h3>
            {distanceData.length > 0 ? (
              <div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={distanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="distance" name="Jarak (km)" fill="rgba(54, 162, 235, 0.6)" barSize={20} yAxisId="left" />
                    <Bar dataKey="calories" name="Kalori" fill="rgba(255, 99, 132, 0.6)" barSize={20} yAxisId="right" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <p>Tidak ada data jarak lari yang tersedia.</p>
            )}
          </CardContent>
        </Card>

        <ResponsiveContainer width="100%" height={300}>
        <Card style={{marginTop:'20px'}}>
          <CardContent style={{marginTop:'20px'}}>
            <h3>Data Jarak Lari</h3>
            {distanceData.length > 0 ? (
              <div>
                <p>Total Jarak: {totalDistance} km</p>
                <p>Total Durasi: {totalDuration}</p>
                <p>Total Kalori: {totalCalories} kcal</p>
              </div>
            ) : (
              <p>Tidak ada data jarak lari yang tersedia.</p>
            )}
          </CardContent>
        </Card>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReportComp;
