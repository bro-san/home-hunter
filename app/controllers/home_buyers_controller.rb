class HomeBuyersController < ApplicationController

    def index
        render json: HomeBuyer.all
    end
end
