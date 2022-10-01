class CreateUserExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :user_exercises do |t|
      t.string :name
      t.integer :reps
      t.integer :weight
      t.integer :sets
      t.string :exercise_url
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :day, null: false, foreign_key: true

      t.timestamps
    end
  end
end
