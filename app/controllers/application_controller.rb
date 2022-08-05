class ApplicationController < ActionController::API
  # before_action :authenticate_realtor
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def current_user
    @current_user ||= Realtor.find_by_id(session[:realtor_id]) #memoization, to make as little calls to the db as possible
    
  end

  private

  def authenticate_realtor
    render json: {errors: {Realtor: "Not Authorized"}}, status: :unauthorized unless current_user

  end

  def render_unprocessable_entity(invalid)
    render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end

  def render_not_found(error)
    render json: {errors: {error.model => "Not Found"}}, status: :render_not_found
  end

end
