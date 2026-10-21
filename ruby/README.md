# Word Ladder Generator API - Ruby Gem

Word Ladder Generator creates puzzles where players transform one word into another by changing one letter at a time, with each step forming a valid word.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_wordladder'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_wordladder
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_wordladder'

# Initialize the client
client = APIVerve::Wordladder::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({
  start: "cold",
  end: "warm",
  difficulty: "medium",
  count: 1,
  image: true
})

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ start: "cold", end: "warm", difficulty: "medium", count: 1, image: true })
  puts response["data"]
rescue APIVerve::Wordladder::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Wordladder::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Wordladder::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

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

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/wordladder?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/wordladder?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/wordladder?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
