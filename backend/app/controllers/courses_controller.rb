class CoursesController < ApplicationController

  def index
    courses = Course.all
    # render json: courses
    render json: courses.to_json(courses_serializer)
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


end
