class BMI
  def initialize(mass,height)
    @mass = mass
    @height = height
  end

  def computeBMI
    getMass / getHeight
  end

  private

  def getMass
    @mass
  end

  def getHeight
    @height*@height
  end
end

rio = BMI.new(61,1.6)
puts rio.computeBMI