import express from 'express';
import webhook from './webhook';
const router = express.Router();

router.use('/focus', webhook);

export default router;
