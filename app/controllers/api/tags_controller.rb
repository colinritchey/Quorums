class Api::TagsController < ApplicationController
  def index
    @tags = Tag.all
  end

  def show
    @tag = Tag.find(params[:id])
  end

  def create
    @tag = Tag.new(tags_params)
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  private

  def tags_params
    params.require(:tag).permit(:name)
  end
end
