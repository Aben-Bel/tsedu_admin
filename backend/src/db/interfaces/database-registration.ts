import { QueryI } from "../../domain/interfaces/use-cases/material/get-all-materials";

export interface DatabaseRegistration {
  find(query: QueryI): Promise<any[]>;
  insertOne(doc: any): Promise<any>;
}
