def is_isogram(str)
  word = str.split('')

  word.each_cons(2) do |element,next_element|
    if element == next_element
      puts false
    else
      puts true
    end
  end
end

is_isogram("hatdoga")

arr = [1,2,3, "hatdog"]



for i in arr
  puts i
end