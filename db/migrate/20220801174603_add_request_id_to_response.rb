class AddRequestIdToResponse < ActiveRecord::Migration[6.1]
  def change
    add_reference :responses, :request, null: false, foreign_key: true
  end
end
