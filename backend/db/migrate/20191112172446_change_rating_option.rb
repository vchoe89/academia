class ChangeRatingOption < ActiveRecord::Migration[6.0]
  def change
    change_column :reviews, :rating, :integer, null: false

  end
end
