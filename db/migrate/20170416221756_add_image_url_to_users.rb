class AddImageUrlToUsers < ActiveRecord::Migration
  def change
    add_column :users, :img_url, :text
  end
end
