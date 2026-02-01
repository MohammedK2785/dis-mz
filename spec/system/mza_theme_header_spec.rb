# frozen_string_literal: true

# System spec for Mza3et Theme header components
# Tests the subnav ribbon and homepage hero section
RSpec.describe "Mza3et Theme Header" do
  before { upload_theme_or_component }

  it "renders the subnav navigation bar with links" do
    visit "/"
    
    # Assert presence of subnav with correct aria-label
    expect(page).to have_css('nav[aria-label="التنقل الرئيسي"]')
    
    # Assert at least one navigation link is present
    within 'nav[aria-label="التنقل الرئيسي"]' do
      expect(page).to have_css("a", minimum: 1)
    end
  end

  it "renders the homepage hero section" do
    visit "/"
    
    # Assert presence of hero title
    expect(page).to have_css(".mza-hero h1")
    
    # Assert presence of hero subtitle
    expect(page).to have_css(".mza-hero p")
  end
end
