import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
 
const DonorCreate = () => {
  const [newDonor, setNewDonor] = useState({
    donor_name: '',
    donor_mobile: '',
    donor_blood_group: '',
    donation_date: '',
  });
  const history = useHistory();
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDonor((prevDonor) => ({
      ...prevDonor,
      [name]: value,
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
fetch('http://localhost:5000/donors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDonor),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Donor added successfully!');
        history.push('/');
      })
      .catch((error) => console.error('Error adding donor:', error));
  };
 
  return (
    <div>
      <h2>Add New Donor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="donor_name"
          placeholder="Donor Name"
          value={newDonor.donor_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="donor_mobile"
          placeholder="Donor Mobile"
          value={newDonor.donor_mobile}
          onChange={handleChange}
        />
        <input
          type="text"
          name="donor_blood_group"
          placeholder="Blood Group"
          value={newDonor.donor_blood_group}
          onChange={handleChange}
        />
        <input
          type="date"
          name="donation_date"
          placeholder="Donation Date"
          value={newDonor.donation_date}
          onChange={handleChange}
        />
        <button type="submit">Add Donor</button>
      </form>
    </div>
  );
};
 
export default DonorCreate;