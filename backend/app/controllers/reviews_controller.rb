class ReviewsController < ApplicationController

  def index
    reviews = Review.all
    render json: reviews
  end

  def create

    review = Review.create(review_params)
    
    render json: review.customer.booked_courses.last
  end

  def review_serializer
    {
      :except => [:created_at, :updated_at],
      :include => {:users => {
        :except => [:created_at, :updated_at]
        }}
    }
  end

  private

  def review_params
    params.require(:review).permit(:course_id, :customer_id)
  end

end
