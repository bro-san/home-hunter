class Realtor < ApplicationRecord
    has_many :requests
    has_many :responses
    has_many :home_buyers, through: :responses
    # validates :username, uniqueness: true

    has_secure_password
end
