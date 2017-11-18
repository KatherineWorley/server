# require 'sinatra'

# get '/' do 
# 	File.read(File.join('public', 'hello.txt'))	
# end

# get '/' do
#   "Hello Wyncode!"
# end

require "httparty"
require "nokogiri"
require 'sinatra'

get '/' do

    p params[:job]
    url = "https://miami.craigslist.org/search/#{params[:job]}"
    response = HTTParty.get url

    dom = Nokogiri::HTML(response.body)

    @info = dom.css('.content').css('.result-row').css('.hdrlnk').map do |a|
       "<p>#{a.text}</p>"
    end
end