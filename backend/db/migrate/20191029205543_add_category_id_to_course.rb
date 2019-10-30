class AddCategoryIdToCourse < ActiveRecord::Migration[6.0]
  def change
    add_column :courses, :category_id, :integer
  end
end
