class User < ApplicationRecord
  has_many :trails, dependent: :destroy
  has_many :comments, through: :trail
  has_secure_password

  validates :password, length: { minimum: 6 }
  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
