import express, {Router} from 'express';
import addUser from '../controllers/adduser';
import {login,  getProfile} from '../controllers/loginuser';
import {titleCreate }from '../controllers/titles';
import {logout} from '../controllers/logout';
import { authentication } from '../middleware/auth.moddleware';
const router  = express.Router();


router.post('/addUser', addUser);
router.post('/userLogin', login);
router.get('/userProfile',authentication, getProfile);

router.post('/titleCreate', titleCreate);


router.post('/logout', logout);



export default router;