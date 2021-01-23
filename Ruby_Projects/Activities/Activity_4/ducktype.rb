class Person
  def symptom(person)
    person.symptom
  end
end

class Cough
  def symptom
    puts "I have cough."
  end
end

class Cold
  def symptom
    puts "I have a cold."
  end
end

class NoSmell
  def symptom
    puts "I can't smell."
  end
end

rio = Person.new
cough = Cough.new
cold = Cold.new
smell = NoSmell.new

rio.symptom(cough)
rio.symptom(cold)
rio.symptom(smell)