require 'rails_helper'

RSpec.describe Api::TagsController, type: :controller do
  describe 'GET #index' do
    render_views

    let! (:tag_1) { create(:tag)}
    let! (:tag_2) { create(:tag, name: "Test 2")}

    before(:each) do
      get :index,
      format: :json
    end

    it { should respond_with(200) }
    it { should render_template(:index) }

    it 'renders all existing tags' do
      rendered_response = JSON.parse(response.body)
      expect(rendered_response.length).to eq(2)
    end
  end

  describe 'GET #show' do
    render_views

    let! (:tag) { create(:tag)}

    before(:each) do
      get :show, { id: tag.id, format: :json }
    end

    it { should render_template(:show) }
    it { should respond_with(200) }

    it 'renders the called tag' do
      rendered_response = JSON.parse(response.body)
      expect(rendered_response['name']).to eq('Testing')
    end
  end

  describe 'POST #create' do
    render_views

    before(:each) do
      post :create, tag: { name: 'Internet' }, format: :json 
    end

    it { should render_template(:show) }
    it { should respond_with(200) }

    it 'renders the called tag' do
      rendered_response = JSON.parse(response.body)
      expect(rendered_response['name']).to eq('Internet')
    end
  end
end
