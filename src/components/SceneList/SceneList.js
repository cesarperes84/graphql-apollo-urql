import React from 'react';

const SceneList = ({ scenes }) => (
  <ul className="list-group">
    {scenes.map(scene => (
      <li key={scene.id} className="list-group-item">
        <div className="row">
          <div className="col">Posição: {scene.scriptPosition}</div>
          <div className="col">Número: {scene.number}</div>
        </div>
        <div className="font-italic">{scene.summary}</div>
      </li>
    ))}
  </ul>
);

export default SceneList;
