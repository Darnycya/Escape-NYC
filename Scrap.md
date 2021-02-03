User.create(name: 'Mike Tyson', email: 'boxyouup@gmail.com', password: 'Lisp66', userImage:'https://www.biography.com/.image/t_share/MTE1ODA0OTcxODA5NzM2MjA1/mike-tyson-9512980-2-402.jpg')
User.create(name: 'Jillian Michaels', email: 'girlsrule@gmail.com', password: 'imbetterthanyou23', userImage:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jillian-michaels-attends-hollywood-unites-for-the-5th-news-photo-602420292-1550077441.jpg')
User.create(name: 'Shaun T', email: 'insanity123@gmail.com', password: 'strongbuns43', userImage:'https://magarticles.magzter.com/articles/13294/236690/59a601c2bde51/SHAUN-T-LETS-NOTHING-STOP-HIM.jpg')
User.create(name: 'Joe Wicks', email: 'imsohandsome@gmail.com', password: 'lookatmyabs', userImage:'https://magarticles.magzter.com/articles/13294/236690/59a601c2bde51/SHAUN-T-LETS-NOTHING-STOP-HIM.jpg')
User.create(name: 'Massy Arias', email: 'armslikearias@gmail.com', password: 'buttkicker43', userImage: 'https://static1.squarespace.com/static/53fba539e4b0a52701b62eb4/556606a7e4b03db69572f6fa/5a541cb8652deace1b5c432c/1591383176305/MassyArias_00514e.jpg?format=1500w')


Trail.create(name: 'Breakneck Mountain', difficulty: 'hard', travel_time_from_NYC: 81, length: 6, trail_image: 'https://www.nynjtc.org/sites/default/files/styles/hike_park_destination_page/public/hotw/BreakneckRidgePanorama_EduardoGil2014.jpg?itok=KOE4oHkO')
Trail.create(name: 'Anthonys Nose', difficulty: 'easy', travel_time_from_NYC: 46, length: 4, trail_image: 'https://hikethehudsonvalley.com/wp-content/uploads/2015/05/Spring2014_RWAN_955.jpg')
Trail.create(name: 'Lemon Squeeze', difficulty: 'moderate', travel_time_from_NYC: 51, length: 7, trail_image: 'https://www.scenichudson.org/wp-content/uploads/2019/10/OA_Mohonk-Mt-House-Lemon-Labyrinth_imaginelovinglife.com_-1400x933.jpg')
Trail.create(name: 'Stairway To Heaven', difficulty: 'moderate', travel_time_from_NYC: 69, length: 9, trail_image: 'https://326193.smushcdn.com/137681/wp-content/uploads/2019/12/Pinwheel-Vista-Hero.jpg?lossy=1&strip=1&webp=1')
Trail.create(name: 'Walkway Over The Hudson', difficulty: 'easy', travel_time_from_NYC: 97, length: 10, trail_image: 'https://i.pinimg.com/originals/eb/7f/e1/eb7fe10a2b0b3ce2e25a6dc877bc0545.jpg')
Trail.create(name: 'Storm King', difficulty: 'hard', travel_time_from_NYC: 55, length: 6, trail_image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Storm_King_mountain_as_viewed_from_top_of_Break_Neck_Ridge.JPG')
Trail.create(name: 'Alander Mountain', difficulty: 'moderate', travel_time_from_NYC: 123, length: 8, trail_image: 'https://hikethehudsonvalley.com/wp-content/uploads/2012/03/alander-Banner-2.jpg')
Trail.create(name: 'Bash Bish Falls', difficulty: 'hard', travel_time_from_NYC: 125,length: 3, trail_image: 'https://images.world-of-waterfalls.com/Bash_Bish_Falls_034_09292013.jpg')
Trail.create(name: 'Bebe Hill Fire Tower', difficulty: 'easy', travel_time_from_NYC: 130, length: 2, trail_image: 'https://hikethehudsonvalley.com/wp-content/uploads/2016/08/BeebeHill_0082.jpg')
Trail.create(name: 'Brace Mountain', difficulty: 'hard', travel_time_from_NYC: 118, length: 6, trail_image: 'https://static1.squarespace.com/static/53b6ec86e4b09a1fb529c6b8/53b6ecd6e4b01e06b37baecc/5adff39303ce64ffc8091f91/1524694046817/PB254957.JPG?format=1500w')








source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.3', '>= 6.0.3.2'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 4.1'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.7'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use Active Model has_secure_password
gem 'bcrypt', '~> 3.1.7'

# Use Active Storage variant
# gem 'image_processing', '~> 1.2'

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.4.2', require: false

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'

# Use Json Web Token (JWT) for token based authentication
gem 'jwt'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'listen', '~> 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]




GEM
  remote: https://rubygems.org/
  specs:
    actioncable (6.0.3.4)
      actionpack (= 6.0.3.4)
      nio4r (~> 2.0)
      websocket-driver (>= 0.6.1)
    actionmailbox (6.0.3.4)
      actionpack (= 6.0.3.4)
      activejob (= 6.0.3.4)
      activerecord (= 6.0.3.4)
      activestorage (= 6.0.3.4)
      activesupport (= 6.0.3.4)
      mail (>= 2.7.1)
    actionmailer (6.0.3.4)
      actionpack (= 6.0.3.4)
      actionview (= 6.0.3.4)
      activejob (= 6.0.3.4)
      mail (~> 2.5, >= 2.5.4)
      rails-dom-testing (~> 2.0)
    actionpack (6.0.3.4)
      actionview (= 6.0.3.4)
      activesupport (= 6.0.3.4)
      rack (~> 2.0, >= 2.0.8)
      rack-test (>= 0.6.3)
      rails-dom-testing (~> 2.0)
      rails-html-sanitizer (~> 1.0, >= 1.2.0)
    actiontext (6.0.3.4)
      actionpack (= 6.0.3.4)
      activerecord (= 6.0.3.4)
      activestorage (= 6.0.3.4)
      activesupport (= 6.0.3.4)
      nokogiri (>= 1.8.5)
    actionview (6.0.3.4)
      activesupport (= 6.0.3.4)
      builder (~> 3.1)
      erubi (~> 1.4)
      rails-dom-testing (~> 2.0)
      rails-html-sanitizer (~> 1.1, >= 1.2.0)
    activejob (6.0.3.4)
      activesupport (= 6.0.3.4)
      globalid (>= 0.3.6)
    activemodel (6.0.3.4)
      activesupport (= 6.0.3.4)
    activerecord (6.0.3.4)
      activemodel (= 6.0.3.4)
      activesupport (= 6.0.3.4)
    activestorage (6.0.3.4)
      actionpack (= 6.0.3.4)
      activejob (= 6.0.3.4)
      activerecord (= 6.0.3.4)
      marcel (~> 0.3.1)
    activesupport (6.0.3.4)
      concurrent-ruby (~> 1.0, >= 1.0.2)
      i18n (>= 0.7, < 2)
      minitest (~> 5.1)
      tzinfo (~> 1.1)
      zeitwerk (~> 2.2, >= 2.2.2)
    bcrypt (3.1.16)
    bootsnap (1.7.0)
      msgpack (~> 1.0)
    builder (3.2.4)
    byebug (11.1.3)
    concurrent-ruby (1.1.8)
    crass (1.0.6)
    erubi (1.10.0)
    ffi (1.14.2)
    globalid (0.4.2)
      activesupport (>= 4.2.0)
    i18n (1.8.8)
      concurrent-ruby (~> 1.0)
    jwt (2.2.2)
    listen (3.4.1)
      rb-fsevent (~> 0.10, >= 0.10.3)
      rb-inotify (~> 0.9, >= 0.9.10)
    loofah (2.9.0)
      crass (~> 1.0.2)
      nokogiri (>= 1.5.9)
    mail (2.7.1)
      mini_mime (>= 0.1.1)
    marcel (0.3.3)
      mimemagic (~> 0.3.2)
    method_source (1.0.0)
    mimemagic (0.3.5)
    mini_mime (1.0.2)
    mini_portile2 (2.5.0)
    minitest (5.14.3)
    msgpack (1.4.2)
    nio4r (2.5.4)
    nokogiri (1.11.1)
      mini_portile2 (~> 2.5.0)
      racc (~> 1.4)
    pg (1.2.3)
    puma (4.3.7)
      nio4r (~> 2.0)
    racc (1.5.2)
    rack (2.2.3)
    rack-cors (1.1.1)
      rack (>= 2.0.0)
    rack-test (1.1.0)
      rack (>= 1.0, < 3)
    rails (6.0.3.4)
      actioncable (= 6.0.3.4)
      actionmailbox (= 6.0.3.4)
      actionmailer (= 6.0.3.4)
      actionpack (= 6.0.3.4)
      actiontext (= 6.0.3.4)
      actionview (= 6.0.3.4)
      activejob (= 6.0.3.4)
      activemodel (= 6.0.3.4)
      activerecord (= 6.0.3.4)
      activestorage (= 6.0.3.4)
      activesupport (= 6.0.3.4)
      bundler (>= 1.3.0)
      railties (= 6.0.3.4)
      sprockets-rails (>= 2.0.0)
    rails-dom-testing (2.0.3)
      activesupport (>= 4.2.0)
      nokogiri (>= 1.6)
    rails-html-sanitizer (1.3.0)
      loofah (~> 2.3)
    railties (6.0.3.4)
      actionpack (= 6.0.3.4)
      activesupport (= 6.0.3.4)
      method_source
      rake (>= 0.8.7)
      thor (>= 0.20.3, < 2.0)
    rake (13.0.3)
    rb-fsevent (0.10.4)
    rb-inotify (0.10.1)
      ffi (~> 1.0)
    spring (2.1.1)
    spring-watcher-listen (2.0.1)
      listen (>= 2.7, < 4.0)
      spring (>= 1.2, < 3.0)
    sprockets (4.0.2)
      concurrent-ruby (~> 1.0)
      rack (> 1, < 3)
    sprockets-rails (3.2.2)
      actionpack (>= 4.0)
      activesupport (>= 4.0)
      sprockets (>= 3.0.0)
    thor (1.1.0)
    thread_safe (0.3.6)
    tzinfo (1.2.9)
      thread_safe (~> 0.1)
    websocket-driver (0.7.3)
      websocket-extensions (>= 0.1.0)
    websocket-extensions (0.1.5)
    zeitwerk (2.4.2)

PLATFORMS
  ruby

DEPENDENCIES
  bcrypt (~> 3.1.7)
  bootsnap (>= 1.4.2)
  byebug
  jwt
  listen (~> 3.2)
  pg (>= 0.18, < 2.0)
  puma (~> 4.1)
  rack-cors
  rails (~> 6.0.3, >= 6.0.3.2)
  spring
  spring-watcher-listen (~> 2.0.0)
  tzinfo-data

RUBY VERSION
   ruby 3.0.0

BUNDLED WITH
   2.2.8
