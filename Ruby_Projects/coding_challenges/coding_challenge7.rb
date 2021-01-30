def centuryFromYear(year)
  if(year <=0)
    return "Year must be above 0"
elsif(year <=100)
    return 1
elsif(year % 100 == 0)
  return (year/100)
else
  return (year/100+1)
end
end

puts centuryFromYear(-1)
puts centuryFromYear(0)
puts centuryFromYear(1)
puts centuryFromYear(1705)
puts centuryFromYear(1900)
puts centuryFromYear(1601)
puts centuryFromYear(2000)