import express, {Router} from 'express';
import addUser from '../controllers/adduser';
import login from '../controllers/loginuser';
const router  = express.Router();


router.post('/addUser', addUser);
router.post('/userLogin', login);



export default router;