import mongoose, { Document } from "mongoose";
const Schema = mongoose.Schema;

const repoSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    html_url: { type: String },
    description: { type: String },
    created_at: { type: String },
    clone_url: { type: String },
    language: { type: String, required: false }, 
    category: { type: String },
});

export interface RepoInterface extends Document {
    id: Number;
    name: String;
    html_url: String;
    description: String;
    created_at: String;
    clone_url: String;
    language: String; 
    category: String;
}
export default mongoose.model<RepoInterface>('repo', repoSchema);