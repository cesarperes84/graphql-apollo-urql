import React, { useMemo, useState } from 'react';
import { Provider, createClient }from 'urql';

import PetListWrapper from '../components/PetListWrapper';

const initState = {
  user: {
    name: '',
    token: ''
  },
};

function PetLibraryUrql() {
  const [state, setState] = useState(initState);

  const client = createClient({
    url: 'http://pet-library.moonhighway.com/',
    fetchOptions: () => {
      if (state.user.token) {
        return {
          headers: {
            Authorization: `Bearer ${state.user.token}`
          }
        };
      }
      return {};
    },
  });

  function setUser({ name, token }) {
    setState(prevState => ({
      ...prevState,
      user: { ...prevState.user, name, token },
    }));
  };

  const providerValue = useMemo(() => client, [client]);
  return (
    <Provider value={providerValue}>
      <div className="container">
        <h1>Pet Library com urql</h1>
        <PetListWrapper setUser={setUser} user={state.user} />
      </div>
    </Provider>
  );
}

export default PetLibraryUrql;
