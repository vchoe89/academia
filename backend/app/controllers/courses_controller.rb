class CoursesController < ApplicationController

  def index
    render json: Courses.all
  end


end
