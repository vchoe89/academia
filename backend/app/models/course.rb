class Course < ApplicationRecord
  has_many :reviews
  belongs_to :category
  belongs_to :instructor, class_name: 'User'

  def own_review(id)
    self.reviews.find do |review|
      review.customer_id == id
    end


  end
end
