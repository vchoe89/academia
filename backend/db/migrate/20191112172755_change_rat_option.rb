class ChangeRatOption < ActiveRecord::Migration[6.0]
  def change
    change_column :reviews, :rating, :integer, null: true

  end
end
