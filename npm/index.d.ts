declare module '@apiverve/texttoemoji' {
  export interface texttoemojiOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface texttoemojiResponse {
    status: string;
    error: string | null;
    data: TexttoEmojiData;
    code?: number;
  }


  interface TexttoEmojiData {
      emojis: string[];
  }

  export default class texttoemojiWrapper {
    constructor(options: texttoemojiOptions);

    execute(callback: (error: any, data: texttoemojiResponse | null) => void): Promise<texttoemojiResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: texttoemojiResponse | null) => void): Promise<texttoemojiResponse>;
    execute(query?: Record<string, any>): Promise<texttoemojiResponse>;
  }
}
