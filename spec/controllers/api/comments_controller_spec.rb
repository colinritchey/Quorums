require 'rails_helper'

RSpec.describe Api::CommentsController, type: :controller do
  describe 'POST #create' do
    context 'with valid params' do
      let! (:user) { create(:user)}

      before do
        allow(controller).to receive(:current_user) { user }
      end
      let! (:question) { create(:question, user_id: user.id) }

      before(:each) do
        post :create, comment: {
          body: 'sample comment',
          user_id: user.id,
          question_id:  question.id
        },
        format: :json
      end

      it { should render_template(:show) }
      it { should respond_with(200) }

      it 'creates the comment' do
        expect(Comment.exists?).to be true
      end
    end

    context 'with invalid params' do
      let! (:user) { create(:user)}

      before do
        allow(controller).to receive(:current_user) { user }
      end

      before(:each) do
        post :create, comment: { body: '' }, format: :json
      end

      it { should respond_with(422) }
      it 'does not create the comment' do
        expect(Comment.exists?).to be false
      end
    end
  end

  describe 'PATCH #update' do
    let! (:user) { create(:user)}

    before do
      allow(controller).to receive(:current_user) { user }
    end

    let! (:question) { create(:question, user_id: user.id) }
    let! (:comment) {
      create(:comment,
        user_id: user.id,
        question_id:  question.id,
        body: 'sample comment')
    }

    # before(:each) do
    #   patch :update, id: comment.id, comment: {
    #     body: 'sample comment'
    #   },
    #   format: :json
    # end


    context 'with valid params' do

      before(:each) do
        patch :update, id: comment.id, comment: {
          body: 'sample question update'
        },
        format: :json
      end

      it { should render_template(:show) }
      it { should respond_with(200) }

      it 'update the question' do
        expect(Comment.exists?).to be true
        expect(Comment.first.body).to eq('sample question update')
      end
    end



    context "when logged in as a different user" do

      let! (:other_user) { create(:user, username: 'other_person')}

      before do
        allow(controller).to receive(:current_user) { other_user }
      end

      it "should not allow users to update another users links" do
        begin
          patch :update, id: comment.id, comment: {
            body: 'other comment update'
          },
          format: :json
        rescue ActiveRecord::RecordNotFound
        end

        updated_comment = Comment.find(comment.id)
        expect(comment.body).to eq('sample comment')
      end
    end
  end

  describe 'DELETE #destroy' do
    let! (:user) { create(:user)}

    before do
      allow(controller).to receive(:current_user) { user }
    end

    let! (:question) { create(:question, user_id: user.id) }
    let! (:comment) {
      create(:comment,
      user_id: user.id,
      question_id:  question.id,
      body: 'sample comment')
    }

    context "when logged in" do

      before do
        delete :destroy, id: comment.id, format: :json
      end

      it { should render_template(:show) }

      it "removes the comment and redirects back to the link" do
        expect(Comment.exists?(comment.id)).to be false
      end

    end

    context "when logged in as a different user" do

      let! (:other_user) { create(:user, username: 'other_person')}

      before do
        allow(controller).to receive(:current_user) { other_user }
      end

      it "should not allow users to delete another users links" do
        begin
          delete :destroy, id: comment.id, format: :json
        rescue ActiveRecord::RecordNotFound
        end

        updated_comment = Comment.find(comment.id)
        expect(comment.body).to eq('sample comment')
      end
    end
  end
end
