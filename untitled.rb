require 'httparty'
require 'nokogiri'

url = "https://miami.craigslist.org/search/sof"
response = HTTParty.get url

html = response.body
dom = Nokogiri::HTML(html)
links = dom.css("a.hdrlnk")

i = 1
while i <= 40 
	links.each do |link|
	puts i.to_s + " - " + link.to_str
	puts (link['href'])
	i += 1
	end 
end 