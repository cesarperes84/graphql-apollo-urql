import React, { useEffect } from 'react';
import { useMutation, useQuery } from 'urql';

import PetList from '../PetList';

const queryAllPets = `{
  allPets {
    category
    id
    name
    status
    weight
  }
}`;
const queryCheckIn = `
  mutation($id: ID!) {
    checkIn(id: $id) {
      pet {
        id
      }
    }
  }
`;
const queryCheckOut = `
  mutation($id: ID!) {
    checkOut(id: $id) {
      pet {
        id
      }
    }
  }
`;
const queryLogIn = `
  mutation($username: ID!, $password: String!) {
    logIn(username: $username, password: $password) {
      customer {
        name
      }
      token
    }
  }
`;

const PetListWrapper = ({ setUser, user }) => {
  const [resultAllPets] = useQuery({ query: queryAllPets });
  const [resultCheckIn, executeMutationCheckIn] = useMutation(queryCheckIn);
  const [resultCheckOut, executeMutationCheckOut] = useMutation(queryCheckOut);
  const [resultLogin, executeMutationLogin] = useMutation(queryLogIn);

  useEffect(() => {
    executeMutationLogin({ username: "saviomd", password: "12345" });
  }, [executeMutationLogin]);

  useEffect(() => {
    if (resultLogin.data && !user.token) {
      const { customer, token } = resultLogin.data.logIn;
      setUser({ name: customer.name, token });
    }
  }, [resultLogin, setUser, user.token]);

  const { fetching, data } = resultAllPets;
  return fetching
    ? <div>Carregando...</div>
    : (
      <>
        <div className="mb-3 small text-right">{user.name}</div>
        <PetList checkIn={executeMutationCheckIn} checkOut={executeMutationCheckOut} pets={data.allPets} />
      </>
    )
};

export default PetListWrapper;
