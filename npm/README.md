# Word Ladder Generator API

Word Ladder Generator creates puzzles where players transform one word into another by changing one letter at a time, with each step forming a valid word.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)
[![npm version](https://img.shields.io/npm/v/@apiverve/wordladder.svg)](https://www.npmjs.com/package/@apiverve/wordladder)

This is a Javascript Wrapper for the [Word Ladder Generator API](https://apiverve.com/marketplace/wordladder?utm_source=npm&utm_medium=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/wordladder
```

Using yarn:
```shell
yarn add @apiverve/wordladder
```

---

## Configuration

Before using the Word Ladder Generator API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=readme)

The Word Ladder Generator API documentation is found here: [https://docs.apiverve.com/ref/wordladder](https://docs.apiverve.com/ref/wordladder?utm_source=npm&utm_medium=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const wordladderAPI = require('@apiverve/wordladder');
const api = new wordladderAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  start: "cold",
  end: "warm",
  difficulty: "medium",
  count: 1,
  image: false
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  start: "cold",
  end: "warm",
  difficulty: "medium",
  count: 1,
  image: false
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  start: "cold",
  end: "warm",
  difficulty: "medium",
  count: 1,
  image: false
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "puzzles": [
      {
        "startWord": "ANIL",
        "endWord": "CUED",
        "steps": 5,
        "solution": [
          "ANIL",
          "ARIL",
          "ARID",
          "IRID",
          "IRED",
          "CRED",
          "CUED"
        ],
        "solvable": true,
        "difficulty": "medium"
      }
    ],
    "count": 1,
    "difficulty": "medium",
    "html": "<html><head><title>Word Ladder</title><style>body {font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;}h1 {text-align: center; color: #4CAF50;}.puzzle {background: #f5f5f5; padding: 25px; margin: 20px 0; border-radius: 10px;}.words {display: flex; justify-content: space-between; align-items: center; margin: 20px 0;}.word {font-size: 28px; font-weight: bold; letter-spacing: 3px; padding: 15px 25px; border-radius: 10px;}.start {background: #4CAF50; color: white;}.end {background: #2196F3; color: white;}.arrow {font-size: 30px; color: #999;}.steps {text-align: center; font-size: 14px; color: #666; margin-bottom: 15px;}.ladder {display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 20px 0;}.rung {width: 150px; height: 40px; border: 2px dashed #ccc; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 18px; letter-spacing: 5px;}.hint {font-size: 13px; color: #888; font-style: italic; margin-top: 10px;}</style></head><body><h1>Word Ladder</h1><p style='text-align:center;'>Change one letter at a time to get from the first word to the last</p><div class='puzzle'><div class='steps'>Puzzle #1 - 5 steps</div><div class='words'><span class='word start'>ANIL</span><span class='arrow'>→</span><span class='word end'>CUED</span></div><div class='ladder'><div class='rung'>_ _ _ _</div><div class='rung'>_ _ _ _</div><div class='rung'>_ _ _ _</div><div class='rung'>_ _ _ _</div><div class='rung'>_ _ _ _</div></div></div></body></html>",
    "image": {
      "imageName": "6f0f9e5e-ce0d-4570-a706-8fc5ccbfc948_wordladder.png",
      "format": ".png",
      "downloadURL": "https://storage.googleapis.com/apiverve/APIData/wordladder/6f0f9e5e-ce0d-4570-a706-8fc5ccbfc948_wordladder.png?GoogleAccessId=635500398038-compute%40developer.gserviceaccount.com&Expires=1766010731&Signature=FQwH%2FqXC0eYHgHqGKfBoEETrcXALoIpkf2z7HCkmYcFu2IgL2uMbCBi22tEsrlY3yOkksRuZ56C2685lLi98CWvgCF1J9UrYaAWjFtLesnHZ0i%2B0SWYIy5wZLWnVq4UrJDLZVrvSe8lh21mQJrduVY8QqV%2FI0sViUlnlndLMFUfhEQedKYAGRtmXjJlpl1YA9A9%2BtJoqRvMm4YStfJyLJmExPQKnPiRoP6EB6%2B8%2F1WUq5vH3%2BWglijVroxaJ%2BJy6kgQ8qTuVX9%2FzFi8R0DDHZtd0IpcTL8EBvNvHnjRPS4lZB%2Bm3k9GCxqGCnsj8pssu6ymtzGNEqA%2BBqAthODekWw%3D%3D",
      "expires": 1766010731681
    }
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=readme), [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=readme), and [Refund Policy](https://apiverve.com/refund?utm_source=npm&utm_medium=readme).

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
