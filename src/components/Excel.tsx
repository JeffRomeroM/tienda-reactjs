import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoogleSheetsComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vQUNCC3-Rf6r6L6vT5POcr4FzPEWsvsc18BB8w5NjuljENGveMoEiLwQ5G6EWQmpMAMIYmVrq9I6Bbo/pubhtml#'
        );

        // Procesa los datos según la estructura de tu hoja de cálculo.
        const rows = response.data.values;
        if (rows && rows.length > 0) {
          const headers = rows[0];
          const rowData = rows.slice(1);

          const formattedData = rowData.map((row) => {
            const obj = {};
            headers.forEach((header, index) => {
              obj[header] = row[index];
            });
            return obj;
          });

          setData(formattedData);
        }
      } catch (error) {
        console.error('Error al obtener datos de Google Sheets', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Google Sheets Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleSheetsComponent;
