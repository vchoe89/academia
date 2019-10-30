require 'faker'

User.destroy_all
15.times do
  name = Faker::Name.unique.name
  address = Faker::Address.street_address
  email = Faker::Internet.safe_email
  phone_number = Faker::PhoneNumber.cell_phone
  bday = Faker::Date.birthday(min_age: 18, max_age: 65)
  college = Faker::University.name

  User.find_or_create_by(name: name, address: address, email: email, phone_number: phone_number, birthday: bday, education: college)
end

# Review.destroy_all
# review1 = Review.find_or_create_by(user_id: user1.id, course_id: alegbra.id, content: "", rating: 5)
# review2 = Review.find_or_create_by(user_id: user2.id, course_id: basic_math.id , content: "", rating: 4)
# review3 = Review.find_or_create_by(user_id: user14.id, course_id: reading.id, content: "", rating: 4)
# review4 = Review.find_or_create_by(user_id: user12.id, course_id: chemistry.id, content: "", rating: 5)
# review5 = Review.find_or_create_by(user_id: user9.id, course_id: violin.id, content: "", rating: 5)

# Category.destroy_all
# math = Category.find_or_create_by(name: "Math")
# english = Category.find_or_create_by(name: "English")
# science = Category.find_or_create_by(name: "Science")
# music = Category.find_or_create_by(name: "Music")
# sports = Category.find_or_create_by(name: "Sports")
#
# Course.destroy_all
# alegbra = Course.find_or_create_by(name: "Algebra", instructor_name: (Faker::Name.unique.name), hourly_rate: 30, location: "Silver Spring, MD", category_id: math.id)
# calculus = Course.find_or_create_by(name: "Calculus", instructor_name: (Faker::Name.unique.name), hourly_rate: 35, location: "Pomotac, MD", category_id: math.id)
# basic_math = Course.find_or_create_by(name: "Basic Math", instructor_name: (Faker::Name.unique.name), hourly_rate: 25, location: "Bethesda, MD", category_id: math.id)
# basic_writing = Course.find_or_create_by(name: "Basic Writing", instructor_name: (Faker::Name.unique.name), hourly_rate: 30, location: "Germantown, MD", category_id: english.id)
# reading = Course.find_or_create_by(name: "Reading", instructor_name: (Faker::Name.unique.name), hourly_rate: 25, location: "Clarksburg, MD", category_id: english.id)
# advanced_writing = Course.find_or_create_by(name: "Advanced Writing", instructor_name: (Faker::Name.unique.name), hourly_rate: 35, location: "Aspen Hill, MD", category_id: english.id)
# chemistry = Course.find_or_create_by(name: "Chemistry", instructor_name: (Faker::Name.unique.name), hourly_rate: 30, location: "White Oak, MD", category_id: english.id)
# biology = Course.find_or_create_by(name: "Biology", instructor_name: (Faker::Name.unique.name), hourly_rate: 30, location: "Silver Spring, MD", category_id: science.id)
# basic_science = Course.find_or_create_by(name: "Basic Science", instructor_name: (Faker::Name.unique.name), hourly_rate: 30, location: "Wheaton, MD", category_id: science.id)
# violin = Course.find_or_create_by(name: "Private Violin Lessons", instructor_name: (Faker::Name.unique.name), hourly_rate: 25, location: "Cabin John, MD", category_id: science.id)
# cello = Course.find_or_create_by(name: "Private Cello Lessons", instructor_name: (Faker::Name.unique.name), hourly_rate: 20, location: "Silver Spring, MD", category_id: music.id)
# piano = Course.find_or_create_by(name: "Private Piano Lessons", instructor_name: (Faker::Name.unique.name), hourly_rate: 30, location: "North Bethesda, MD", category_id: music.id)
# singing = Course.find_or_create_by(name: "Private Singing Lessons", instructor_name: (Faker::Name.unique.name), hourly_rate: 45, location: "Potomac, MD", category_id: music.id)
# soccer = Course.find_or_create_by(name: "Private Soccer Lessons", instructor_name: (Faker::Name.unique.name), hourly_rate: 30, location: "Washington, DC", category_id: sports.id)
# swimming = Course.find_or_create_by(name: "Private Swimming Lessons", instructor_name: (Faker::Name.unique.name), hourly_rate: 35, location: "Chevy Chase, MD", category_id: sports.id)
# tennis = Course.find_or_create_by(name: "Private Tennis Lessons", instructor_name: (Faker::Name.unique.name), hourly_rate: 30, location: "Reston, VA", category_id: sports.id)
