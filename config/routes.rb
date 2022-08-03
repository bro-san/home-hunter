Rails.application.routes.draw do
  
  get 'sessions/create'
  get 'sessions/destroy'
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :realtors
  resources :home_buyers
  resources :requests
  resources :responses

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"
  
end
