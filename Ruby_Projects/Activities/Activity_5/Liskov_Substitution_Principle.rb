class Bird
  def initialize (wings, feet, color)
    @wings = wings
    @feet = feet
    @color = color
  end
  def introduce_bird
    puts "Im a bird and I have wings"
  end
end

class Duck < Bird
  def introduce_duck
    puts "I can't fly"
  end
end

