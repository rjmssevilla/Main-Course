class Person
  def status(person)
    person.status
  end
end

class Sick
  def status
    puts "I am sick"
  end
end

class Healthy
  def status
    puts "I am healthy"
  end
end

rio = Person.new
sick = Sick.new
healthy = Healthy.new

rio.status(sick)
rio.status(healthy)