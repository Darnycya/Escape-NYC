Rails.application.routes.draw do
  resources :comments
  resources :trails
  resources :users
  # resources :users  do
  # resources :trails  do
  # resources :comments

 
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  put '/comments/:comment_id/trails/:id', to: 'trails#add_comment'
  
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
