import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send("you did it!");
});

export default router;