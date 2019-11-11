import { Router } from 'express';
import indexPage from '../html/main.js';

const router = Router();

router.get('/', (req, res) => res.send(indexPage));

export default router;