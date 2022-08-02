class RealtorsController < ApplicationController

    def show
       
    end

    def create
        realtor = Realtor.create(realtor_params)
        if realtor.valid?
            session[:realtor_id] = realtor.realtor.id
            render json: realtor, status: :ok
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
        
    end

    private

    def realtor_params
        params.permit(:name, :company, :location, :username, :email, :password)
    end
end
