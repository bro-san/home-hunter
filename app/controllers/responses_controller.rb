class ResponsesController < ApplicationController
    skip_before_action :authenticate_realtor
    def index
        render json: Response.all
    end
end
