import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
    if (req.body) {
        if (req.body.email)
        {
            // do firebase stuff, link firebase to cloud for user auth
            // and return to create php session, 
            // https://stackoverflow.com/questions/54796648/how-to-execute-a-google-cloud-function-through-php
        
        }
    }
})

export default router;