import React from 'react';

import getEmoji from '../../utils/getEmoji';

const PetList = ({ checkIn, checkOut, pets }) => (
  <ul>
    {pets.map(pet => (
      <li key={pet.id}>
        <h2>{`${getEmoji({ name: pet.category })} ${pet.name}`}</h2>
        <div>{`${pet.category} - Peso: ${pet.weight}`}</div>
        <div>{pet.id}</div>
        <div>{pet.status}</div>
        {pet.status === 'AVAILABLE' && (
          <button className="btn btn-primary" onClick={() => checkOut({ id: pet.id })}>Check out &raquo;</button>
        )}
        {pet.status === 'CHECKEDOUT' && (
          <button className="btn btn-success" onClick={() => checkIn({ id: pet.id })}>Check in &laquo;</button>
        )}
      </li>
    ))}
  </ul>
);

export default PetList;
