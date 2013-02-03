source 'http://rubygems.org'

gem 'rails', '~> 3.2.11'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails', "  ~> 3.2.0"
  gem 'uglifier'
  gem 'compass-rails'
  gem 'ejs'
end

gem 'jquery-rails'

gem 'devise', "~> 2.0.5"
gem 'transitions', '0.0.9', :require => ["transitions", "active_record/transitions"]
gem 'i18n-js'
gem 'configuration'

gem 'fastercsv', '1.5.3', :platforms => :ruby_18
# (using standard csv lib if ruby version is 1.9)

group :production do
  gem 'pg'
end

group :development, :test do
  case ENV['DB']
  when 'mysql'
    gem 'mysql2'
  when 'sqlite'
    gem 'sqlite3'
  when 'postgresql'
    gem 'pg'
  else
    gem 'mysql2'
  end
  gem 'rspec-rails'
  gem 'factory_girl_rails', '1.7.0'
  gem 'jasmine', '1.1.0'
  gem 'capybara'
  gem 'capybara-webkit'
  gem 'database_cleaner'
end

if ENV['TRAVIS'] == 'true'
  group :test do
    case ENV['DB']
    when'mysql'
      gem 'mysql2'
    when 'postgresql'
      gem 'pg'
    else
      gem 'sqlite3'
    end
  end   
end
