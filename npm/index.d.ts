declare module '@apiverve/wordladder' {
  export interface wordladderOptions {
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

  export interface wordladderResponse {
    status: string;
    error: string | null;
    data: WordLadderGeneratorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface WordLadderGeneratorData {
      puzzles:    Puzzle[];
      count:      number | null;
      difficulty: null | string;
      html:       null | string;
      image:      Image;
  }
  
  interface Image {
      imageName:   null | string;
      format:      null | string;
      downloadURL: null | string;
      expires:     number | null;
  }
  
  interface Puzzle {
      startWord:  null | string;
      endWord:    null | string;
      steps:      number | null;
      solution:   (null | string)[];
      solvable:   boolean | null;
      difficulty: null | string;
  }

  export default class wordladderWrapper {
    constructor(options: wordladderOptions);

    execute(callback: (error: any, data: wordladderResponse | null) => void): Promise<wordladderResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: wordladderResponse | null) => void): Promise<wordladderResponse>;
    execute(query?: Record<string, any>): Promise<wordladderResponse>;
  }
}
