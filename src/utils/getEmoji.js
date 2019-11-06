const getEmoji = ({ name }) => {
  const emojis = {
    CAT: '🐱',
    DOG: '🐶',
    RABBIT: '🐰',
    STINGRAY: '🐡',
  };
  return emojis[name];
}

export default getEmoji;
