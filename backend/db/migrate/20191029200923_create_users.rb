class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :address
      t.string :birthday
      t.string :email
      t.string :phone_number
      t.string :profile_image
      t.string :education
      t.string :skills
      t.integer :travel_distance
      t.string :bio

      t.timestamps
    end
  end
end
