import { Material } from '../../../domain/entities/material/interface/material';
import { MaterialModel } from '../../../domain/entities/material/model/material';
import { DatabaseWrapper } from '../../interfaces/database';

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
