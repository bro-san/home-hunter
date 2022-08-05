class RequestsController < ApplicationController
    skip_before_action :authenticate_realtor
    def index 
        render json: Request.all
    end

    def show
        request = Request.find(params[:id])
        render json: request
    end

    def create
        request = Request.create!(request_params)
        render json: request, status: :created
    end

    def destroy
        request = Request.find(params[:id])
        request.destroy
        head :no_content
    end

    def updated
        request = Request.find(params[:id])
        request.update!(request_params)
        render json: request
    end

    private

    def request_params
        params.permit(:home_buyer_id, :location_specific, :location_size, :comment, :wish1, :wish2, :wish3, :image)
    end
end
