import { Elysia } from 'elysia';
import { connect } from 'mongoose';
import { pkmController } from './controllers/pkmController';

const app = new Elysia();
const port = app.server?.port;

connect('mongodb+srv://alexchoc521:AYNx600ERto5kcLw@cluster0.9olz6al.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true,})
    .then(() => {
        console.log('Connected to database ok');
    })
    .catch((err) => {
        console.log('Cannot connect to database', err);
    });

pkmController(app);

app
    .get('/', () => 'Hello Bun.js!')
    // @ts-ignore
    .listen(port, () => {
        console.log(`🦊 Elysia is running at ${app.server?.hostname}:${port}`);
    });