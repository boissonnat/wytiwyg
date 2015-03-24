class Document < ActiveRecord::Base

  ## Associations
  belongs_to :user

  ## Validation
  validates :title, :body, presence: true
  validates :title, uniqueness: true
end
