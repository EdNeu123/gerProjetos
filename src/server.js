const express = require('express');
const app = express();

app.use(express.json());

// Importa as rotas dos controllers
const userRoutes = require('./controllers/userController');
const projectRoutes = require('./controllers/projectController');
const taskRoutes = require('./controllers/taskController');

// Define as rotas da API
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

