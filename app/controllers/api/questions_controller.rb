class Api::QuestionsController < ApplicationController

  def index
    @questions = Question.all

    @questions.includes(:user)

    render :index
  end

  def create
    @question = current_user.questions.new(questions_params)
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    @question = Question.find(params[:id])
  end

  def update
    @question = current_user.questions.find(params[:id])

    if @question.update(questions_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = current_user.questions.find(params[:id])

    if @question.destroy
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  private

  def questions_params
    params.require(:question).permit(:title, :body)
  end
end
