class CreateStates < ActiveRecord::Migration[6.1]
  def change
    create_table :states do |t|
      t. :name
      t. :description
      t. :has_many

      t.timestamps
    end
  end
end
