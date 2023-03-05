let idCounter = 10; // el contador comienza en 10 porque queremos que el primer ID sea 11

export const generateID = () => {
  idCounter++;
  return idCounter;
};