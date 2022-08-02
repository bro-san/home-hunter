class UpdatePasswordToPasswordDigest < ActiveRecord::Migration[6.1]
  def change
    rename_column :realtors, :password, :password_digest
  end
end
 