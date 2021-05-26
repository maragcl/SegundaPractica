const router = require('express').Router()

const {
  newEntity,
  getEntities,
  updateEntidad,
  deleteEntity
} = require('../components/entidad/controller')

router.get('/', (req, res) => {
  res.send('Hola, ingrese a api/entities')
})

router.get(
    '/api/entities',
    getEntities
)
  
router.post(
    '/api/entities',
    newEntity
)

router.put(
    '/api/entities',
    updateEntidad
)

router.delete(
    '/api/entities/:id',
    deleteEntity
)

module.exports = router