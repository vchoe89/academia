class Category < ApplicationRecord
  has_many :courses
  has_many :instructors, foreign_key: 'instuctor_id', source: :users
end
