class User < ApplicationRecord
  has_many :reviews, foreign_key: 'customer_id'
  has_many :courses, foreign_key: 'instructor_id'
end
