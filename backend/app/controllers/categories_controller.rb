class CategoriesController < ApplicationController

  def index
    categories = Category.all
    render json: categories.to_json(categories_serializer)

  end


  def categories_serializer
    {
      :except => [:created_at, :updated_at],
      :include => {:courses => {
        :except => [:created_at, :updated_at]
        }
      }
    }
  end

end
