import { Material } from '../../../domain/entities/material/interface/material';
import { MaterialModel } from '../../../domain/entities/material/model/material';
import { MaterialDataSource } from '../../../domain/interfaces/data-sources/material/material-data-source';
import { SQLDatabaseWrapper } from '../../interfaces/sql-database-wrapper';

const DB_TABLE = 'materials';

export class PGMaterialDataSource implements MaterialDataSource {
  private db: SQLDatabaseWrapper;
  constructor(db: SQLDatabaseWrapper) {
    this.db = db;
  }
  count(): Number | Promise<Number> {
    throw new Error('Method not implemented.');
  }

  async getOne(id: String): Promise<Material> {
    const dbResponse = await this.db.query(
      `select * from ${DB_TABLE} where id = $1 limit 1`,
      [id]
    );
    const res = dbResponse.rows.map((item: Material) => ({
      id: item.id,
      language: item.language,
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
    console.log('material before: ', material.book);
    const dbResponse = await this.db.query(
      `insert into ${DB_TABLE} (title, language, description, category, type, thumbnail, book, audio, video, videoLink) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) `,
      [
        material.title,
        material.language,
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

    const res = dbResponse.rows.map((item) => new MaterialModel(item))[0];
    console.log('res:', res);
    console.log('material after: ', res?.book);
    return Promise.resolve({} as Material);
  }

  async getAll(): Promise<Material[]> {
    const dbResponse = await this.db.query(`select * from ${DB_TABLE}`);
    const results = dbResponse.rows.map((item) => new MaterialModel(item));
    return Promise.resolve(results);
  }
}
