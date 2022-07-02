class CreateRoutes < ActiveRecord::Migration[6.1]
  def change
    create_table :routes do |t|
      t.string :name
      t.string :description
      t.integer :grade
      t.belongs_to :state, null: false, foreign_key: true

      t.timestamps
    end
  end
end
