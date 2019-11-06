import React from 'react';
import { useQuery } from 'urql';

import Script from '../Script';

const ScriptWrapper = () => {
  const [result] = useQuery({
    query: `{
      scriptsByIdAndProductId(scriptId: "0418", productId: 28982) {
        date
        director
        frontName
        id
        status
        scenes {
          id
          number
          scriptPosition
          summary
        }
      }
    }`,
  });
  const { fetching, data } = result;

  return fetching
    ? <div>Carregando...</div>
    : <Script script={data.scriptsByIdAndProductId} />
};

export default ScriptWrapper;
