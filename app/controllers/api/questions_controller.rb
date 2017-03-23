class Api::QuestionsController < ApplicationController

  def index
    @questions = filter_params ? Question.searchByWord(filter_params) : Question.all

    if(filter_tag_params)
      @questions = Tag.returnQuestionsByTagId(filter_tag_params)
    elsif filter_params
      @questions = Question.searchByWord(filter_params)
    else
      @questions = Question.all
    end

    @questions.includes(:user)

    render :index
  end

  def create
    @question = current_user.questions.new(questions_params)
    @answers = []
    @comments = []

    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def show
    @question = Question.find(params[:id])

    @answers = @question.answers
    @comments = @question.comments
    @tag_ids = @question.tag_ids
  end

  def update
    @question = current_user.questions.find(params[:id])
    @answers = @question.answers
    @comments = @question.comments
    if @question.update(questions_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = current_user.questions.find(params[:id])
    @answers = @question.answers
    @comments = @question.comments

    if @question.destroy
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  private

  def questions_params
    params.require(:question).permit(:title, :body, tag_ids: [])
  end

  def filter_params
    params[:searchByTitle]
  end

  def filter_tag_params
    params[:searchByTagId]
  end
end
