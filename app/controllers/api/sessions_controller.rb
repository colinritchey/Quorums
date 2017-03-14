class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credintials(params[:user][:username],params[:user][:password])

    if @user
      sign_in(@user)
      render "api/users/show"
    else
      render json: ["Invalid Login"], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      render 'api/users/show'
    else
      render json: ["No current user"], status: 404
    end
  end
end
