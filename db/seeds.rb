require 'faker'


20.times{HomeBuyer.create(name: Faker::Name.name ,age: rand(18..55), city: Faker::Address.city, phone: Faker::PhoneNumber.cell_phone)}

20.times{Realtor.create(name: Faker::Name.name, company: Faker::Company.name , location: Faker::Address.state)}

10.times{Request.create(home_buyer_id: HomeBuyer.all.ids.sample, location_specific: Faker::Boolean.boolean(true_ratio: 0.1), location_size: rand(100..300), comment: Faker::Lorem.paragraph_by_chars(number: 150, supplemental: false), tag1: Faker::Lorem.word, tag2: Faker::Lorem.word , tag3: Faker::Lorem.word )}

10.times{Response.create(location: Faker::Address.city, price: rand(100000..900000), tag1: Faker::Lorem.word, tag2: Faker::Lorem.word, tag3: Faker::Lorem.word, description: Faker::Lorem.paragraph_by_chars(number: 200), home_buyer_id: HomeBuyer.all.ids.sample, realtor_id: Realtor.all.ids.sample,request_id: Request.all.ids.sample)}


