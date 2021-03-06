import { ChallengeRepository } from '../repository/challenge.repository';
import { Challenge } from '../models/challenge';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les post doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class ChallengeService {

    // Make service => singletonTransformation de notre service en singleton
    private static instance: ChallengeService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new ChallengeService();
        }
        return this.instance;
    }

    // Un singleton est une class ayant une instance unique a travers toute l'app
    private repository: ChallengeRepository;
    private constructor() {
        this.repository = ChallengeRepository.getInstance();
    }

    // Business logic

    /**
     * Return a promise which contains an array of posts.
     */
    getAll(): Promise<Challenge[]> {
        return this.repository.findAll();
    }

    /**
     * Return a promise which contains the post relative to the id in parameter.
     * @param id post id
     */
    getById(id: number): Promise<Challenge> {
        return this.repository.findById(id);
    }

    /**
     * Create a new post and return a promise which contains the created post.
     * @param post post to create
     */
    create(challenge: any): Promise<Challenge> {
      return this.repository.insert(challenge);
    }

    /**
     * Update the post in parameter and return a promise which contains the updated post.
     * @param post post to update
     */
    update(challenge: any, id : number): Promise<Challenge> {
      return this.repository.update(challenge, id);
    }

    /**
     * Delete the post related to the id in parameter. Return an empty promise.
     * @param id post id
     */
    delete(id: number): Promise<any> {
      return this.repository.delete(id);
    }
}
