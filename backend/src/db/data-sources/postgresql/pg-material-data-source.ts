import { Material } from '../../../domain/entities/material/interface/material';
import { MaterialDataSource } from '../../../domain/interfaces/data-sources/material/material-data-source';
import { SQLDatabaseWrapper } from '../../interfaces/sql-database-wrapper';

const DB_TABLE = 'material_table';

export class PGMaterialDataSource implements MaterialDataSource {
  private db: SQLDatabaseWrapper;
  constructor(db: SQLDatabaseWrapper) {
    this.db = db;
  }

  async getOne(id: String): Promise<Material> {
    const dbResponse = await this.db.query(
      `select * from ${DB_TABLE} where id = $1 limit 1`,
      [id]
    );
    const res = dbResponse.rows.map((item: Material) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      category: item.category,
      type: item.type,
      thumbnail: item.thumbnail,
      book: item.book,
      audio: item.audio,
      video: item.video,
      videoLink: item.videoLink
    }));

    return res[0];
  }

  async updateOne(id: String, data: Material): Promise<Material> {
    await this.db.query(`update ${DB_TABLE} set name = $1 where id = $2`, [
      data.id
    ]);
    throw new Error('Method not implemented.');
  }

  deleteOne(id: String): void {
    throw new Error('Method not implemented.');
  }

  async create(material: Material): Promise<Material> {
    const dbResponse = await this.db.query(
      `insert into ${DB_TABLE} (title, description, category, type, thumbnail, book, audio, video, videoLink) values ($1,$2,$3) `,
      [
        material.title,
        material.description,
        material.category,
        material.type,
        material.thumbnail,
        material.book,
        material.audio,
        material.video,
        material.videoLink
      ]
    );

    return Promise.resolve(dbResponse.rows.map((item) => ({} as Material))[0]);
  }

  getAll(): Promise<Material[]> {
    throw new Error('Method not implemented.');
  }
}
