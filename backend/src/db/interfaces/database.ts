import { Material } from '../../domain/entities/material/interface/material';

export interface DatabaseWrapper {
  getOne(id: String): Promise<any>;
  updateOne(id: String, data: object): Promise<any>;
  delete(id: String): void;
  find(query: object): Promise<any[]>;
  insertOne(doc: any): Promise<any>;
}
