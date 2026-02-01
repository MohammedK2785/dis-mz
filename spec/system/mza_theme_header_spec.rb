# frozen_string_literal: true

# System spec for Mza3et Theme header components
# Tests the subnav ribbon and homepage hero section
RSpec.describe "Mza3et Theme Header" do
  # Arabic aria-label matches the template's hardcoded value
  # This is intentional for an Arabic-focused theme
  let(:subnav_selector) { 'nav[aria-label="التنقل الرئيسي"]' }
  let(:mobile_portal_nav_selector) { 'nav.mza-mobile-portal-nav[aria-label="بوابات الموقع"]' }

  before { upload_theme_or_component }

  it "renders the subnav navigation bar with links" do
    visit "/"

    # Assert presence of subnav with correct aria-label
    expect(page).to have_css(subnav_selector)

    # Assert at least one navigation link is present
    within subnav_selector do
      expect(page).to have_css("a", minimum: 1)
    end
  end

  it "renders the mobile-only portal navigation" do
    visit "/"

    # Assert presence of mobile portal nav
    expect(page).to have_css(mobile_portal_nav_selector)

    # The mobile nav should have md:hidden class for mobile-only visibility
    within mobile_portal_nav_selector do
      # Mobile nav should be present in the DOM
      expect(page).to have_css("div.wrap")
    end
  end

  it "renders the homepage hero section with compact styling" do
    visit "/"

    # Assert presence of hero with section-card class
    expect(page).to have_css(".mza-hero.mza-section-card")

    # Assert presence of hero title with section-title class
    expect(page).to have_css(".mza-hero .mza-section-title")

    # Assert presence of hero subtitle with section-subtitle class
    expect(page).to have_css(".mza-hero .mza-section-subtitle")
  end
end
