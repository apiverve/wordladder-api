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
        /// Example: cold
        /// </summary>
        [JsonProperty("start")]
        public string Start { get; set; }

        /// <summary>
        /// Ending word (same length as start)
        /// Example: warm
        /// </summary>
        [JsonProperty("end")]
        public string End { get; set; }

        /// <summary>
        /// Difficulty: easy, medium, hard
        /// Example: medium
        /// </summary>
        [JsonProperty("difficulty")]
        public string Difficulty { get; set; }

        /// <summary>
        /// Number of puzzles (1-5)
        /// Example: 1
        /// </summary>
        [JsonProperty("count")]
        public string Count { get; set; }
    }
}
