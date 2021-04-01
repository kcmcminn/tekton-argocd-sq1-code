Rails.application.routes.draw do
  get '/groceries/default_list', to: 'groceries#default_list'

  resources :groceries 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
