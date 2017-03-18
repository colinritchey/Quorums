class Api::AnswersController < ApplicationController

  def create
    @answer = current_user.answers.new(answers_params)
    if @answer.save
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def update
    @answer = current_user.answers.find(params[:id])

    if @answer.update(answers_params)
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  def destroy
    @answer = current_user.answers.find(params[:id])

    if @answer.destroy
      render :show
    else
      render json: @answer.errors.full_messages, status: 422
    end
  end

  private

  def answers_params
    params.require(:answer).permit(:title, :body, :question_id)
  end
end
