//criação de comentário
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    userID: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    comentario: {type: String, required: true, maxlength: 500},
}, {timestamps: true});

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;
