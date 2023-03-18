import { Material } from '../../../domain/entities/material/interface/material';
import { MaterialDataSource } from '../../../domain/interfaces/data-sources/material/material-data-source';
import { QueryI } from '../../../domain/interfaces/use-cases/material/get-all-materials';
import mysql from 'mysql';
import { MaterialModel } from '../../../domain/entities/material/model/material';
import fs from 'fs';

export class MySQLMaterialDataSource implements MaterialDataSource {
  private db: mysql.Pool;

  constructor(db: mysql.Pool) {
    this.db = db;
  }

  parseMaterialFromRow(row: any): Material {
    return {
      id: row.id,
      language: row.language,
      title: row.title,
      description: row.description,
      category: row.category,
      type: row.type,
      thumbnail: row.thumbnail,
      book: row.book,
      audio: row.audio,
      video: row.video,
      video_link: row.video_link
    };
  }

  private parseRowToMaterial(row: any): Material {
    const material = new MaterialModel({
      id: row.id.toString(),
      language: row.language,
      title: row.title,
      description: row.description,
      category: row.category,
      type: row.type,
      thumbnail: row.thumbnail, // we don't set this here since we'll set it later in getAll
      book: row.book, // same as above
      audio: row.audio, // same as above
      video: row.video, // same as above
      video_link: row.video_link
    });

    return material;
  }

  async getOne(id: string): Promise<Material | null> {
    return new Promise<Material | null>((resolve, reject) => {
      const query = `SELECT * FROM materials WHERE id = '${id}'`;

      this.db.getConnection((err, connection) => {
        if (err) {
          console.error('Error connecting to database:', err);
        } else {
          console.log('Connected to database');
          // Use the connection to execute queries
          connection.query(query, (error, results) => {
            if (error) {
              console.log('Error executing query');
              reject(error);
            } else if (results.length === 0) {
              resolve(null);
            } else {
              const material = this.parseRowToMaterial(results[0]);
              resolve(material);
            }
            connection.release();
          });
        }
      });
    });
  }

  async getAll(query: QueryI): Promise<Material[]> {
    return new Promise<Material[]>((resolve, reject) => {
      let queryStr = 'SELECT * FROM materials';

      this.db.getConnection((err, connection) => {
        connection.query(queryStr, (error, results) => {
          if (error) {
            reject(error);
          } else {
            const materials = results.map((row: any) => {
              const material = this.parseRowToMaterial(row);
              row.book = row.book
                ? {
                    data: row.book,
                    originalname: material.title + '.pdf'
                  }
                : undefined;
              row.audio = row.audio
                ? {
                    data: undefined,
                    originalname: material.title + '.mp3'
                  }
                : undefined;
              row.video = row.video
                ? {
                    data: undefined,
                    originalname: material.title + '.mp4'
                  }
                : undefined;
              row.thumbnail = row.thumbnail
                ? {
                    data: undefined,
                    originalname: material.title + '.jpg'
                  }
                : undefined;

              if (row.thumbnail) {
                material.thumbnail = row.thumbnail;
              }

              if (row.book) {
                material.book = row.book;
              }

              if (row.audio) {
                material.audio = row.audio;
              }

              if (row.video) {
                material.video = row.video;
              }

              return material;
            });

            resolve(materials);
          }

          connection.release();
        });
      });
    });
  }

  async create(material: any): Promise<Material> {
    return new Promise<Material>((resolve, reject) => {
      this.db.getConnection((err, connection) => {
        const query = `INSERT INTO materials (language, title, description, category, type, thumbnail, book, audio, video, video_link) 
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const values = [
          material.language,
          material.title,
          material.description,
          material.category,
          material.type,
          material.thumbnail ? material.thumbnail.data : undefined,
          material.book ? material.book.data : undefined,
          material.audio ? material.audio.data : undefined,
          material.video ? material.video.data : undefined,
          material.video_link
        ];

        connection.query(query, values, (error, result) => {
          if (error) {
            reject(error);
          } else {
            material.id = result.insertId.toString();
            resolve(material);
          }
          connection.release();
        });
      });
    });
  }

  async updateOne(id: string, data: Material): Promise<Material> {
    return new Promise<Material>((resolve, reject) => {
      this.db.getConnection((err, connection) => {});
      const fieldValues = Object.entries(data)
        .filter(([field, value]) => value !== undefined && field !== 'id')
        .map(([field, value]) => `${field}='${value}'`)
        .join(', ');
      const query = `UPDATE materials SET ${fieldValues} WHERE id='${id}'`;

      this.db.query(query, (error) => {
        if (error) {
          reject(error);
        } else {
          data.id = id;
          resolve(data);
        }
      });
    });
  }

  async deleteOne(id: string) {
    this.db.getConnection((err, connection) => {
      const query = `DELETE FROM materials WHERE id = ?`;
      const values = [id];

      connection.query(query, values, (error, result) => {
        if (error) {
          console.log('Error deleting: ', error.message);
          throw error;
        }

        connection.release();
      });
    });
  }
}
