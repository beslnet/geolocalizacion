class Place < ActiveRecord::Base
	reverse_geocoded_by :latitude, :longitude
	after_validation :geocode, :if => :address_changed?
	validates :address, :name, presence:true
end
