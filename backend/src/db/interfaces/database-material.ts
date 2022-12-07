import { Material } from '../../domain/entities/material/interface/material';
import { QueryI } from '../../domain/interfaces/use-cases/material/get-all-materials';

export interface DatabaseMaterial {
  getOne(id: String): Promise<any>;
  updateOne(id: String, data: object): Promise<any>;
  delete(id: String): void;
  find(query: QueryI): Promise<any[]>;
  insertOne(doc: any): Promise<any>;
}
