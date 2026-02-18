# frozen_string_literal: true

# System spec for native excerpt component (replaced Alpine.js with <details>/<summary>)
RSpec.describe "Topic Excerpt Component" do
  before { upload_theme_or_component }

  it "does not load Alpine.js from CDN" do
    visit "/"

    # Alpine.js has been replaced with native <details>/<summary>
    expect(page).not_to have_css('script[src*="alpinejs"]', visible: false)
  end

  it "renders the native excerpt component for topics with excerpts" do
    # Create a topic with an excerpt (pinned topics typically have excerpts)
    topic = Fabricate(:topic)
    topic.update(pinned_at: Time.zone.now, excerpt: "This is a long excerpt for testing purposes")

    visit "/"

    # Check that the excerpt component is present (details element with topic-excerpt-alpine class)
    expect(page).to have_css("details.topic-excerpt-alpine")

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

    # Check that the <summary> toggle is visible on mobile
    expect(page).to have_css("details.topic-excerpt-alpine > summary.mza-excerpt-toggle", visible: true)
  end
end
