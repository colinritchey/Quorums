class ChangeQuestionBodyConstraint < ActiveRecord::Migration
  def change
    change_column :questions, :body, :text, null: true
  end
end
