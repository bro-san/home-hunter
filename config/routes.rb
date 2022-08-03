Rails.application.routes.draw do
  
  get 'sessions/create'
  get 'sessions/destroy'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :realtors, only: [:create, :show]

  post "/login", to: "sessions#create"

  
end
