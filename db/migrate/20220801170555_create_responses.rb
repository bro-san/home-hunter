class CreateResponses < ActiveRecord::Migration[6.1]
  def change
    create_table :responses do |t|
      t.string :location
      t.integer :price
      t.string :type
      t.string :tag1
      t.string :tag2
      t.string :tag3
      t.string :description
      t.belongs_to :home_buyer, null: false, foreign_key: true
      t.belongs_to :realtor, null: false, foreign_key: true

      t.timestamps
    end
  end
end
