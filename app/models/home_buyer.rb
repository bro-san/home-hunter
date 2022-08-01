class HomeBuyer < ApplicationRecord
    has_many :requests
    has_many :realtors, through: :requests
    has_many :responses
   
end
