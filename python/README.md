Word Ladder Generator API
============

Word Ladder Generator creates puzzles where players transform one word into another by changing one letter at a time, with each step forming a valid word.

![Build Status](https://img.shields.io/badge/build-passing-green)
![Code Climate](https://img.shields.io/badge/maintainability-B-purple)
![Prod Ready](https://img.shields.io/badge/production-ready-blue)

This is a Python API Wrapper for the [Word Ladder Generator API](https://apiverve.com/marketplace/wordladder?utm_source=pypi&utm_medium=readme)

---

## Installation

Using `pip`:

```bash
pip install apiverve-wordladdergenerator
```

Using `pip3`:

```bash
pip3 install apiverve-wordladdergenerator
```

---

## Configuration

Before using the wordladder API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=pypi&utm_medium=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```python
from apiverve_wordladdergenerator.apiClient import WordladderAPIClient

# Initialize the client with your APIVerve API key
api = WordladderAPIClient("[YOUR_API_KEY]")

query = { "start": "cold", "end": "warm", "difficulty": "medium", "count": 1 }

try:
    # Make the API call
    result = api.execute(query)

    # Print the result
    print(result)
except Exception as e:
    print(f"Error: {e}")
```

---

## Usage

The Word Ladder Generator API documentation is found here: [https://docs.apiverve.com/ref/wordladder](https://docs.apiverve.com/ref/wordladder?utm_source=pypi&utm_medium=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```python
# Import the client module
from apiverve_wordladdergenerator.apiClient import WordladderAPIClient

# Initialize the client with your APIVerve API key
api = WordladderAPIClient("[YOUR_API_KEY]")
```

---

## Perform Request

Using the API client, you can perform requests to the API.

###### Define Query

```python
query = { "start": "cold", "end": "warm", "difficulty": "medium", "count": 1 }
```

###### Simple Request

```python
# Make a request to the API
result = api.execute(query)

# Print the result
print(result)
```

###### Example Response

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

## Error Handling

The API client provides comprehensive error handling through the `WordladderAPIClientError` exception. Here are some examples:

### Basic Error Handling

```python
from apiverve_wordladdergenerator.apiClient import WordladderAPIClient, WordladderAPIClientError

api = WordladderAPIClient("[YOUR_API_KEY]")

query = { "start": "cold", "end": "warm", "difficulty": "medium", "count": 1 }

try:
    result = api.execute(query)
    print("Success!")
    print(result)
except WordladderAPIClientError as e:
    print(f"API Error: {e.message}")
    if e.status_code:
        print(f"Status Code: {e.status_code}")
    if e.response:
        print(f"Response: {e.response}")
```

### Handling Specific Error Types

```python
from apiverve_wordladdergenerator.apiClient import WordladderAPIClient, WordladderAPIClientError

api = WordladderAPIClient("[YOUR_API_KEY]")

query = { "start": "cold", "end": "warm", "difficulty": "medium", "count": 1 }

try:
    result = api.execute(query)

    # Check for successful response
    if result.get('status') == 'success':
        print("Request successful!")
        print(result.get('data'))
    else:
        print(f"API returned an error: {result.get('error')}")

except WordladderAPIClientError as e:
    # Handle API client errors
    if e.status_code == 401:
        print("Unauthorized: Invalid API key")
    elif e.status_code == 429:
        print("Rate limit exceeded")
    elif e.status_code >= 500:
        print("Server error - please try again later")
    else:
        print(f"API error: {e.message}")
except Exception as e:
    # Handle unexpected errors
    print(f"Unexpected error: {str(e)}")
```

### Using Context Manager (Recommended)

The client supports the context manager protocol for automatic resource cleanup:

```python
from apiverve_wordladdergenerator.apiClient import WordladderAPIClient, WordladderAPIClientError

query = { "start": "cold", "end": "warm", "difficulty": "medium", "count": 1 }

# Using context manager ensures proper cleanup
with WordladderAPIClient("[YOUR_API_KEY]") as api:
    try:
        result = api.execute(query)
        print(result)
    except WordladderAPIClientError as e:
        print(f"Error: {e.message}")
# Session is automatically closed here
```

---

## Advanced Features

### Debug Mode

Enable debug logging to see detailed request and response information:

```python
from apiverve_wordladdergenerator.apiClient import WordladderAPIClient

# Enable debug mode
api = WordladderAPIClient("[YOUR_API_KEY]", debug=True)

query = { "start": "cold", "end": "warm", "difficulty": "medium", "count": 1 }

# Debug information will be printed to console
result = api.execute(query)
```

### Manual Session Management

If you need to manually manage the session lifecycle:

```python
from apiverve_wordladdergenerator.apiClient import WordladderAPIClient

api = WordladderAPIClient("[YOUR_API_KEY]")

try:
    query = { "start": "cold", "end": "warm", "difficulty": "medium", "count": 1 }
    result = api.execute(query)
    print(result)
finally:
    # Manually close the session when done
    api.close()
```

---

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=pypi&utm_medium=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=pypi&utm_medium=readme) and all legal documents and agreements.

---

## License
Licensed under the The MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
