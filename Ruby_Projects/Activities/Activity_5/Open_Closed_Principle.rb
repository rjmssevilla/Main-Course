class User
  def initialize(username, password)
    @username = username
    @password = password
end

class Admin < User
  def adminAccess
    #admin access
  end
end
