require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do

  describe 'POST #create' do
    context 'with valid params' do
      before(:each) do
        post :create, user: {
          username: 'cool_guy_9',
          password: 'password'
        },
        format: :json
      end

      it { should render_template(:show) }
      it { should respond_with(200) }

      it 'creates the User' do
        expect(User.exists?).to be true
      end
    end

    context 'with invalid params' do
      before(:each) do
        post :create, user: {
          username: 'ugly',
          password: ''
          }, format: :json
      end

      it { should respond_with(422) }
      it 'does not create the User' do
        expect(User.exists?).to be false
      end
    end
  end

  describe 'PATCH #update' do

    context 'with valid parameters' do
      # before(:each) do
      #   post :create, user: {
      #     username: 'cool_guy_9',
      #     password: 'password'
      #   },
      #   format: :json
      end
    end

  end

end
