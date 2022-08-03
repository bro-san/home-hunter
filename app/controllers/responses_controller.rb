class ResponsesController < ApplicationController

    def index
        render json: Response.all
    end
end
