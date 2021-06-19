import mongoose, { Document } from "mongoose";
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    login: { type: String },
    id: { type: Number },
    avatar_url: { type: String },
    html_url: { type: String },
    name: { type: String },
    company: { type: String },
    location: { type: String },
    email: { type: String },
    bio: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date}
});

export interface ProfileInterface extends Document {
    login: String;
    id: Number;
    avatar_url: String;
    html_url: String;
    name: String;
    company: String;
    location: String;
    bio: String;
    created_at: Date;
    updated_at: Date;
}
export default mongoose.model<ProfileInterface>('profile', profileSchema);