def disemvowel(string)
  string_array = string.split('')
  vowels
  string_array.delete('a')
  string_array.delete('e')
  string_array.delete('i')
  string_array.delete('o')
  string_array.delete('u')
  string_array.delete('A')
  string_array.delete('E')
  string_array.delete('I')
  string_array.delete('O')
  string_array.delete('U')
  return string_array.join
end

string = "This website is for losers LOL!"
puts disemvowel(string)