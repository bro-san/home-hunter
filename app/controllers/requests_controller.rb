class RequestsController < ApplicationController

    def index 
        render json: Request.all
    end
end
