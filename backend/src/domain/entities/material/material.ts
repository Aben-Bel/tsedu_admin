export interface Material{
    id?: string;
    title: string;
    description: string;
    category:string;
    type: string;
    thumbnail?: File;
    book?:File;
    audio?:File;
    video?:File;
}