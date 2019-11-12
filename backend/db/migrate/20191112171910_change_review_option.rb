class ChangeReviewOption < ActiveRecord::Migration[6.0]
  def change
    change_column :reviews, :content, :string, null: false
  end
end
