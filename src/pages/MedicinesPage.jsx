import { useEffect, useState } from "react";

function MedicinesPage() {
  const [medicines, setMedicines] = useState([])

  const fetchMedicines = async () => {
    try {
      const data = await fetch('api.com/medicines')
        .then(response => response.json())

      setMedicines(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMedicines();
  }, [])

  return (
    <>
      <h2>Medicines</h2>
      <ul>
        {medicines.map(medicine => (
          <li key={medicine.id}>{medicine.name} - {medicine.price}</li>
        ))}
      </ul>
    </>
  )
}

export default MedicinesPage;