export interface DatabaseUser {
  update(email: string, password: string): any;
  get(email : string): Promise<any>;
  insert(doc: any): Promise<any>;
}
