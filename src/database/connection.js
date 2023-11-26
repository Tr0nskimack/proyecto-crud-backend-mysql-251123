import dotenv from "dotenv";
import mysql from "mysql";

dotenv.config();
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});

//con esta sentencia probamos en consola que se haya establecido una conexion con la base de datos, el comando seria node  node src/database/(nombre de la base de datos)db.query("SELECT 1", (error, results) => {
// Realiza una consulta a la base de datos
db.query("SELECT 1", (error, results) => {
    // Si no hay error, la conexión es exitosa
    if (!error) {
      console.log("Conexión a la base de datos exitosa");
    } else {
      console.log("Error al conectarse a la base de datos:", error);
    }
    
  });
  
  