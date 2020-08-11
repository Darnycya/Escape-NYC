require 'test_helper'

class TrailsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @trail = trails(:one)
  end

  test "should get index" do
    get trails_url, as: :json
    assert_response :success
  end

  test "should create trail" do
    assert_difference('Trail.count') do
      post trails_url, params: { trail: { difficulty: @trail.difficulty, length: @trail.length, name: @trail.name, trail_image: @trail.trail_image, travel_time_from_NYC: @trail.travel_time_from_NYC } }, as: :json
    end

    assert_response 201
  end

  test "should show trail" do
    get trail_url(@trail), as: :json
    assert_response :success
  end

  test "should update trail" do
    patch trail_url(@trail), params: { trail: { difficulty: @trail.difficulty, length: @trail.length, name: @trail.name, trail_image: @trail.trail_image, travel_time_from_NYC: @trail.travel_time_from_NYC } }, as: :json
    assert_response 200
  end

  test "should destroy trail" do
    assert_difference('Trail.count', -1) do
      delete trail_url(@trail), as: :json
    end

    assert_response 204
  end
end
