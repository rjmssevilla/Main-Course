arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
arr2 = []
count = 0;
sum = 0;

arr1.each do |index|
  if index > 0
        count = count + 1
  elsif index < 0
        sum = sum + index
  end
end

arr2 << count
arr2 << sum
puts arr2