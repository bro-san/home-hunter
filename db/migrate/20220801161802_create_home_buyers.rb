class CreateHomeBuyers < ActiveRecord::Migration[6.1]
  def change
    create_table :home_buyers do |t|
      t.string :name
      t.integer :age
      t.string :city

      t.timestamps
    end
  end
end
