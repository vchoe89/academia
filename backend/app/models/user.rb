class User < ApplicationRecord
  include ActiveModel::Serializers::JSON
  has_many :reviews, foreign_key: 'customer_id'
  has_many :courses, foreign_key: 'instructor_id'

  def booked_courses
    self.reviews.map do |review|
      course_hash = JSON.parse(review.course.to_json)
      course_hash["own_review"] = review.course.own_review(self.id)
      course_hash
    end
  end

end
