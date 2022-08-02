class RemoveTypeFromResponse < ActiveRecord::Migration[6.1]
  def change
    remove_column :responses, :type, :string
  end
end
