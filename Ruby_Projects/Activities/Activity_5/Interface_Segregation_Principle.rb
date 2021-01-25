class User
  def login
    # user can login
  end

  def change_password
    # user can change password
  end
end

class Admin
  def revoke
    @admin.login
    # revoke user access
  end
end