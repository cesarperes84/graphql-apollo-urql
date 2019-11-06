import React, { useEffect, useState } from 'react';

import fetchGraphql from '../utils/fetchGraphql';
import getEmoji from '../utils/getEmoji';

const initState = {
  allPets: [],
  totalPets: null,
};

const query = `
  {
    allPets {
      name
      weight
      category
    }
    totalPets
  }
`;

function VanillaJSView() {
  const [state, setState] = useState(initState);

  useEffect(() => {
    fetchGraphql({ query }).then((data) => setState(data))
  }, []);

  return (
    <div className="container-fluid">
      <h1>Pet library com JavaScript Puro</h1>
      <p>Total: {state.totalPets}</p>
      <ul>
        {state.allPets.map(pet => (
          <li key={pet.name}>
            <h2>{`${getEmoji({ name: pet.category })} ${pet.name}`}</h2>
            <div>Peso: {pet.weight}</div>
            <div>Categoria: {pet.category}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VanillaJSView;
