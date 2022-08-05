class HomeBuyersController < ApplicationController
    skip_before_action :authenticate_realtor
    def index
        render json: HomeBuyer.all
    end
end
