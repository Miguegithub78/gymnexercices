import React, {useEffect} from 'react';

import { getExercises } from './controllers/excercises';
import { postExercises } from './controllers/excercises';
import { deleteExercises } from './controllers/excercises';

import swal  from 'sweetalert'

import Cards from './component/Cards';

import './App.css';

function App() {
  const [exercises, setExercises] = React.useState([]);

  useEffect( () => {
    const newexercises = async () =>{
      const data = await getExercises();
      setExercises(data);
      return
    }
    newexercises();
  },[]);

  const handleGenerate = async (evt) => {
    evt.preventDefault();
    const data = await postExercises();
    setExercises(data);
  }

  const handleDelete = (evt, id, name) => {
    evt.preventDefault();
    swal({
      title: "Are you sure?",
      text: `Exercise..: ${name} once deleted, you will not be able to recover this imaginary file!`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async (willDelete) => {
      if (willDelete) {
        const data = await deleteExercises(id);
        setExercises(data);
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal(`Exercise ${name} is not delete!`);
      }
    });
    
    
  }

  return (
    <div className="App">
      <button className= 'but' onClick={(evt) => handleGenerate(evt)}>Generate Routine</button> 
      {exercises && exercises.length > 0 &&
        <Cards cards = {exercises} handleDelete = {handleDelete}/>}
    </div>
  );
}

export default App;
