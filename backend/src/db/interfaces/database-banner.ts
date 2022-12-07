export interface DatabaseBanner {
  get(): Promise<any>;
  delete(): void;
  insert(doc: any): Promise<any>;
}
