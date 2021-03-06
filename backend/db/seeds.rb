require 'faker'
require 'byebug'

User.destroy_all
15.times do
  name = Faker::Name.unique.name
  address = Faker::Address.street_address
  email = Faker::Internet.safe_email
  phone_number = Faker::PhoneNumber.cell_phone
  bday = Faker::Date.birthday(min_age: 18, max_age: 55)
  college = Faker::University.name

  User.find_or_create_by(name: name, address: address, email: email, phone_number: phone_number, birthday: bday, education: college)
end

Category.destroy_all
math = Category.find_or_create_by(name: "Math")
english = Category.find_or_create_by(name: "English")
science = Category.find_or_create_by(name: "Science")
music = Category.find_or_create_by(name: "Music")
sports = Category.find_or_create_by(name: "Sports")

Course.destroy_all
alegbra = Course.find_or_create_by(name: "Algebra", hourly_rate: 30, location: "Silver Spring, MD", category_id: math.id, instructor_id: User.all[6].id)

calculus = Course.find_or_create_by(name: "Calculus", hourly_rate: 35, location: "Pomotac, MD", category_id: math.id, instructor_id: User.all[6].id)

basic_math = Course.find_or_create_by(name: "Basic Math", hourly_rate: 25, location: "Bethesda, MD", category_id: math.id, instructor_id: User.all[6].id)

basic_writing = Course.find_or_create_by(name: "Basic Writing", hourly_rate: 30, location: "Germantown, MD", category_id: english.id, instructor_id: User.all[7].id)

reading = Course.find_or_create_by(name: "Reading", hourly_rate: 25, location: "Clarksburg, MD", category_id: english.id, instructor_id: User.all[7].id)

advanced_writing = Course.find_or_create_by(name: "Advanced Writing", hourly_rate: 35, location: "Aspen Hill, MD", category_id: english.id, instructor_id: User.all[7].id)

chemistry = Course.find_or_create_by(name: "Chemistry", hourly_rate: 30, location: "White Oak, MD", category_id: science.id, instructor_id: User.all[8].id)

biology = Course.find_or_create_by(name: "Biology", hourly_rate: 30, location: "Silver Spring, MD", category_id: science.id, instructor_id: User.all[8].id)

basic_science = Course.find_or_create_by(name: "Basic Science", hourly_rate: 30, location: "Wheaton, MD", category_id: science.id, instructor_id: User.all[8].id)

violin = Course.find_or_create_by(name: "Private Violin Lessons", hourly_rate: 25, location: "Cabin John, MD", category_id: music.id, instructor_id: User.all[9].id)

cello = Course.find_or_create_by(name: "Private Cello Lessons", hourly_rate: 20, location: "Silver Spring, MD", category_id: music.id, instructor_id: User.all[9].id)

piano = Course.find_or_create_by(name: "Private Piano Lessons", hourly_rate: 30, location: "North Bethesda, MD", category_id: music.id, instructor_id: User.all[10].id)

singing = Course.find_or_create_by(name: "Private Singing Lessons", hourly_rate: 45, location: "Potomac, MD", category_id: music.id, instructor_id: User.all[11].id)

soccer = Course.find_or_create_by(name: "Private Soccer Lessons", hourly_rate: 30, location: "Washington, DC", category_id: sports.id, instructor_id: User.all[12].id)

swimming = Course.find_or_create_by(name: "Private Swimming Lessons", hourly_rate: 35, location: "Chevy Chase, MD", category_id: sports.id, instructor_id: User.all[12].id)

tennis = Course.find_or_create_by(name: "Private Tennis Lessons", hourly_rate: 30, location: "Reston, VA", category_id: sports.id, instructor_id: User.all[12].id)

Review.destroy_all
review1 = Review.find_or_create_by(customer_id: User.first.id, course_id: alegbra.id, content: "#{User.all[6].name} has been tutoring my son for the past 8 months. I have seen tremendous improvement on his grades and confidence since attending classes with #{User.first.name}", rating: 5)
review2 = Review.find_or_create_by(customer_id: User.second.id, course_id: basic_math.id , content: "#{User.all[6].name} was very reliable and well educated to tutor my child. He was a wonderful help!", rating: 4)
review3 = Review.find_or_create_by(customer_id: User.third.id, course_id: reading.id, content: "#{User.all[7].name} is a wonderful tutor. I found her to be very calm, friendly and helpful.", rating: 4)
review4 = Review.find_or_create_by(customer_id: User.fourth.id, course_id: chemistry.id, content: "#{User.all[8].name} is such a wonderful tutor, and great with young students! Would highly recommend!", rating: 5)
review5 = Review.find_or_create_by(customer_id: User.fifth.id, course_id: violin.id, content: "#{User.all[9].name} was an excellent teacher for my child. He genuinely loves to come in and learn how to play the violin!", rating: 5)
