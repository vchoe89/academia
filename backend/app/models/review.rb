class Review < ApplicationRecord
  belongs_to :customer, class_name: 'User'
  belongs_to :course
end
