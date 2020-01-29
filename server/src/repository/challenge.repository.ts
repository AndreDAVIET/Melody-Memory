import { Challenge } from '../models/challenge';
import { MysqlConnection } from './../loaders/mysql';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class ChallengeRepository {

    private static instance: ChallengeRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'challenge';

    static getInstance() {
        if (!this.instance) {
            this.instance = new ChallengeRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    /**
     * Make a query to the database to retrieve all posts and return it in a promise.
     */
    findAll(): Promise<Challenge[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
          .then((results: any) => {
            return results.map((challenge: any) => new Challenge(challenge));
          });
    }

    /**
     * Make a query to the database to retrieve one post by its id in parameter. 
     * Return the post found in a promise.
     * @param id post id
     */
    findById(id: number): Promise<Challenge> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
          .then((results: any) => new Challenge(results[0]));
    }


    /**
     * Make a query to the database to insert a new post and return the created post in a promise.
     * @param post post to create
     */
    insert(challenge: Challenge) {
      return this.connection.query(
        `INSERT INTO ${this.table} (name, sequence, melodie) VALUES (?,?,?)`,
        [challenge.name, challenge.sequence, challenge.melodie]
      ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
      });
    }

    /**
     * Make a query to the database to update an existing post and return the updated post in a promise.
     * @param post post to update
     */
    update(challenge: Challenge, id : number) {
      return this.connection.query(
        `UPDATE ${this.table} SET name = ?, sequence = ? melodie = ? WHERE id = ?`,
        [challenge.name, challenge.sequence,challenge.melodie, id]
      ).then(() => {
        return this.findById(id);
      });
    }

    /**
     * Make a query to the database to delete an existing post and return an empry promise
     * @param id post id to delete
     */
    delete(id: number): Promise<any> {
      return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}
