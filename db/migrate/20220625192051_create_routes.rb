class CreateRoutes < ActiveRecord::Migration[6.1]
  def change
    create_table :routes do |t|
      t.string :title
      t.text :description
      t.string :grade

      t.timestamps
    end
  end
end
