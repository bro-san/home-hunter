Rails.application.routes.draw do
  
  get 'sessions/create'
  get 'sessions/destroy'
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  resources :realtors, only: [:index, :show, :create]
  resources :home_buyers, only: :index
  resources :requests, only: [:index, :show, :create, :destroy, :updated]
  resources :responses, only: :index

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"
  
end
