require 'sinatra'
require './lib/snapguide'

get "/api/guide/:uuid" do
  Snapguide.fetch_guide params[:uuid]
end

get "/*" do
  erb :index
end
