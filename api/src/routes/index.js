const Router = require('express');
const router = Router();
const {postExercises, getExercises, deleteExercise} = require('./controllers/exercisescreate');

router.post('/exercises', postExercises);
router.get('/exercises', getExercises);
router.delete('/exercises/:id', deleteExercise);
module.exports = router;
