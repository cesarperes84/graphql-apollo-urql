const fetchGraphql = ({ query }) => {
  return fetch('http://pet-library.moonhighway.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query })
  })
    .then(r => r.json())
    .then(json => json.data);
}

export default fetchGraphql;
