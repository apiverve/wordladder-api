# Word Ladder Generator API

Word Ladder Generator creates puzzles where players transform one word into another by changing one letter at a time, with each step forming a valid word.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Javascript Wrapper for the [Word Ladder Generator API](https://apiverve.com/marketplace/wordladder)

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
You can get it by signing up at [https://apiverve.com](https://apiverve.com)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart)

The Word Ladder Generator API documentation is found here: [https://docs.apiverve.com/ref/wordladder](https://docs.apiverve.com/ref/wordladder).
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
  count: 1
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
  count: 1
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
  count: 1
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
        "startWord": "LESS",
        "endWord": "QUAT",
        "steps": 4,
        "solution": [
          "LESS",
          "LEST",
          "BEST",
          "BUST",
          "BUAT",
          "QUAT"
        ],
        "solvable": true,
        "difficulty": "medium",
        "hint": "(a) A pustule. [Obs.] (b) An annoying, worthless person. Sha"
      }
    ],
    "count": 1,
    "difficulty": "medium",
    "html": "<html><head><title>Word Ladder</title><style>body {font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;}h1 {text-align: center; color: #4CAF50;}.puzzle {background: #f5f5f5; padding: 25px; margin: 20px 0; border-radius: 10px;}.words {display: flex; justify-content: space-between; align-items: center; margin: 20px 0;}.word {font-size: 28px; font-weight: bold; letter-spacing: 3px; padding: 15px 25px; border-radius: 10px;}.start {background: #4CAF50; color: white;}.end {background: #2196F3; color: white;}.arrow {font-size: 30px; color: #999;}.steps {text-align: center; font-size: 14px; color: #666; margin-bottom: 15px;}.ladder {display: flex; flex-direction: column; align-items: center; gap: 10px; margin: 20px 0;}.rung {width: 150px; height: 40px; border: 2px dashed #ccc; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-size: 18px; letter-spacing: 5px;}.hint {font-size: 13px; color: #888; font-style: italic; margin-top: 10px;}</style></head><body><h1>Word Ladder</h1><p style='text-align:center;'>Change one letter at a time to get from the first word to the last</p><div class='puzzle'><div class='steps'>Puzzle #1 - 4 steps</div><div class='words'><span class='word start'>LESS</span><span class='arrow'>→</span><span class='word end'>QUAT</span></div><div class='ladder'><div class='rung'>_ _ _ _</div><div class='rung'>_ _ _ _</div><div class='rung'>_ _ _ _</div><div class='rung'>_ _ _ _</div></div><div class='hint'>End word hint: (a) A pustule. [Obs.] (b) An annoying, worthless person. Sha...</div></div></body></html>"
  }
}
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2025 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
