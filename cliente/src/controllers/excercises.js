const url = `http://localhost:3001/exercises`;

export const getExercises = async () => {
  const response = await fetch(url);
  const exercises = await response.json();
  return exercises;
}

export const postExercises = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const newExercises = await response.json();
  return newExercises;
}

export const deleteExercises = async (id) => {
  const response = await fetch((`${url}/${id}`), {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const restExercises = await response.json();
  return restExercises;
}