class UserExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :reps, :weight, :sets, :exercise_url
  has_one :user
  has_one :day
end
