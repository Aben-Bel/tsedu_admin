export interface DatabaseUser {
  get(email : string): Promise<any>;
  insert(doc: any): Promise<any>;
}
