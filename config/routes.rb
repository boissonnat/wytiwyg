Rails.application.routes.draw do

  devise_for :users

  resources :documents

  post '/parse_markdown', to: 'parse_markdown#index'

  # Root of the application => /
  root 'home#index'


end
