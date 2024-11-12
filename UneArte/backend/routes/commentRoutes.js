import express from "express";
import Comments from './../models/Comment.js';

const router = express.Router();

// Middleware para verificar se o usuário está logado e pegar o userID
const verifyUser = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: "Usuário não autenticado" });
    }
    next();
};

// Rota para criar um novo comentário
router.post('/comentario', verifyUser, async (req, res) => {
    const { comentario, parentId, artigoId } = req.body;
    const userId = req.user.id;  // O ID do usuário é extraído do token

    try {
        const newComment = new Comment({
            comentario,
            parentId: parentId || null,
            artigoId,
            userId,  // Associar o comentário ao usuário autenticado
            data: new Date(),
        });
        await newComment.save();
        res.status(201).json(newComment);  // Envia o comentário criado como resposta
    } catch (error) {
        console.error("Erro ao salvar comentário:", error);
        res.status(500).json({ message: 'Erro ao salvar o comentário' });
    }
});


// Rota para editar um comentário
router.put('/comentario/:commentId', verifyUser, async (req, res) => {
    const { commentId } = req.params;
    const { comentario } = req.body;

    // Verifica se o comentário existe
    const comment = await Comment.findById(commentId);

    if (!comment) {
        return res.status(404).json({ message: 'Comentário não encontrado' });
    }

    // Verifica se o usuário logado é o autor do comentário
    if (comment.userID.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'Você não tem permissão para editar este comentário' });
    }

    // Validação para garantir que o novo comentário não seja vazio
    if (!comentario) {
        return res.status(400).json({ message: "Comentário não pode ser vazio" });
    }

    try {
        // Atualizar o comentário com o novo texto
        comment.comentario = comentario;

        // Salvar as mudanças no banco de dados
        await comment.save();

        // Responder com sucesso
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
        // Encontrar o comentário pelo ID e garantir que o usuário logado é o autor
        const comment = await Comment.findById(commentId);

        if (!comment) {
            return res.status(404).json({ message: 'Comentário não encontrado' });
        }

        if (comment.userID.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Você não tem permissão para deletar este comentário' });
        }

        // Deletar o comentário
        await comment.remove();

        // Resposta com sucesso
        res.status(200).json({ message: 'Comentário deletado com sucesso' });
    } catch (error) {
        console.error("Erro ao deletar comentário:", error);
        res.status(500).json({ message: 'Erro ao deletar comentário' });
    }
});

export default router;
