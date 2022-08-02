# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_08_02_172003) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "home_buyers", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "city"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "phone"
  end

  create_table "realtors", force: :cascade do |t|
    t.string "name"
    t.string "company"
    t.string "location"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "username"
    t.string "email"
    t.string "password_digest"
  end

  create_table "requests", force: :cascade do |t|
    t.bigint "home_buyer_id", null: false
    t.boolean "location_specific"
    t.integer "location_size"
    t.string "comment"
    t.string "tag1"
    t.string "tag2"
    t.string "tag3"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["home_buyer_id"], name: "index_requests_on_home_buyer_id"
  end

  create_table "responses", force: :cascade do |t|
    t.string "location"
    t.integer "price"
    t.string "tag1"
    t.string "tag2"
    t.string "tag3"
    t.string "description"
    t.bigint "home_buyer_id", null: false
    t.bigint "realtor_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "request_id", null: false
    t.index ["home_buyer_id"], name: "index_responses_on_home_buyer_id"
    t.index ["realtor_id"], name: "index_responses_on_realtor_id"
    t.index ["request_id"], name: "index_responses_on_request_id"
  end

  add_foreign_key "requests", "home_buyers"
  add_foreign_key "responses", "home_buyers"
  add_foreign_key "responses", "realtors"
  add_foreign_key "responses", "requests"
end
