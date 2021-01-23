arr1 = [34,15,88,2] 
smallest1 = arr1[0]
arr2 = [34,-345,-1,100] 
smallest2 = arr2[0]


arr1.each do |index|
  if index < smallest1
        smallest1 = index
  end
end

arr2.each do |index|
  if index < smallest2
        smallest2 = index
  end
end

puts smallest1
puts smallest2


