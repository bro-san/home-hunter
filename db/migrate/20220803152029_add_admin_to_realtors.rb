class AddAdminToRealtors < ActiveRecord::Migration[6.1]
  def change
    add_column :realtors, :admin, :boolean
  end
end
