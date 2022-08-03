class SessionsController < ApplicationController



  def create
    realtor = Realtor.find_by_username(params[:username])
    if realtor&.authenticate(params[:password])
      session[:realtor_id] = realtor.id
      render json: realtor, status: :ok
    else
      render json: "Invalid Credentials", status: :unauthorized
    end
  end



  def destroy
      session.delete(:realtor_id) 
  end



end
 