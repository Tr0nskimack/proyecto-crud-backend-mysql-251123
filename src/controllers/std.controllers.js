import mysql from "mysql";
import dotenv from "dotenv";
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

dotenv.config();
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

export const home = (req, res) => {
  try {
    const sql = "SELECT * FROM estudiante";
    db.query(sql, (err, result) => {
      if (err) return res.json({ Message: "Error interno del servidor" });
      return res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
  /* return res.json({Status: "Peticion OK", nombre: req.nombre}) */
};

export const create = (req, res) => {
  try {
    const sql =
      "INSERT INTO estudiante (`nombre`, `direccion`, `grado`, `seccion`, `telefono`, `edad`, `sexo`, `lateralidad`) VALUES (?)";
    console.log(req.body);
    const values = [
      req.body.nombre,
      req.body.direccion,
      req.body.grado,
      req.body.seccion,
      req.body.telefono,
      req.body.edad,
      req.body.sexo,
      req.body.lateralidad,
    ];
    db.query(sql, [values], (err, result) => {
      if (err) return res.json({ Err: "Error al ingresar los datos" });
      return res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
};


export const read = (req, res) => {
    try {
      const sql = "SELECT * FROM estudiante WHERE id = ?";
      const id = req.params.id
  
      db.query(sql, [id], (err, result) => {
        if (err) return res.json({ Message: "Error interno del servidor" });
        return res.json(result);
      });
      
    } catch (error) {
      console.log(error)
    }
  };

  export const edit = (req, res) => {
    try {
      const sql = "UPDATE estudiante SET `nombre`=?, `direccion`=?, `grado`=?, `seccion`=?, `telefono`=?, `edad`=?, `sexo`=?, `lateralidad`=? where id = ? ";
      const id = req.params.id
      
      db.query(sql, [req.body.nombre, req.body.direccion, req.body.grado, req.body.seccion, req.body.telefono, req.body.edad, req.body.sexo, req.body.lateralidad, id], (err, result) => {
        if (err) return res.json({ Message: "Error interno del servidor" });
        return res.json(result);
      });
      
    } catch (error) {
      console.log(error)
    }
  };

  export const drop = (req, res) => {
    try {
      const sql = "DELETE from estudiante where id = ? ";
      const id = req.params.id
      db.query(sql, [id], (err, result) => {
        if (err) return res.json({ Message: "Error interno del servidor" });
        return res.json(result);
      });
    } catch (error) {
      console.log(error)
    }
    
    
  }
