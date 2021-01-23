
class Confection
  def prepare
     "Baking at 350 degrees for 25 minutes."
    end
end

class Cupcake < Confection
  def prepare
    puts super + "Applying frosting" 
  end
end

class BananaCake < Confection
  def prepare
    puts super 
  end
end

brownie = Cupcake.new
saging = BananaCake.new
brownie.prepare
saging.prepare