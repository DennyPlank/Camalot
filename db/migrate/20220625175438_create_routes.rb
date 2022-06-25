class CreateRoutes < ActiveRecord::Migration[6.1]
  def change
    create_table :routes do |t|
      t. :description
      t. :title
      t. :grade

      t.timestamps
    end
  end
end
