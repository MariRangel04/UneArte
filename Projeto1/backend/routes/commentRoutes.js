import express from "express";
import Comments from './../models/Comment.js';

const router = express.Router();

const verifyUser = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: "Usuário não autenticado" });
    }
    next();
};

// Rota para criar um novo comentário
router.post('/comentario', verifyUser, async (req, res) => {
    const { comentario, parentId, artigoId } = req.body;
    const userId = req.user.id;  

    try {
        const newComment = new Comment({
            comentario,
            parentId: parentId || null,
            artigoId,
            userId,  
            data: new Date(),
        });
        await newComment.save();
        res.status(201).json(newComment);  
    } catch (error) {
        console.error("Erro ao salvar comentário:", error);
        res.status(500).json({ message: 'Erro ao salvar o comentário' });
    }
});


// Rota para editar um comentário
router.put('/comentario/:commentId', verifyUser, async (req, res) => {
    const { commentId } = req.params;
    const { comentario } = req.body;

    const comment = await Comment.findById(commentId);

    if (!comment) {
        return res.status(404).json({ message: 'Comentário não encontrado' });
    }

    if (comment.userID.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'Você não tem permissão para editar este comentário' });
    }

    if (!comentario) {
        return res.status(400).json({ message: "Comentário não pode ser vazio" });
    }

    try {
        comment.comentario = comentario;

        await comment.save();

        res.status(200).json({ message: 'Comentário atualizado com sucesso', comment: comment });
    } catch (error) {
        console.error("Erro ao editar comentário:", error);
        res.status(500).json({ message: 'Erro ao editar comentário' });
    }
});

// Rota para deletar um comentário
router.delete('/comentario/:commentId', verifyUser, async (req, res) => {
    const { commentId } = req.params;

    try {
        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).json({ message: 'Comentário não encontrado' });
        }

        if (comment.userID.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Você não tem permissão para deletar este comentário' });
        }

        await comment.remove();

        res.status(200).json({ message: 'Comentário deletado com sucesso' });
    } catch (error) {
        console.error("Erro ao deletar comentário:", error);
        res.status(500).json({ message: 'Erro ao deletar comentário' });
    }
});

export default router;
