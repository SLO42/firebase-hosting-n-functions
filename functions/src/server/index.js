import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';

function expressServer(app, router){
    app = app || express();
    router = router || express.Router();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    app.use('/', routes.main);
    app.use('/command=auth', routes.auth);
    app.use('/command=get', routes.get);

}

export default expressServer;