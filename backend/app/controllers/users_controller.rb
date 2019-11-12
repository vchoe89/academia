class UsersController < ApplicationController

  def index
    users = User.all
    render json: users.to_json(index_serializer)
  end

  def show
    user = User.find_by(email: params[:id])
    render json: user.to_json(user_serializer), user_id: user.id
  end

  def create
    user = User.find_by(email: params["user"])
    render json: user.to_json(user_serializer)
  end


  def user_serializer
   {
      :except => [:created_at, :updated_at],
      :include => {
        :reviews => {
          :except => [:created_at, :updated_at]
        },
        :booked_courses => {
          :except => [:created_at, :updated_at],
        }
      }
    }
  end

  def index_serializer
    {
       :except => [:created_at, :updated_at],
       :methods => :booked_courses,
       :include => {
         :reviews => {
           :except => [:created_at, :updated_at]
         }
       }
     }
  end

end
