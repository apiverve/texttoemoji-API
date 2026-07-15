declare module '@apiverve/texttoemoji' {
  export interface texttoemojiOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface texttoemojiResponse {
    status: string;
    error: string | null;
    data: TexttoEmojiData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface TexttoEmojiData {
      emojis: (null | string)[];
  }

  export default class texttoemojiWrapper {
    constructor(options: texttoemojiOptions);

    execute(callback: (error: any, data: texttoemojiResponse | null) => void): Promise<texttoemojiResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: texttoemojiResponse | null) => void): Promise<texttoemojiResponse>;
    execute(query?: Record<string, any>): Promise<texttoemojiResponse>;
  }
}
