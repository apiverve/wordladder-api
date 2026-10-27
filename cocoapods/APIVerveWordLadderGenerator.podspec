Pod::Spec.new do |s|
  s.name             = 'APIVerveWordLadderGenerator'
  s.version          = '1.2.3'
  s.summary          = 'Word Ladder Generator creates puzzles where players transform one word into another by changing one letter at a time, with each step...'
  s.description      = <<-'DESC'
Word Ladder Generator creates puzzles where players transform one word into another by changing one letter at a time, with each step forming a valid word.

This iOS/macOS SDK provides a convenient way to access the Word Ladder Generator from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/wordladder?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/wordladder-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveWordLadderGenerator/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
