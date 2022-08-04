class CreateRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :requests do |t|
      t.belongs_to :home_buyer, null: false, foreign_key: true
      t.boolean :location_specific
      t.integer :location_size
      t.string :comment
      t.string :tag1
      t.string :tag2
      t.string :tag3
      t.string :image

      t.timestamps
    end
  end
end
