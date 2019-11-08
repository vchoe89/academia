Rails.application.routes.draw do
  resources :categories
  resources :reviews
  resources :courses
  resources :users



  post '/users', to: 'users#fake_create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
