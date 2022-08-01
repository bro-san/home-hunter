class AddPhoneToHomeBuyer < ActiveRecord::Migration[6.1]
  def change
    add_column :home_buyers, :phone, :integer
  end
end
