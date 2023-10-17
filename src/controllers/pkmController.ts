import { Elysia } from 'elysia';
import PKM from '../models/Pkm';

export const pkmController = (app: Elysia) => {
    app.get('/pkm', async () => {
        return PKM.find();
    });

    app.get('/pkm/:id', async (req: { params: { id: any; }; }) => {
        return PKM.findById(req.params.id);
    });

    app.post('/pkm', async (req: { body: any; }) => {
        const postPkm = req.body;

        const pkm = new PKM({
            name: postPkm.name,
            type: postPkm.type,
            level: postPkm.level,
        });

        try {
            return await pkm.save();
        } catch (err) {
            return err;
        }
    });

    app.put('/pkm/:id', async (req: { params: { id: any; }; body: any; }) => {
        const postPkm = req.body;

        const pkm = new PKM({
            name: postPkm.name,
            type: postPkm.type,
            level: postPkm.level,
        });

        try {
            return await PKM.findByIdAndUpdate(req.params.id, pkm);
        } catch (err) {
            return err;
        }
    });

    app.delete('/pkm/:id', async (req: { params: { id: any; }; }) => {
        try {
            return await PKM.findByIdAndDelete(req.params.id);
        } catch (err) {
            return err;
        }
    });
};