Rails.application.routes.draw do
  root "playlists#index"
  resources :playlists
  devise_for :users, controllers: { omniauth_callbacks: "callbacks" }
end
