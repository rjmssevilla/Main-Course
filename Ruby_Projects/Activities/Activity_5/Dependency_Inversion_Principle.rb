class Vehicle
  def initialize(model, color)
    @model = model
    @color = color
  end

  def fix(component)
    model.fix(component)
  end
end

class Broken_Window
  def fix(component)
    #fix window
  end
end

class Flat_Tire
  def fix(component)
    #fix tire
  end
end

