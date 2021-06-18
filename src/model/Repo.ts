import mongoose from "mongoose";
const Schema = mongoose.Schema;

const repoSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    html_url: { type: String },
    description: { type: String },
    created_at: { type: String },
    clone_url: { type: String },
    language: { type: String, nullable: true }, 
});
export default mongoose.model('repo', repoSchema);