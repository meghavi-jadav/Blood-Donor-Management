import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
 
const EditDonor = () => {
  const [donor, setDonor] = useState({
    donor_name: '',
    donor_mobile: '',
    donor_blood_group: '',
    donation_date: '',
  });
  const { donorId } = useParams(); // Get donor ID from URL
  const history = useHistory();
 
  // Fetch donor data to pre-fill the form
  useEffect(() => {
fetch(`http://localhost:5000/donors/${donorId}`)
      .then((response) => response.json())
      .then((data) => setDonor(data))
      .catch((error) => console.error('Error fetching donor:', error));
  }, [donorId]);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDonor((prevDonor) => ({
      ...prevDonor,
      [name]: value,
    }));
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
fetch(`http://localhost:5000/donors/${donorId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donor),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Donor updated successfully!');
        history.push('/');
      })
      .catch((error) => console.error('Error updating donor:', error));
  };
 
  return (
    <div>
      <h2>Edit Donor</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="donor_name"
          placeholder="Donor Name"
          value={donor.donor_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="donor_mobile"
          placeholder="Donor Mobile"
          value={donor.donor_mobile}
          onChange={handleChange}
        />
        <input
          type="text"
          name="donor_blood_group"
          placeholder="Blood Group"
          value={donor.donor_blood_group}
          onChange={handleChange}
        />
        <input
          type="date"
          name="donation_date"
          placeholder="Donation Date"
          value={donor.donation_date}
          onChange={handleChange}
        />
        <button type="submit">Update Donor</button>
      </form>
    </div>
  );
};
 
export default EditDonor;