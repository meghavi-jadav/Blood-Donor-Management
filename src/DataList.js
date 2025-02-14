import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
 
const DataList = () => {
  const [donors, setDonors] = useState([]);
 
  // Fetch the donor list
  useEffect(() => {
fetch('http://localhost:5000/donors')
      .then((response) => response.json())
      .then((data) => setDonors(data))
      .catch((error) => console.error('Error fetching donors:', error));
  }, []);
 
  const handleDelete = (donorId) => {
fetch(`http://localhost:5000/donors/${donorId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Remove the donor from the state after deletion
        setDonors(donors.filter((donor) => donor.donor_id !== donorId));
      })
      .catch((error) => console.error('Error deleting donor:', error));
  };
 
  return (
    <div>
      <h1>Donor List</h1>
      <Link to="/create">
        <button>Create New Donor</button>
      </Link>
      <table border="1" cellPadding="10" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Donor ID</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Blood Group</th>
            <th>Donation Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor.donor_id}>
              <td>{donor.donor_id}</td>
              <td>{donor.donor_name}</td>
              <td>{donor.donor_mobile}</td>
              <td>{donor.donor_blood_group}</td>
              <td>{donor.donation_date}</td>
              <td>
                <Link to={`/edit/${donor.donor_id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(donor.donor_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
 
export default DataList;