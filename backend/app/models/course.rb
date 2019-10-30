class Course < ApplicationRecord
  has_many :reviews
  belongs_to :category
  belongs_to :instructor, class_name: 'User'
end
