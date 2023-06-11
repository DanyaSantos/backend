const express = require('express')
const router = express.Router()
const {getTareas,setTarea,updateTarea,deleteTarea} = require('../controllers/tareasControllers.js')
const {protect} = require('../middleware/authMiddleware.js')

router.route('/').get(protect, getTareas).post(protect, setTarea)
//router.get('/', getTareas)
//router.post('/',setTarea)
router.route('/:id').delete(protect, deleteTarea).put(protect, updateTarea)
//router.put('/:id',updateTarea)
//router.delete('/:id',deleteTarea)


module.exports = router