class AddInstructorIdToCourse < ActiveRecord::Migration[6.0]
  def change
    add_column :courses, :instructor_id, :integer
  end
end
