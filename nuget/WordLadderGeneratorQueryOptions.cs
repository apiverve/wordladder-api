using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.WordLadderGenerator
{
    /// <summary>
    /// Query options for the Word Ladder Generator API
    /// </summary>
    public class WordLadderGeneratorQueryOptions
    {
        /// <summary>
        /// Starting word (3-6 letters)
        /// </summary>
        [JsonProperty("start")]
        public string Start { get; set; }

        /// <summary>
        /// Ending word (same length as start)
        /// </summary>
        [JsonProperty("end")]
        public string End { get; set; }

        /// <summary>
        /// Difficulty level
        /// </summary>
        [JsonProperty("difficulty")]
        public string Difficulty { get; set; }

        /// <summary>
        /// Number of puzzles
        /// </summary>
        [JsonProperty("count")]
        public string Count { get; set; }
    }
}
