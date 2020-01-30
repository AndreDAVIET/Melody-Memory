import { Challenge } from '../models/challenge';
import { MysqlConnection } from './../loaders/mysql';

/**
 * Cette classe est un repository
 * C'est ici qu'on met tout les accès à la bdd
 * Attention, aucune logique javascript ne doit apparaitre ici.
 * Il s'agit seulement de la couche de récupération des données (requeêe sql)
 */
export class StatusRepository {

    private static instance: StatusRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'status';

    static getInstance() {
        if (!this.instance) {
            this.instance = new StatusRepository();
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
    findById(user_id: number) {
        return this.connection.query(`SELECT COUNT(status) AS score FROM ${this.table} WHERE user_id = ?`, [user_id])
          .then((results: any) => (results));
    }


    /**
     * Make a query to the database to insert a new post and return the created post in a promise.
     * @param post post to create
     */
    insertDone(challenge_id: number, user_id : number ) {
      return this.connection.query(
        `INSERT INTO ${this.table} (challenge_id, user_id, status) VALUES (?,?,?)`,
        [challenge_id,  user_id, "1"]
      ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result);
      });
    }

    /**
     * Make a query to the database to update an existing post and return the updated post in a promise.
     * @param post post to update
     */
    update(challenge: Challenge, id : number) {
      return this.connection.query(
        `UPDATE ${this.table} SET name = ?, sequence = ?, melodie = ? WHERE id = ?`,
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
