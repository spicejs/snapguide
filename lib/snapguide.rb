require 'open-uri'

module Snapguide
  extend self
  GUIDE = "https://snapguide.com/api/v1/guide/"

  def fetch_guide(uuid)
    open(GUIDE + uuid) { |f| f.read }
  end
end
