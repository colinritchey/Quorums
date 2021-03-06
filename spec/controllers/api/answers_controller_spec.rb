require 'rails_helper'

RSpec.describe Api::AnswersController, type: :controller do
  describe 'POST #create' do
    context 'with valid params' do
      let! (:user) { create(:user)}

      before do
        allow(controller).to receive(:current_user) { user }
      end
      let! (:question) { create(:question, user_id: user.id) }

      before(:each) do
        post :create, answer: {
          body: 'sample answer',
          user_id: user.id,
          question_id:  question.id
        },
        format: :json
      end

      it { should render_template(:show) }
      it { should respond_with(200) }

      it 'creates the answer' do
        expect(Answer.exists?).to be true
      end
    end

    context 'with invalid params' do
      let! (:user) { create(:user)}

      before do
        allow(controller).to receive(:current_user) { user }
      end

      before(:each) do
        post :create, answer: { body: '' }, format: :json
      end

      it { should respond_with(422) }
      it 'does not create the answer' do
        expect(Answer.exists?).to be false
      end
    end
  end

  describe 'PATCH #update' do
    let! (:user) { create(:user)}

    before do
      allow(controller).to receive(:current_user) { user }
    end

    let! (:question) { create(:question, user_id: user.id) }
    let! (:answer) {
      create(:answer,
        user_id: user.id,
        question_id:  question.id,
        body: 'sample answer')
    }

    # before(:each) do
    #   patch :update, id: answer.id, answer: {
    #     body: 'sample answer'
    #   },
    #   format: :json
    # end


    context 'with valid params' do

      before(:each) do
        patch :update, id: answer.id, answer: {
          body: 'sample question update'
        },
        format: :json
      end

      it { should render_template(:show) }
      it { should respond_with(200) }

      it 'update the question' do
        expect(Answer.exists?).to be true
        expect(Answer.first.body).to eq('sample question update')
      end
    end



    context "when logged in as a different user" do

      let! (:other_user) { create(:user, username: 'other_person')}

      before do
        allow(controller).to receive(:current_user) { other_user }
      end



      it "should not allow users to update another users links" do
        begin
          patch :update, id: answer.id, answer: {
            body: 'other answer update'
          },
          format: :json
        rescue ActiveRecord::RecordNotFound
        end

        updated_answer = Answer.find(answer.id)
        expect(answer.body).to eq('sample answer')
      end
    end
  end

  describe 'DELETE #destroy' do
    let! (:user) { create(:user)}

    before do
      allow(controller).to receive(:current_user) { user }
    end

    let! (:question) { create(:question, user_id: user.id) }
    let! (:answer) {
      create(:answer,
      user_id: user.id,
      question_id:  question.id,
      body: 'sample answer')
    }

    context "when logged in" do

      before do
        delete :destroy, id: answer.id, format: :json
      end

      it { should render_template(:show) }

      it "removes the comment and redirects back to the link" do
        expect(Answer.exists?(answer.id)).to be false
      end

    end

    context "when logged in as a different user" do

      let! (:other_user) { create(:user, username: 'other_person')}

      before do
        allow(controller).to receive(:current_user) { other_user }
      end

      it "should not allow users to delete another users links" do
        begin
          delete :destroy, id: answer.id, format: :json
        rescue ActiveRecord::RecordNotFound
        end

        updated_answer = Answer.find(answer.id)
        expect(answer.body).to eq('sample answer')
      end
    end
  end
end
