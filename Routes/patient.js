import {Router} from "express"
import {getmed,categories ,write,main,getemail,login,signup_details,phome,login_details, logoutuser} from "../controllers/patientcontrollers.js"
import router from "./page.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"


const router2=Router()

router2.get('/login',login)
router2.post('/signupdetails',signup_details)
router2.post('/logindetails',login_details)
router2.get('/main',main)
router2.get('/main/consult',categories)
router2.get('/main/consult/:category',verifyJWT,phome)

router2.get('/getemail',verifyJWT,getemail)
router2.post('/logout',verifyJWT,logoutuser)
router2.get('/writeReviews',verifyJWT,write)

router2.get('/getmed',getmed)
export default router2