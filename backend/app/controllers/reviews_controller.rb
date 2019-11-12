class ReviewsController < ApplicationController

  def index
    reviews = Review.all
    render json: reviews
  end




  def review_serializer
    {
      :except => [:created_at, :updated_at],
      :include => {:users => {
        :except => [:created_at, :updated_at]
        }}
    }
  end

end
