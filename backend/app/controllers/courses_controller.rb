class CoursesController < ApplicationController

  def index
    courses = Course.all
    # render json: courses
    render json: courses.to_json(courses_serializer)
  end

  def create
    course = Course.create(course_params)
    render json: course
  end


  def courses_serializer
    {
      :except => [:created_at, :updated_at],
      :include => {:instructor => {
        :except => [:created_at, :updated_at],
        },
        :category => {
          :except => [:created_at, :updated_at]
          }}

    }
  end


  private

  def course_params
    params.require(:course).permit(:name, :hourly_rate, :category_id, :location, :instructor_id)
  end


end
