import { Material } from "../../../domain/entities/material/interface/material";
import { MaterialModel } from "../../../domain/entities/material/model/material";
import { DatabaseWrapper } from "../../interfaces/database";

export class DB implements DatabaseWrapper {
  private materials: Material[] = [];
  private idCount = 0;

  getOne(id: String): Promise<any> {
    for (const m of this.materials) {
      if (m.id == id) {
        return Promise.resolve(m);
      }
    }
    return Promise.resolve(null);
  }

  updateOne(id: String, data: object): Promise<any> {
    for (let i = 0; i < this.materials.length; i++) {
      if (this.materials[i].id == id) {
        this.materials[i] = { ...this.materials[i], ...data };
        return Promise.resolve(this.materials[i]);
      }
    }
    return Promise.resolve(null);
  }

  delete(id: String): void {
    throw new Error('Method not implemented.');
  }

  find(query: object): Promise<any[]> {
    return Promise.resolve(this.materials);
  }

  insertOne(doc: any): Promise<any> {
    doc.id = this.idCount;
    this.idCount += 1;
    const created = new MaterialModel(doc);
    console.log('added to db: ', created);
    this.materials.push(created);
    return Promise.resolve(created);
  }
}
