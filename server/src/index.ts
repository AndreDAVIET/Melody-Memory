import { UsersController } from './controller/users.controller';
import { AuthController } from './controller/auth.controller';
import { PostsController } from './controller/posts.controller';
import { ChallengeController } from './controller/challenge.controller';
import express from 'express';

import loaders from './loaders';
import { StatusController } from './controller/status.controller';



async function startServer() {
  // Récupération de l'application initiale
  const app = express();
  
  // Chargement des différent loader
  await loaders(app);
  
  // Ajout des différentes route de votre application
  AuthController(app);
  PostsController(app);
  UsersController(app);
  ChallengeController(app);
  StatusController(app);

  
    // Démarrage du serveur une fois que tout est correctement init
    app.listen(3000, () => console.log('Express server  is running'));
  }

startServer();
