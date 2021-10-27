

const {Router} = require('express')

const {usuariosGet, 
  usuariospPut, 
  usuariosPost, 
  usuariosPatch, 
  usuariosDelete} = require('../controllers/usuarios');

const router = Router()


  router.get('/', usuariosGet);

  router.put('/:id',usuariospPut );

  router.post('/',usuariosPost );

  router.patch('/', usuariosPatch);

  router.delete('/', usuariosDelete);




module.exports = router;

