class Api::QuestionsController < ApplicationController

  def index
    @questions = Question.all
    render :index
  end

  def create
    @question = Question.new(questions_params)
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    @question = Question.find(params[:id])
  end

  # def destroy
  #
  # end

  private

  def questions_params
    params.require(:question).permit(:title, :body, :user_id)
  end
end
