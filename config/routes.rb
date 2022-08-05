Rails.application.routes.draw do
  
  resources :realtors
  resources :home_buyers
  resources :requests
  resources :responses

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
end
