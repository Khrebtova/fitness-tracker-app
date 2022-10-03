class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  
  has_many :days
  has_many :user_exercises

end
