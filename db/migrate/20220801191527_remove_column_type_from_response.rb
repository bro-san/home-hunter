class RemoveColumnTypeFromResponse < ActiveRecord::Migration[6.1]
  def change
    remove_column :responses, :type
  end
end
