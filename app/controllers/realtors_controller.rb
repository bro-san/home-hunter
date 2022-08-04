class RealtorsController < ApplicationController
    # skip_before_action :authenticate_realtor
    # # Above line needs to be in every controller 
    # that we want to run that does not require authentication 


    def index 
        render json: Realtor.all, status: :ok
    end
    

    def show
        
       realtor = Realtor.find(params[:id])
       render json: realtor, status: :ok
    end

    def create
        
        realtor = Realtor.create(realtor_params)
        # session[:realtor_id] = realtor.realtor.id
        render json: realtor, status: :ok
     

        
        
        
    end

    private

    def realtor_params
        params.permit(:name, :company, :location, :username, :email, :password, :admin, :name)
    end
end
