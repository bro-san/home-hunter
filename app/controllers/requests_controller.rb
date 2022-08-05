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
        response = Response.where(request_id: params[:id])
        response.destroy_all
        request.destroy
        head :no_content
    end

    def update
        request = Request.find(params[:id])
        request.update!(request_params)
        render json: request, status: :accepted
    end

    private

    def request_params
        params.permit(:id, :home_buyer_id, :location_specific, :location_size, :comment, :wish1, :wish2, :wish3, :image)
    end
end
