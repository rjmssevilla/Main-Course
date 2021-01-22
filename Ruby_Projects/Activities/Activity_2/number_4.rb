arr = [6,3,1,8,4,2,10,65,102]
new_Arr = []

arr.each do |index|
  if (index % 2 == 0)
    new_Arr << item
  end
end

puts new_Arr