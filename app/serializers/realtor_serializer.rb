class RealtorSerializer < ActiveModel::Serializer
  attributes :id, :name, :company, :location, :username, :email, :admin
end
