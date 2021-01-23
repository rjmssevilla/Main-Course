class BMI
  def initialize(mass,height)
    @mass = mass
    @height = height
  end

  def computeBMI
    (@mass /(@height*@height))
  end
end

rio = BMI.new(61,1.6)
puts rio.computeBMI