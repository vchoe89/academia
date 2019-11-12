class ChangeRevOption < ActiveRecord::Migration[6.0]
  def change
    change_column :reviews, :content, :string, null: true

  end
end
