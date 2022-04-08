const {
  Exercise
} = require("../../models/index");


const postExercises = async (req, res) => {

let array = ['Mountain climber', 'Reverse crunch', 'Grounded Russian twist', 'Dead bug', 'Leg raise', 'Abs roll-out', 'Bird-dog', 'Hanging knee raise', 'Dumbbell woodchop', 'Medicine ball crunch', 'Walking plank', 'Flutter kicks', 'Pallof press', 'Hollow body rock', 'Hanging leg raise with split', 'V-sit', 'Dragon flag', 'L-sit', 'Bicycle Crunch'];

  for (let i = 0; i < 5; i++) {

    let random = Math.floor(Math.random() * array.length);
    let name = array[random];
    let sets = Math.floor(Math.random() * 3) + 1;
    let reps = Math.floor(Math.random() * 10) + 1;
    let weight = Math.floor(Math.random() * 100) + 1;
    let rest = Math.floor(Math.random() * 10) + 1;

 
      try{
        
        let newExercise = new Exercise({
          name: name,
          sets: sets,
          reps: reps,
          weight: weight,
          rest: rest
        });
        await newExercise.save();
      }catch(e){
        return res.status(400).send(e)
      }
    }

  try{
    let newExercises = await Exercise.find({});
    return res.send(newExercises);
  }catch(e){
    return res.status(400).send(e)
  }

}

const getExercises = async function (req, res) {
  try {
    let newExercises = await Exercise.find({});
    return res.send(newExercises);
  } catch (e) {
    return res.status(400).send(e)
  }
}

const deleteExercise = async (req, res) => {

  const { id } = req.params;

  try {
    await Exercise.findOneAndDelete({ _id: id });
    let newExercises = await Exercise.find({});
    return res.send(newExercises);
  } catch (e) {
    return res.status(400).send(e)
  }
  
}



  


module.exports = {
  postExercises,
  getExercises,
  deleteExercise
};