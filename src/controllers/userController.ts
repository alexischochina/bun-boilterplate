import { Elysia } from 'elysia';
import USER from '../models/User';

export const userController = (app: Elysia) => {
    app.get('/user', async () => {
        return USER.find();
    });

    app.get('/user/:id', async (req: { params: { id: any; }; }) => {
        return USER.findById(req.params.id);
    });

    app.post('/user', async (req: { body: any; }) => {
        const postUser = req.body;

        const user = new USER({
            username: postUser.username,
            email: postUser.email,
            password: postUser.password,
        });

        try {
            return await user.save();
        } catch (err) {
            return err;
        }
    });

    app.put('/user/:id', async (req: { params: { id: any; }; body: any; }) => {
        const postUser = req.body;

        const user = new USER({
            username: postUser.username,
            email: postUser.email,
            password: postUser.password,
        });

        try {
            return await USER.findByIdAndUpdate(req.params.id, user);
        } catch (err) {
            return err;
        }
    });

    app.delete('/user/:id', async (req: { params: { id: any; }; }) => {
        try {
            return await USER.findByIdAndDelete(req.params.id);
        } catch (err) {
            return err;
        }
    });
};