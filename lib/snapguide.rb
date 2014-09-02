module Snapguide
  extend self
  GUIDE = "http://snapguide.com/api/v1/guide/"

  def fetch_guide(uuid)
    open(GUIDE + uuid) { |f| f.read }
  end
end
