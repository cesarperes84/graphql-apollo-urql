import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import ErrorMessage from '../comons/Error';
import Loading from '../comons/Loading';

const GET_CURRENT_USER = gql`
query {
  scriptsByIdAndProductId(scriptId: "0418", productId: 28982) {
      id
      productId
      status
      scenes {
          id
          number
      }
  }
}
`;

const Apollo = () => (
  <Query query={GET_CURRENT_USER}>
    {({ data, loading, error }) => {

      if (error) {
        return <ErrorMessage error={error} />;
      }

      const { scriptsByIdAndProductId } = data;
      if (loading || !scriptsByIdAndProductId) {
        return <Loading />;
      }
      return (
        <div>
          <p>Produção: {scriptsByIdAndProductId.productId}</p>
          <p>Roteiro: {scriptsByIdAndProductId.id}</p>
          <p>{scriptsByIdAndProductId.productId}</p>
          {scriptsByIdAndProductId.scenes.map((scene) => (
                  <li key={scene.id}>
                    <p><strong>Cena</strong></p>
                    <p>id: {scene.id}</p>
                    <p>n: {scene.number}</p>
                  </li>
                ))}
        </div>
      );
    }}
  </Query>
);

export default Apollo;
