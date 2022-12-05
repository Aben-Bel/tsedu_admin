import { Material } from '../../../domain/entities/material/interface/material';
import { MaterialModel } from '../../../domain/entities/material/model/material';
import { QueryI } from '../../../domain/interfaces/use-cases/material/get-all-materials';
import { DatabaseWrapper } from '../../interfaces/database';

export class DB implements DatabaseWrapper {
  get(query: QueryI): Material[] | PromiseLike<Material[]> {
    throw new Error('Method not implemented.');
  }
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

  updateOne(id: String, data: any): Promise<any> {
    for (let i = 0; i < this.materials.length; i++) {
      if (this.materials[i].id == id) {
        console.log('material to be updated: ', this.materials[i]);
        let res: any = {};
        res = { ...this.materials[i], ...data };
        if (data.video) res.video = data.video;
        if (data.audio) res.audio = data.audio;
        if (data.thumbnail) res.thumbnail = data.thumbnail;
        if (data.book) res.book = data.book;
        this.materials[i] = res;
        console.log('material after updated: ', this.materials[i]);
        return Promise.resolve(this.materials[i]);
      }
    }
    return Promise.resolve(null);
  }

  delete(id: string): void {
    for (let i = 0; i < this.materials.length; i++) {
      if (this.materials[i].id == id) {
        this.materials.splice(i, 1);
        return;
      }
    }
  }

  find(query: QueryI): Promise<any[]> {
    const { limit = 5, skip = 0 } = query;
    console.log(limit, skip);
    const start = Math.min(limit * skip, this.materials.length - 1);
    const end = Math.min(limit * skip + limit, this.materials.length);
    return Promise.resolve(this.materials.slice(start, end));
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
