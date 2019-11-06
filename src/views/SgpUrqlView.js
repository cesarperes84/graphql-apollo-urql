import React from 'react';
import { Provider, createClient } from 'urql';

import ScriptWrapper from '../components/ScriptWrapper';

const client = createClient({
  url: 'http://456a5901.ngrok.io/graphql',
});

function SgpUrqlView() {
  return (
    <Provider value={client}>
      <div className="container-fluid">
        <h1>SGP com urql</h1>
        <ScriptWrapper />
      </div>
    </Provider>
  );
}

export default SgpUrqlView;
