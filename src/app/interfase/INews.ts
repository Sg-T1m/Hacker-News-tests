export interface INews{
    by: String;
    descendants?: Number;
    id?: Number;
    kids: string[] | undefined;
    score?: number;
    time: number;
    title: string;
    type?: string;
    url: string;
    text?: string;
}