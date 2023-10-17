import { Document, Schema, model } from 'mongoose';

export interface IPkm extends Document {
    name: string;
    type: string;
    level: number;
}

const PkmSchema = new Schema<IPkm>({
    name: { type: String, required: true },
    type: { type: String, required: true },
    level: { type: Number, required: true },
});

export default model<IPkm>('Pkm', PkmSchema);