# frozen_string_literal: true

# System spec for Alpine.js integration and topic excerpt component
RSpec.describe "Alpine.js Integration" do
  before { upload_theme_or_component }

  it "loads Alpine.js script from CDN" do
    visit "/"

    # Check that Alpine.js script is loaded in the page head
    expect(page).to have_css('script[src*="alpinejs"]', visible: false)
  end

  it "renders the Alpine excerpt component for topics with excerpts" do
    # Create a topic with an excerpt (pinned topics typically have excerpts)
    topic = Fabricate(:topic)
    topic.update(pinned_at: Time.zone.now, excerpt: "This is a long excerpt for testing purposes")

    visit "/"

    # Check that the Alpine excerpt component is present
    expect(page).to have_css(".topic-excerpt-alpine")
    
    # Check that the excerpt content is present
    expect(page).to have_css(".mza-excerpt-content")
  end

  it "shows read more toggle button on mobile" do
    # Create a topic with an excerpt
    topic = Fabricate(:topic)
    topic.update(pinned_at: Time.zone.now, excerpt: "This is a long excerpt for testing purposes")

    # Set mobile viewport
    page.driver.browser.manage.window.resize_to(375, 667)

    visit "/"

    # Check that the toggle button exists, has correct text, and is visible
    expect(page).to have_css(".mza-excerpt-toggle", visible: true)
    expect(page).to have_content("قراءة المزيد")

    # Verify button is not hidden by the md:hidden class on mobile
    button = page.find(".mza-excerpt-toggle")
    expect(button).to be_visible
  end
end
