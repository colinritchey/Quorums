class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = current_user
    @user.tag_ids = user_params[:tag_ids] || []

    if @user.update(user_params) # TODO: Adjusts to only tag_ids
      render "api/users/show"
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, tag_ids: [])
  end
end
