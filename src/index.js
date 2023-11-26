//dejar el dotenv porque hay veces que da error
import dotenv from "dotenv/config";
//el que arranca la aplicacion
import app from './app.js'

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
  console.log(`Server running on port http://localhost:${PORT}`);
})
