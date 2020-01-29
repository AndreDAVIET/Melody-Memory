import { Challenge } from '../models/challenge';
import { ChallengeService } from '../services/challenge.service';
import express, { Router, Request, Response, Application } from 'express';
import { AuthService } from './../services/auth.service';

/**
 * Ce controller vous servira de modèle pour construire vos différent controller
 * Le controller est la partie de l'application qui est en charge de la reception
 * des requetes http.
 *
 * @param app l'application express
 */
export const ChallengeController = (app: Application) => {

    const router: Router = express.Router();
    const challengeService = ChallengeService.getInstance();
    const authService = AuthService.getInstance();

    router.get('/', (req: Request, res: Response) => {
        challengeService.getAll().then(result => {
              res.send(result);
          })
          .catch(err => {
            console.log(err);
          })
      });
  

    /**
     * Return only one post in JSON relative to its id
     */
     router.get('/:id',  (req: Request, res: Response) => {
      const id = parseInt(req.params.id);
      challengeService.getById(id).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Create a new post from a JSON body and return the created post in JSON.
     */
    router.post('/', (req: Request, res: Response) => {
      const challenge: Challenge = req.body; // Automatically transform in a Challenge Post object

        challengeService.create(challenge).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    });

    /**
     * Update a post relative to its id and return the updated post in JSON.
     */
    router.put('/:id', (req: Request, res: Response) => {
      const challenge: Challenge = req.body; // req.params.id is automatically set into the body
      const id = parseInt(req.params.id);

      challengeService.update(challenge, id).then(result => {
            res.send(result);
        })
        .catch(err => {
          console.log(err);
        })
    }); 

    /**
     * Delete a post relative its id.
     */
     router.delete('/:id', (req: Request, res: Response) => {
      const id = parseInt(req.params.id);

      challengeService.delete(id).then(result => {
            res.send();
        })
        .catch(err => {
          console.log(err);
        })
    });

    app.use('/challenge', router);
};
