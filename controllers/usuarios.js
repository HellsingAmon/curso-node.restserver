const {response, request} = require('express')


 const usuariosGet = (req, res = response	)  => {

    const {q, nombre = 'No name', apikey} = req.query;
    
    res.json({
        msg: 'get API -- Controlador',
        q,
        nombre,
        apikey

    });
  }

  const usuariospPut = (req, res = response)  => {
      //parseo de parametro unico
    const id = req.params.id;


    res.json({
        msg: 'put API -- Controlador',
        id
    });
  }


  const usuariosPost = (req, res = response)  => {
    //parseo desestructurado
    const {nombre, edad} = req.body;



    res.json({
        msg: 'post API -- Controlador',
        nombre,
        edad
    
    });
  }


  const usuariosDelete = (req, res = response)  => {
    res.json({
        msg: 'delete  API -- Controlador'
    });
  }

  const usuariosPatch = (req, res = response)  => {
    res.json({
        msg: 'patch  API -- Controlador'
    });
  }


module.exports={
    usuariosGet,
    usuariospPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}