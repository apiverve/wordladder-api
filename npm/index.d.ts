declare module '@apiverve/wordladder' {
  export interface wordladderOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface wordladderResponse {
    status: string;
    error: string | null;
    data: WordLadderGeneratorData;
    code?: number;
  }


  interface WordLadderGeneratorData {
      puzzles:    Puzzle[];
      count:      number;
      difficulty: string;
      html:       string;
  }
  
  interface Puzzle {
      startWord:  string;
      endWord:    string;
      steps:      number;
      solution:   string[];
      solvable:   boolean;
      difficulty: string;
      hint:       string;
  }

  export default class wordladderWrapper {
    constructor(options: wordladderOptions);

    execute(callback: (error: any, data: wordladderResponse | null) => void): Promise<wordladderResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: wordladderResponse | null) => void): Promise<wordladderResponse>;
    execute(query?: Record<string, any>): Promise<wordladderResponse>;
  }
}
