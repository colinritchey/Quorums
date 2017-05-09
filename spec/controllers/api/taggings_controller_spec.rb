require 'rails_helper'

RSpec.describe Api::TaggingsController, type: :controller do
  let!(:tag) { create(:tag) }
  let! (:user) { create(:user)}
  let! (:question) { create(:question, user_id: user.id) }

  describe 'POST #create' do
    render_views


    before(:each) do
      post :create,
        tagging: {
          tag_id: tag.id,
          question_id: question.id
        },
        format: :json
    end

    it 'creates the new tagging' do
      expect(Tagging.exists?).to be true
      expect(Tagging.first.tag.name).to eq('Testing')
      expect(Tagging.first.question.title).to eq('Test')
    end
  end

  describe 'DELETE #delete' do

    let!(:tagging){
      create(:tagging,
        tag_id: tag.id,
        question_id: question.id)
    }

    before do
      delete :destroy, id: tagging.id, format: :json
    end

    it "removes the comment and redirects back to the link" do
      expect(Tagging.exists?(tagging.id)).to be false
    end

  end
end
