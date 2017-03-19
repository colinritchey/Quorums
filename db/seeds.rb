# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all

#Guest Account
guest = User.create!(username: "guest", password: "password")

#Sample Users
user1 = User.create!(username: "Bill", password: "password")
user2 = User.create!(username: "Jon Hunter", password: "hunter12")
user3 = User.create!(username: "Alex Leeroy", password: "#7sYsk88")
user4 = User.create!(username: "cool_guy", password: "cooler_guy")
user5 = User.create!(username: "forest_18", password: "longpassword")
user6 = User.create!(username: "PM_ME_YOUR_QUESTIONS", password: "palidrone")
user7 = User.create!(username: "Most Interesting Man", password: "normal_password")

Question.delete_all

#user 1 questions
q1 = Question.create!(title: "Hello World?", body: "sample body", user_id: user1.id)
q2 = Question.create!(title: "Empty body?", body: "", user_id: user1.id)

#user 2 questions
q3 = Question.create!(title: "Is it Quorums or Quora?", body: "", user_id: user2.id)
q3 = Question.create!(title: "What was the image on the Log in page?", body: "I really like it", user_id: user2.id)

#user 3 questions
q4 = Question.create!(title: "If we took a picture of Earth from the Moon, why can't we see sunlight anywhere?", body: "The first time I read your question I said: WOW!

I’m assuming you are a child, I’m just surprise how you were able to make a Quora account, you using your parent’s?

Anyway, these are the things you need to know, before you get entangled and stumble with yourself about that matter.All the things you see reflects or produces light (photons), and so the things you don’t see doesn’t reflect or produce light, i.e., black holes. But how do we see black holes—no we don’t, we just know because it blocks, disrupt, or bend the light that passes or which are supposed to be there, to it’s like a shadow. Does a shadow reflect or produce light? —no, it blocks the light.
Our eyes work by capturing light, and transmitting the signal via optic nerves to your brain. So if there is not light, you can’t see.
The surface of the moon reflects sun light, so you can see it during nigh time or even dusk.
The same also goes, with the image of the Earth as you can see it from the Moon.
When an object is partially covering the source of light, it casts a shadow to its back. Just try covering the light from your flashlight, it casts a shadow, right? That’s the same reason why we see half-moon, quarter moon, crescent moon. The shadow is curvy because the Earth and the Moon are both spherical.
In Earth we have a sky, or an atmosphere. This is what we see as the blue sky during day light. Of course the clouds are white.
The daytime sky on Earth is blue due to Nitrogen, the most abundant gas in our atmosphere, along with other gasses, but mostly Nitrogen. Nitrogen reflects blue light (actually indigo, but our eyes are not so much tune to seeing indigo, so we recognize it as blue) when sunlight hits the sky, so you see blue skies. During night time, there is no much light, so the skies are merely dark. But when the Moon in brightly shining, we can see dark bluish skies. Look up to the sky and see for your self.
So the sky is blue, because we have an atmosphere in the Earth. So why don’t we see a blue sky in the Moon. Because the Moon does not have an atmosphere[1] . That is why we can’t see a Sky while the picture is taken from the Moon. So what we are actually seeing is the Space without filters.
The Moon is mostly rocks and dust, and it doesn’t really look like the ones on Earth. As one, it has no atmosphere so all its face is exposed to the outer space. And we are only seeing one side of the Moon, because every time it rotates on its axis and revolves around Earth, the timing of the rotation makes to it that only one face will be fronting the Earth.
Most stars are not seen in the image due to the intensity of light reflected by the Earth, so that the light coming from it suppresses the light from the stars on the background. The same happens during daylight when the brightest thing up is only the Sun. Try it with your DSLR camera, and see it for yourself. First, point the lens of your camera towards a high intensity light. Take the photo, then look at the resulting image. Can you see the things on the background? You may be seeing few but most likely it is somehow hard to discern.
And don’t forget that the Universe is so enormous that there is no word properly describing it. See If the Moon Were Only 1 Pixel, so at least we can have the idea on how the solar system is already really disturbingly big, yet it is only a spec (understated) compared to the Universe. So some stars are really really far, and the light from it is not captured on camera.
Lastly, if you don’t use the long exposure on the camera, the dimmer lights can’t be captured. Try to take a photo of the night sky with a very short exposure. Most probably you can’t see the stars, but if you take time to make use of your longer light exposure, you camera will have time to absorb more and more light and thus capturing the dimmer lights.


", user_id: user3.id)

Comment.delete_all

c1 = Comment.create!({body: "comment top", user_id: user1.id, question_id: q1.id, parent_comment_id: nil})
c2 = Comment.create!({body: "comment nest 1", user_id: user2.id, question_id: q1.id, parent_comment_id: c1.id})
c3 = Comment.create!({body: "comment nest 2", user_id: user3.id, question_id: q1.id, parent_comment_id: c2.id})
c4 = Comment.create!({body: "comment nest 1 second", user_id: user4.id, question_id: q1.id, parent_comment_id: c1.id})
c5 = Comment.create!({body: "comment top 2", user_id: user2.id, question_id: q1.id, parent_comment_id: nil})
