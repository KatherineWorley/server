require 'sinatra'

get '/' do 
	File.read(File.join('public', 'hello.txt'))	
end

get '/' do
  "Hello Wyncode!"
end

get '/wyncode' do
  "Hello World/wyncode"
end