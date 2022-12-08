export interface API {
  get(query: any): Promise<any[]>;
  getById(id: string): Promise<Object>;
  post(doc: any): Promise<Object>;
  put(id: string, any: any): Promise<Object>;
  delete(id: string): Promise<Boolean>;
}
