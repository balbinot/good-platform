source "https://rubygems.org"

# GitHub Pages gem — pin to the version GitHub Pages uses
gem "github-pages", group: :jekyll_plugins

# Plugins enabled on GitHub Pages
group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
  gem "jekyll-feed"
end

# Windows / JRuby compatibility (harmless on Linux/macOS)
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Lock to a specific webrick (needed for Ruby 3.x)
gem "webrick", "~> 1.7"
