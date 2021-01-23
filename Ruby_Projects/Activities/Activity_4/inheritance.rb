class BMI
  def initialize(mass,height)
    @mass = mass
    @height = height
  end

  def computeBMI
    (@mass /(@height*@height))
  end

  def AnnounceBMI
    puts "Hello, my BMI is #{computeBMI}"
  end
end

class GymInstructor < BMI
  def AnnounceBMI
    puts "My Height is #{@height}, my weight is #{@mass}. Hence, my BMI is #{computeBMI}"
  end
end

rio = BMI.new(61,1.6)
puts rio.AnnounceBMI

john = GymInstructor.new(61,1.6)
puts john.AnnounceBMI