import { Router } from 'express';

const router = Router();

router.get('', async (req, res) => {
    console.log("auth : get request");
    return res.send("start of auth post");
})

router.post('', (req, res) => {
    console.log('req.body');
    Object.keys(req.body).map(key => {
        console.log(key);
        console.log(req.body[key]);
    })
    console.log('^req.body^');
    res.send("testing");
});

export default router;