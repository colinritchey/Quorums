require 'rails_helper'

RSpec.describe Api::QuestionsController, type: :controller do
  # let(:jack) { User.create!(username: 'jack_bruce', password: 'abcdef') }

  describe 'GET #show' do
    let! (:user) { create(:user)}
    let! (:question) { create(:question, user_id: user.id) }
    before(:each) do
      get :show, { id: question.id, format: :json }
    end

    it { should render_template(:show) }
    it { should respond_with(200) }
  end

  describe 'POST #create' do
    context 'with valid params' do
      let! (:user) { create(:user)}

      before do
        allow(controller).to receive(:current_user) { user }
      end

      let! (:question) { create(:question, user_id: user.id) }
      before(:each) do
        post :create, question: {
          title: 'sample question'
        },
        format: :json
      end

      it { should render_template(:show) }
      it { should respond_with(200) }

      it 'creates the question' do
        expect(Question.exists?).to be true
      end
    end

    context 'with invalid params' do
      let! (:user) { create(:user)}

      before do
        allow(controller).to receive(:current_user) { user }
      end

      before(:each) do
        post :create, question: { title: '' }, format: :json
      end

      it { should respond_with(422) }
      it 'does not create the question' do
        expect(Question.exists?).to be false
      end
    end
  end

  describe 'GET #index' do
    render_views
    # Without the above directive, response.body would only be an empty string.

    let! (:user) { create(:user)}

    before do
      allow(controller).to receive(:current_user) { user }
    end

    before(:each) do
      post :create, question: { title: 'Something' }, format: :json
    end

    context 'when there are no bounds or seating ranges' do
      before(:each) do
        get :index, { format: :json }
      end

      it { should respond_with(200) }
      it { should render_template(:index) }
      it 'renders all existing benches' do
        rendered_response = JSON.parse(response.body)
        expect(rendered_response.length).to eq(1)
      end
    end
  end

  describe 'PATCH #update' do
    let! (:user) { create(:user)}

    before do
      allow(controller).to receive(:current_user) { user }
    end

    let! (:question) { create(:question, user_id: user.id) }
    before(:each) do
      post :create, question: {
        title: 'sample question'
      },
      format: :json
    end


    context 'with valid params' do

      before(:each) do
        patch :update, id: question.id, question: {
          title: 'sample question update'
        },
        format: :json
      end

      it { should render_template(:show) }
      it { should respond_with(200) }

      it 'update the question' do
        expect(Question.exists?).to be true
        expect(Question.first.title).to eq('sample question update')
      end
    end



    # context "when logged in as a different user" do
    #
    #   let! (:other_user) { create(:user, username: 'other_person')}
    #
    #   before do
    #     allow(controller).to receive(:current_user) { other_user }
    #   end
    #
    #   before(:each) do
    #     patch :update, id: question.id, question: {
    #       title: 'other question update'
    #     },
    #     format: :json
    #   end
    #
    #   it "should not allow users to update another users links" do
    #     updated_question = Question.find(question.id)
    #     expect(question.title).to eq('sample question')
    #   end
    # end
  end

  describe 'DELETE #destroy' do
    context "when logged in" do
      let! (:user) { create(:user)}

      before do
        allow(controller).to receive(:current_user) { user }
      end

      let! (:question) { create(:question, user_id: user.id) }
      before(:each) do
        post :create, question: {
          title: 'sample question'
        },
        format: :json
      end


      before do
        delete :destroy, id: question.id, format: :json
      end
      
      it "removes the comment and redirects back to the link" do

        # it { should render_template(:show) }

        expect(Question.exists?(question.id)).to be false
      end
    end
  end
end
