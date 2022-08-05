class RequestSerializer < ActiveModel::Serializer
  attributes :id, :home_buyer_id, :location_specific, :location_size, :comment, :wish1, :wish2, :wish3, :image
  belongs_to :home_buyer
end
