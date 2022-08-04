require 'faker'


20.times{
    HomeBuyer.create(
        name: Faker::Name.name,
        age: rand(18..55), 
        city: Faker::Address.city(options: { with_state: true }), 
        phone: Faker::PhoneNumber.cell_phone
    )
}

20.times{
    Realtor.create(
        name: Faker::Name.name, 
        company: Faker::Company.name, 
        location: Faker::Address.state, 
        username: Faker::Lorem.word, 
        email: Faker::Internet.email, 
        password: Faker::Lorem.word, 
        admin: Faker::Boolean.boolean(true_ratio: 0.5)
    )
}

10.times{
    Request.create(
        home_buyer_id: HomeBuyer.all.ids.sample, 
        location_specific: Faker::Boolean.boolean(true_ratio: 0.1), 
        location_size: rand(100..300), 
        comment: Faker::Quote.yoda, 
        wish1: Faker::Adjective.positive, 
        wish2: Faker::Adjective.positive, 
        wish3: Faker::Adjective.positive,
        image: Faker::LoremFlickr.image(size: "240x240", search_terms: ['house'])
    )
}

10.times{
    Response.create(
        location: Faker::Address.city, 
        price: Faker::Number.number(digits: 6), 
        wish1: Faker::Adjective.positive, 
        wish2: Faker::Adjective.positive, 
        wish3: Faker::Adjective.positive, 
        description: Faker::Lorem.paragraph_by_chars(number: 200), 
        home_buyer_id: HomeBuyer.all.ids.sample, 
        realtor_id: Realtor.all.ids.sample,
        request_id: Request.all.ids.sample
    )
}


