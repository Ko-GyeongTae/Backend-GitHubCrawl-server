import mongoose from "mongoose";
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    login: {type: String},
    id: { type: Number },
    avatar_url: { type: String },
    html_url: { type: String },
    name: { type: String },
    company: { type: String },
    location: { type: String },
    bio: { type: String },
    created_at: { type: Date },
    updated_at: { type: Date}
});
export default mongoose.model('profile', profileSchema);