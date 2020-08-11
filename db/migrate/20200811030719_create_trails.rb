class CreateTrails < ActiveRecord::Migration[6.0]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :difficulty
      t.integer :travel_time_from_NYC
      t.integer :length
      t.string :trail_image
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
