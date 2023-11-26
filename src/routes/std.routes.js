import {Router} from "express"
import {home, create, read, edit, drop} from "../controllers/std.controllers.js";




const router = Router()
router.get("/",  home)
router.post("/create", create)
router.get("/read/:id", read)
router.put("/edit/:id", edit)
router.delete("/delete/:id", drop)



export default router;