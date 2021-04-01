class ChangeListNameValueToDefaultInGroceries < ActiveRecord::Migration[6.1]
  def change
    change_column :groceries, :list_name, :string, default: 'default_list'
  end
end
