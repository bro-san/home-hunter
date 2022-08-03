class AddColumnsToRealtor < ActiveRecord::Migration[6.1]
  def change
    add_column :realtors, :username, :string
    add_column :realtors, :email, :string
    add_column :realtors, :password, :string
  end
end
