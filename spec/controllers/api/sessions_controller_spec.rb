require 'rails_helper'

RSpec.describe Api::SessionsController, type: :controller do
  let!(:user){ create(:user) }
  # rendered_response = JSON.parse(response.body)
  # expect(rendered_response).to eq("Invalid Login")


  describe 'POST #create' do
    context "with invalid credentials" do
      it "returns to sign in with an non-existent user" do
        post :create, user: {username: "jill_bruce", password: "abcdef"}
        rendered_response = JSON.parse(response.body)
        expect(rendered_response).to eq(["Invalid Login"])
      end

      it "returns to sign in on bad password" do
        post :create, user: {username: "breakfast", password: "notmypassword"}
        rendered_response = JSON.parse(response.body)
        expect(rendered_response).to eq(["Invalid Login"])
      end
    end

    context "with valid credentials" do
      it "redirects user to links index on success" do
        post :create,
          user: {
            username: "breakfast",
            password: "password"},
          format: :json
          
        should render_template(:show)
        should respond_with(200)
      end

      it "logs in the user" do
        post :create,
          user: {
            username: "breakfast",
            password: "password"},
          format: :json

        user = User.find_by_username("breakfast")

        expect(session[:session_token]).to eq(user.session_token)
      end
    end
  end

  describe 'DELETE #destroy' do

  end
end
