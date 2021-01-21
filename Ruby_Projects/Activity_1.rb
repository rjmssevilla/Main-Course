#Number 1
contact_data = [1,2,3,4,5,6,7,8,9,10]
contact_data.each { |n| puts "Current number is: #{n}" }

#Number 2
h = {a:1, b:2, c:3, d:4}
puts h[:b]
h[:e] = 5
puts h[:e]

# Number 3
contact_data = [
    ["ana@email.com", "123 Main st.", "555-123-4567"],
    ["avion@email.com", "404 Not Found Dr.", "123-234-3454"]
]
                
contacts = {"Analyn Cajocson" => {}, "Avion School" => {}}

contacts["Analyn Cajocson"] = {:email => contact_data[0][0], :address => contact_data[0][1], :phone => contact_data[0][2]} 
contacts["Avion School"] = {:email => contact_data[1][0], :address => contact_data[1][1], :phone => contact_data[1][2]} 
puts contacts

#Number 4
print "How old are you?"
age = gets.to_i

puts "In 10 years, you will be: #{age + 10}" 
puts "In 20 years, you will be: #{age + 20}" 
puts "In 30 years, you will be: #{age + 30}" 
puts "In 40 years, you will be: #{age + 40}"


