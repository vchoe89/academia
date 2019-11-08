class UsersController < ApplicationController

  def index
    users = User.all
    render json: users.to_json(user_serializer)
  end

  def create

    render json: User.find_by(email: params["user"])
  end


  def user_serializer
    {
      :except => [:created_at, :updated_at],
      :include => {:reviews => {
        :except => [:created_at, :updated_at]
        }
      }
    }
  end

end
