class CreateCourses < ActiveRecord::Migration[6.0]
  def change
    create_table :courses do |t|
      t.string :name
      t.integer :hourly_rate
      t.string :location

      t.timestamps
    end
  end
end
