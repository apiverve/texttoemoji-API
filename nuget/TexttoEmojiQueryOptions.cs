using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.TexttoEmoji
{
    /// <summary>
    /// Query options for the Text to Emoji API
    /// </summary>
    public class TexttoEmojiQueryOptions
    {
        /// <summary>
        /// The text you want converted into emojis
        /// Example: hello world
        /// </summary>
        [JsonProperty("text")]
        public string Text { get; set; }
    }
}
