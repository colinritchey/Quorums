require 'rails_helper'

RSpec.describe Question, type: :model do
  describe "Question" do
    # let (:user1) { create(:user) }
    # let (:question) { create(:question) }
    let (:question) { create(:question) }

    it { should validate_presence_of(:user) }
    it { should validate_presence_of(:title) }

  end

  describe "associations" do
    # "it" refers to an instance of the BasketballTeam class here
    # because we have not explicitly specified a subject
    it { should belong_to(:user)}

    it { should have_many(:answers)}
    it { should have_many(:comments)}

    it { should have_many(:taggings)}
    it { should have_many(:tags)}

  end

  describe 'model_methods' do
    describe '.searchByWord' do
      context 'when given a valid word' do
        it 'should create a list of questions' do
          # test goes here
        end
      end

      context 'when given an invalid word' do
        it 'should return nil' do
          # test goes here
        end
      end
    end

    describe '.feedQuestions' do
      context 'when given a valid list of tag id' do
        it 'should create a list of questions' do
          # test goes here
        end
      end

      context 'when given an invalid list' do
        it 'should return nil' do
          # test goes here
        end
      end
    end
  end



end
