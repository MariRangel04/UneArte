import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import commentRoutes from './routes/commentRoutes.js';

const app = express();

const uri = "mongodb+srv://root:UneArte24@cluster0.gkrpw.mongodb.net/UneArteDB?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/comment', commentRoutes);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Conectado ao MongoDB com sucesso!");
    app.listen(5000, () => {
      console.log('Servidor rodando na porta 5000');
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  });
