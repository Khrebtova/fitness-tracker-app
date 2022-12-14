Rails.application.routes.draw do
  resources :user_exercises
  resources :days, only: [:index, :show, :create, :update, :destroy]
  resources :users

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
# Routing logic: fallback requests for React Router.
# get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
