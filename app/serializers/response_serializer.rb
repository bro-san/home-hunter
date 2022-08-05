class ResponseSerializer < ActiveModel::Serializer
  attributes :id, :location, :price, :wish1, :wish2, :wish3, :description, :home_buyer_id, :realtor_id, :request_id
  belongs_to :realtor
  belongs_to :home_buyer
end
