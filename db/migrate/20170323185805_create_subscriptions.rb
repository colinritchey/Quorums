class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.integer "tag_id", null: false
      t.integer "user_id", null: false
      t.timestamps null: false
    end

    add_index "subscriptions", ["tag_id", "user_id"], unique: true
  end
end
