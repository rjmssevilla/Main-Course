module CupcakeFrosting
  def applyFrost
    puts "Applying frosting"
    end
end

class Confection
  
end

class Cupcake < Confection
  include CupcakeFrosting
  def prepare
  puts "Baking at 350 degrees for 25 minutes"
  end
end

class BananaCake < Confection
  def prepare
    puts "Baking at 350 degrees for 25 minutes"
    end
end

brownie = Cupcake.new
saging = BananaCake.new
brownie.prepare
brownie.applyFrost
saging.prepare