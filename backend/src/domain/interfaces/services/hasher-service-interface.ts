export interface HasherI {
  hash(value: string): string;
  compare(plain: string, hashed: string): boolean;
}
