class Api::TaggingsController < ApplicationController

  def create
    @tagging = Tagging.new(taggings_params)
    if @tagging.save
      head :no_content
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  def destroy
    @tagging = Tagging.find(params[:id])

    if @tagging.destroy
      head :no_content
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  private

  def taggings_params
    params.require(:tagging).permit(:tag_id, :question_id)
  end
end
