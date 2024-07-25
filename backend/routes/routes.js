import express, { Router } from 'express';
import {display} from '../controllers/oauth.js'

const router=express.Router();

router.route('/display').get(display);

export default router;