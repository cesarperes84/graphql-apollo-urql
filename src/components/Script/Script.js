import React from 'react';

import SceneList from '../SceneList';

const Script = ({ script }) => (
  <div className="row mb-5">
    <div className="col-4">
      <div className="card">
        <div className="card-header">
          Roteiro {script.id}
        </div>
        <div className="card-body">
          <p className="card-text">Frente: {script.frontName}</p>
          <p className="card-text">Data: {script.date.split('T')[0]}</p>
          <p className="card-text">Diretor(es): {script.director}</p>
        </div>
      </div>
    </div>
    <div className="col-8">
      <SceneList scenes={script.scenes} />
    </div>
  </div>
);

export default Script;
