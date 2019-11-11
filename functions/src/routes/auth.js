import { Router } from 'express';

const router = Router();

router.get('=Authenticate', async (req, res) => {
    if (req.body) console.log(req.body);
    res.send("test");
})

export default router;
