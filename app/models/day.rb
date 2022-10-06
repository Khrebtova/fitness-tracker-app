class Day < ApplicationRecord
  validates :name, presence: true, inclusion: { in: %w(Monday Tuesday Wednesday Thursday Friday Saturday Sunday) }

  belongs_to :user
end
