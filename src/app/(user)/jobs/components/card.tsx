"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './table.css'

export function JobsCard() {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    getGridData();
  }, []);

  const getGridData = async () => {
    try {
      const response = await axios.get('https://crafy-server.onrender.com/works');
      setGridData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id:any) => {
    try {
      await axios.delete(`https://crafy-server.onrender.com/works/${id}`);
      // After deletion, you might want to refresh the grid data
      getGridData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const bindGridData = () => {
    return gridData.map((item:any, index) => (
      <tr key={index} style={{ backgroundColor: `${index % 2 === 0 ? 'white' : ''}` }}>
        <td>{index + 1}</td>
        <td className='text-align-center'>{item.url}</td>
        <td className='text-align-right'>{item.title}</td>
        <td className='text-align-right'>{item.dateandTime}</td>
        <td className='text-align-right'>
          <button className='edit-button'>
            <a href={item.image} download>Download</a>
          </button>
        </td>
        <td className='text-align-right'>
          <button className='delete-button' onClick={() => handleDelete(item._id)}>Delete</button>
        </td>
      </tr>
    ));
  };

  return (
    <div className='parent-container'>
      <table style={{ width: "100%" }} className='table-container'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>File name</th>
            <th>Customer Name</th>
            <th>Date and time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {gridData && bindGridData()}
        </tbody>
      </table>
    </div>
  );
}
