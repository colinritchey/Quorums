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
user1 = User.create!(username: "Bill", password: "password", img_url: "http://res.cloudinary.com/diu6roixv/image/upload/v1492379378/user-f027-user-male-man-business-icon-512x512-clipart-best-user-clipart-400_400_qd1ggo.png" )
user2 = User.create!(username: "Jon Hunter", password: "hunter12", img_url: "http://res.cloudinary.com/diu6roixv/image/upload/v1492382639/dog-icon_zt2x3t.svg")
user3 = User.create!(username: "Alex Leeroy", password: "#7sYsk88", img_url: "http://res.cloudinary.com/diu6roixv/image/upload/v1492382940/black-cat-icon2_hao6ts.png")
user4 = User.create!(username: "cool_guy", password: "cooler_guy", img_url: "http://res.cloudinary.com/diu6roixv/image/upload/v1492382008/modern-male-user-with-sunglasses_icon-icons.com_68293_hytzzs.png")
user5 = User.create!(username: "forest_18", password: "longpassword", img_url: "http://res.cloudinary.com/diu6roixv/image/upload/v1492379487/user-clipart-dagobert83_female_user_icon_dbi6u8.png")
user6 = User.create!(username: "PM_ME_YOUR_QUESTIONS", password: "palidrone", img_url: "http://res.cloudinary.com/diu6roixv/image/upload/v1492381881/Riddler-icon_sm0lzf.png")
user7 = User.create!(username: "Most Interesting Man", password: "normal_password", img_url: "http://res.cloudinary.com/diu6roixv/image/upload/v1492381510/atomix_user31_p8mwbj.png")

Tag.delete_all

#list of tags
t1 = Tag.create!(name:"Programming")
t2 = Tag.create!(name:"Internet")
t3 = Tag.create!(name:"Space")
t4 = Tag.create!(name:"Technology")
t5 = Tag.create!(name:"Cooking")
t6 = Tag.create!(name:"Hiking")
t7 = Tag.create!(name:"Political")
t8 = Tag.create!(name:"Film")
t9 = Tag.create!(name:"Financial")
t10 = Tag.create!(name:"Biology")

guest.tag_ids = [t1.id, t3.id, t4.id, t6.id, t9.id]

user1.tag_ids = [t1.id, t3.id, t6.id, t7.id]
user2.tag_ids = [t2.id, t3.id, t6.id, t7.id]
user3.tag_ids = [t1.id, t4.id, t5.id, t10.id]
user4.tag_ids = [t1.id, t3.id, t9.id, t10.id]
user5.tag_ids = [t2.id, t8.id, t7.id, t9.id]
user6.tag_ids = [t2.id, t4.id, t6.id, t10.id]
user7.tag_ids = [t1.id, t3.id, t5.id, t7.id]

Question.delete_all
Tagging.delete_all

#topic: programming questions
q1 = Question.create!(title: "Hello World?", body: "sample body", user_id: user1.id)
Tagging.create(tag_id: t1.id, question_id: q1.id)
Tagging.create(tag_id: t2.id, question_id: q1.id)

q2 = Question.create!(title: "Should programming be taught at an earlier age?", body: "", user_id: user2.id)
Tagging.create(tag_id: t1.id, question_id: q2.id)

#topic: internet questions
q3 = Question.create!(title: "Is it Quorums or Quora?", body: "", user_id: user2.id)
Tagging.create(tag_id: t2.id, question_id: q3.id)

q4 = Question.create!(title: "What was the image on the Log in page?", body: "I really like it", user_id: user2.id)
Tagging.create(tag_id: t2.id, question_id: q4.id)

#topic: space questions
q5 = Question.create!(title: "If we took a picture of Earth from the Moon, why can't we see sunlight anywhere?", body: "The first time I read your question I said: WOW!

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

Tagging.create(tag_id: t3.id, question_id: q5.id)
Tagging.create(tag_id: t4.id, question_id: q5.id)

q6 = Question.create!(title: "Is space exploration a waste of money?", user_id: user7.id, body: "I absolutely HATE this question!  Why?  It's obvious to me you have simply read someone else's BS account that states space exploration is a waste.  The statement is so far from the truth it disgusts me.  Let me see if I can briefly explain why.

Your ability to post the question in the first place, and perhaps read my answer on your smart phone in your part of our world, results from transmission satellites placed round the globe by technology developed through our space program.  First developed in the sixties, our space program (along with Russia, at that time the ONLY 2 countries even attempting such things) was in its infancy.

When someone you know grabs a portable drill, and sticks in a freshly charged battery, enabling them to work on a home project or repair a fence after a big storm, encourage them to look toward the sky, hands extended upward in reverence and yell, 'Thank you NASA,' for this useful technology developed during the Apollo program.

If you have a niece or a nephew, fortunate enough to have invisible braces to help straighten their teeth, but not mar their beautiful, cherubic smile, you should shake your head in awe and prayerfully say, 'Thank you NASA!'

If your grandma Martha, has had a hip replacement and that hip joint is covered with a light coating of metallic gold, allowing her to walk easier than ever before, you should lift your hands to the heavens and yell, 'Thank you NASA!'  Then tell grandma you love her!

During the Apollo program, the US spent about 1.75 cents per tax dollar on space. From about 1983 until 2013, the value hovered around 3/4 cents per tax dollar.  Today, that value is less than 1/2 cent per tax dollar.  Depending on your source, the payback cited to humans on earth (not just Americans) was 7 to 1!  Some argue 20 to 1!  Who today would not take a 7 to 1 return on investment?  Very few I'm guessing.  Our problem is that we want instant gratification from any investment we make.  We are not willing (Americans anyway) to wait for the payback over time.  If your DVR breaks, what do you do?  Most go purchase a new one, if it is within their means.

Do you need even more information for me to convince you to change your tune and agree that space exploration is an investment, and NOT a waste of taxpayer dollars?  Just go to Benefits to You and start reading.  You'll be surprised at what you might find.  And when you've done a little more research, cast your eyes to the skies, and following my advice to keep lookin' up, take a few seconds to yell, 'Thank you NASA!''  You'll be glad you did!")

Tagging.create(tag_id: t3.id, question_id: q6.id)
Tagging.create(tag_id: t4.id, question_id: q6.id)
#topic: technology questions

q7 = Question.create!(user_id: user3.id, title: "What is the future of web development in 2017?", body: "")
q8 = Question.create!(user_id: user5.id, title: "What are some mind-blowing facts related to technology?", body: "")
q9 = Question.create!(user_id: user6.id, title: "What are the main security problems and solutions for enterprise mobile apps?", body: "Mobile malware exploits vulnerabilities or bugs in the coding of the mobile apps. Applying security best practices to mobile app development, including the use of source code scanning tools, can help make mobile apps resilient to such an attack. It is also important to analyze code from third parties, or any app that is allowed to coexist on phones used by employees. In this case, executables rather than source code should be scanned.")
q10 = Question.create!(user_id: user1.id, title: "Why did the internet get so popular so quickly?", body: "I actually don't remember the Internet getting popular all that quickly. My first real exposure to the Internet was in 1992, when I started at UC Davis, and while the Internet was well established by then, it was a very well kept secret outside of academia and the military. There were virtually no commercial applications for the Internet back in the early 1990s, although there were plenty of commercial online services and online databases, such as CompuServe, Prodigy, AOL, Westlaw, Lexis/Nexis, etc., that did not use the Internet as their backbone. Indeed, the term 'Internet' had not yet come into vogue, with the news media constantly referring to the 'Information Superhighway' as something that was still years away.")

Tagging.create(tag_id: t4.id, question_id: q7.id)
Tagging.create(tag_id: t4.id, question_id: q8.id)
Tagging.create(tag_id: t4.id, question_id: q9.id)
Tagging.create(tag_id: t4.id, question_id: q10.id)
Tagging.create(tag_id: t2.id, question_id: q10.id)
#topic: cooking questions

q11 = Question.create!(user_id: user4.id, title: "What is a Quiche?", body: "It looks really good, I want to try and make it")
q12 = Question.create!(user_id: user5.id, title: "I ran out of flour, what is a good replacement?", body: "")
q13 = Question.create!(user_id: user6.id, title: "What our your favorite things to cook?", body: "I'm a fan of steak and eggs")

Tagging.create(tag_id: t5.id, question_id: q11.id)
Tagging.create(tag_id: t5.id, question_id: q12.id)
Tagging.create(tag_id: t5.id, question_id: q13.id)


#topic: hiking questions
q14 = Question.create!(user_id: user7.id, title: "How long of a hike is Mt. Diablo?", body: "Some friends from out of town want to hike it")
q15 = Question.create!(user_id: user1.id, title: "What are the peaks in the rim of the bay hikes?", body: "")

Tagging.create(tag_id: t6.id, question_id: q14.id)
Tagging.create(tag_id: t6.id, question_id: q15.id)

#topic: political questions
q16 = Question.create!(user_id: user2.id, title: "Should I be worried about Net Neutrality?")
q17 = Question.create!(user_id: user3.id, title: "What does the Vice President do exactly?", body: "(S)He sits in on the House of Reps. but what else?")
q18 = Question.create!(user_id: user4.id, title: "What is a filibuster?")

Tagging.create(tag_id: t7.id, question_id: q16.id)
Tagging.create(tag_id: t2.id, question_id: q16.id)
Tagging.create(tag_id: t7.id, question_id: q17.id)
Tagging.create(tag_id: t7.id, question_id: q18.id)

#topic: film questions
q19 = Question.create!(user_id: user5.id, title: "What is your favorite film?", body: "Mine is Blade Runner")
q20 = Question.create!(user_id: user1.id, title: "Is Arrival any good?", body: "I'm usually not into scifi but I keep hearing great reviews about this")
q21 = Question.create!(user_id: user4.id, title: "Do you think Super Hero movies are getting stale?")

Tagging.create(tag_id: t8.id, question_id: q19.id)
Tagging.create(tag_id: t8.id, question_id: q20.id)
Tagging.create(tag_id: t3.id, question_id: q20.id)
Tagging.create(tag_id: t8.id, question_id: q21.id)

#topic: financhial
q22 = Question.create!(user_id: user1.id, title: "When should I worry about my credit score?")
q23 = Question.create!(user_id: user3.id, title: "What is a 401-k?")
q24 = Question.create!(user_id: user2.id, title: "When should I start saving for retirement?", body: "Is 45 a little too late...")

Tagging.create(tag_id: t9.id, question_id: q22.id)
Tagging.create(tag_id: t9.id, question_id: q23.id)
Tagging.create(tag_id: t9.id, question_id: q24.id)

#topic: biology
q25 = Question.create!(user_id: user7.id, title: "How fast can a falcon fly?", body: "I hear it's over 200mph")
q26 = Question.create!(user_id: user3.id, title: "Why were canaries used when mining?")
q27 = Question.create!(user_id: user1.id, title: "How do I take care of my cacti?")

Tagging.create(tag_id: t10.id, question_id: q25.id)
Tagging.create(tag_id: t10.id, question_id: q26.id)
Tagging.create(tag_id: t10.id, question_id: q27.id)

Answer.delete_all

#Answers to question 1
a1 = Answer.create!({body: "Hello!", user_id: user2.id, question_id: q1.id})
a2 = Answer.create!({body: "Hello World!", user_id: user3.id, question_id: q1.id})

#Answers to question 3
a3 = Answer.create!({body: "I believe both are acceptable", user_id: user4.id, question_id: q3.id})
a4 = Answer.create!({body: "Quorum is singular for Quora", user_id: user2.id, question_id: q3.id})
a5 = Answer.create!({body: "Quorums", user_id: user5.id, question_id: q3.id})

#Answers to question 4
a6 = Answer.create!({body: "Its a Monet Winter", user_id: user5.id, question_id: q4.id})
a7 = Answer.create!({body: "Some painting from a french person", user_id: user7.id, question_id: q4.id})

#Answers to question 5
a8 = Answer.create!({body: "I'm not a man-rated systems expert. These are just the obvious objective hazards. You should ask any of the ex-astronauts or Robert.

You have to deal with the vacuum of space.

You will have various variable levels of radiation (background to solar flares and others).

You have to deal with object strike (generally remove).

You have to deal with flammables (and oxidizers), not just flame but combustion products.

You have to be aware of electrical shock hazards.

You need to watch out for problems of 0-G which might have otherwise been more trivial in 1-G.

You have to be mindful for confined space problems.

This is probably a quick place holder for more knowledgeable people.", user_id: user3.id, question_id: q5.id})

# answers for Question 6

a9 = Answer.create!(user_id: user3.id, question_id: q6.id, body: "What you said in your details is the primary reason they do: they feel the money should be spent on Earth. But in fact space exploration does solve a lot of problems we have here on Earth. Weather satellites and satellite telephones save lives every day. Satellite television enables remote parts of the world to be aware of what’s going on elsewhere, rather than remaining isolated and ignorant.

Space exploration really doesn’t cost much, either. In the entire history of NASA, it has only cost about 1.75 times what the American military costs in one year.")

a10 = Answer.create!(user_id: user4.id, question_id: q6.id, body: "You missed the point. Setting aside for a moment the fact that NASA's budget comprises about half a cent of each dollar spent in the federal budget, the payoff has been huge in help on earth.

Ultralight and flexible thermal shielding (Mylar) has saved countless lives. Everything from recycling water from human waste to GPS and bioengineered organs that may one day make organ waiting lists obsolete began in space.

Climate change is best demonstrated with images from space. Astronauts experience bone density loss like the elderly. Research on these healthy active subjects could save many of us from broken hips and worse as we age.

It should go without saying, but most of our high tech appliances, from computers to remote sensing used to find survivors of catastrophes owes at least part of their creation to groundwork in the space program.

The mere process of conquering the extreme environment of space teaches us so many lessons that are eventually applied here on the ground. You may argue that we should innovate those solutions on the ground. It's a false dichotomy though. It is the challenge of solving the unknown puzzles presented in this exploration that makes us look for radical new solutions. Solving the mundane problems on earth, though noble, does not really place the inadequacy of the current solutions on display tangibly. The challenge of the unknown forces us to abandon preconceptions. From that extreme exercise we will eventually find myriads of solutions to the unaddressed issues at home.")

#answer for Question 7
a11 = Answer.create!(user_id: user6.id, question_id: q7.id, body: "Artificial intelligence programs are already used successfully by Google and Wikipedia, the technology is more than within our grasp to allow us to develop software which can think and act as a human without requiring the manpower.")

#answer for Question 8
a12 = Answer.create!(user_id: user2.id, question_id: q8.id, body: "Artificial intelligence programs are already used successfully by Google and Wikipedia, the technology is more than within our grasp to allow us to develop software which can think and act as a human without requiring the manpower.")
a13 = Answer.create!(user_id: user2.id, question_id: q8.id, body: "Bots are there to make our life easier and our experiences more personable (or at least they should). Bots are interesting from various standpoints and use cases.

Chris Messina already predicted in 2016 that 2016 will be the year of conversational commerce. As messaging platforms become more and more popular, its role and influence on web design and web development can no longer be neglected.

Therefore the design and development of conversational UI will become an important topic for developers in 2017.")

# answers for Question 9

a14 = Answer.create!(user_id: user5.id, question_id: q9.id, body: "End point security is the root of all concerns as enterprise applications mobilize over time. Proper end point security mitigates concerns around lost devices, malware/viruses, careless employees, etc.
")

a15 = Answer.create!(user_id: user2.id, question_id: q9.id, body: "The majority of mobile applications - whether in the Android, iOS or Windows Phone ecosystems - will not have basic business-acceptable security protocols in place. Part of the issue with mobile app security is that employees download apps that access enterprise assets or perform business functions, but the security of the apps is not adequate to protect against attacks or meet the security requirements set out by company policy.")

# answers for Queston 10

a16 = Answer.create!(user_id: user7.id, question_id: q10.id, body: "The Internet did not get popular all that quickly. Rather, awareness of the Internet came to most people overnight, long after the technical protocols that make the Internet go had been established and tested. Meanwhile, technology evangelists such as myself had to patiently and persistently explain to people how the Internet works and how important it was eventually going to be. And then one day, a quarter of a century later . . . BAM! . . . the Internet was finally something that everyone took for granted.")

# answers for Queston 11

a17 = Answer.create!(user_id: user3.id, question_id: q11.id, body: "Quiche has a pastry crust and a filling of eggs and milk or cream which, when baked, becomes a custard. It can be made with vegetables, meat and seafood.")

# answers for Question 12

a18 = Answer.create!(user_id: user4.id, question_id: q12.id, body: "Like gluten-free baking mixes, there are many alternative flours that can be used instead of wheat flour. These include tapioca flour, corn flour, sorghum, quinoa, rice flour, arrowroot, amaranth, buckwheat, chickpea (garbanzo) flour, almond flour, potato flour, teff and soy flour.")
a19 = Answer.create!(user_id: user5.id, question_id: q12.id, body: "Ask a neighbor")

# answers for Question 13
a20 = Answer.create!(user_id: user7.id, question_id: q13.id, body: "Quiche")
a21 = Answer.create!(user_id: user1.id, question_id: q13.id, body: "Chocolate Cake")
a22 = Answer.create!(user_id: user2.id, question_id: q13.id, body: "Steak and eggs")

# answers for question 14
a23 = Answer.create!(user_id: user2.id, question_id: q14.id, body: "It's about 6 1/2 hours")
a24 = Answer.create!(user_id: user3.id, question_id: q14.id, body: "13.2 miles")

# answers for quesiton 15
a24 = Answer.create!(user_id: user5.id, question_id: q15.id, body: "Mt. St. Helena,	Mt. Wittenburg,	Mt. Tamalpais,	Mt. Diablo,	Mission Peak, and	Pinnacles NM")

# answers for question 16
a25 = Answer.create!(user_id: user3.id, question_id: q16.id, body: "It is the principle that Internet service providers should enable access to all content and applications regardless of the source, and without favoring or blocking particular products or websites.")

# answers for question 17
a26 = Answer.create!(user_id: user7.id, question_id: q17.id, body: "The Constitution gives the vice president the role of presiding over the Senate, and voting in the Senate if there is a tie. The vice president's only other formal responsibility is taking over the presidency if the president dies.")

# answers for question 18
a27 = Answer.create!(user_id: user3.id, question_id: q18.id, body: "It is an action such as a prolonged speech that obstructs progress in a legislative assembly while not technically contravening the required procedures.")

# answers for question 19
a28 = Answer.create!(user_id: user4.id, question_id: q19.id, body: "Arrival")
a29 = Answer.create!(user_id: user7.id, question_id: q19.id, body: "Logan")
a30 = Answer.create!(user_id: user5.id, question_id: q19.id, body: "Star Wars: Empire Strikes Back")

#answers for question 20
a31 = Answer.create!(user_id: user4.id, question_id: q20.id, body: "Arrival is more about language than a cheezy scifi movie")

# answers for question 21
a32 = Answer.create!(user_id: user1.id, question_id: q21.id, body: "This is really dependent on your opinion")

# answers for question 22
a34 = Answer.create!(user_id: user7.id, question_id: q22.id, body: "Usually when you are making a load or buying a house")

# answers for question 23
a35 = Answer.create!(user_id: user1.id, question_id: q23.id, body: "A 401(k) is a retirement savings plan sponsored by an employer. It lets workers save and invest a piece of their paycheck before taxes are taken out. Taxes aren't paid until the money is withdrawn from the account.")

# answers for quesiton 24
a36 = Answer.create!(user_id: user2.id, question_id: q24.id, body: "Say you start at age 25, and put aside $3,000 a year in a tax-deferred retirement account for 10 years - and then you stop saving - completely. By the time you reach 65, your $30,000 investment will have grown to more than $338,000, (assuming a 7% annual return), even though you didn't contribute a dime beyond age 35.")

# answers for question 25
a37 = Answer.create!(user_id: user1.id, question_id: q25.id, body: "320 km/h")
a38 = Answer.create!(user_id: user5.id, question_id: q25.id, body: "200 mph")

# answers for question 26
a39 = Answer.create!(user_id: user7.id, question_id: q26.id, body: "Canaries were once regularly used in coal mining as an early warning system. Toxic gases such as carbon monoxide or methane in the mine would kill the bird before affecting the miners.")

# answers for question 27
a40 = Answer.create!(user_id: user3.id, question_id: q27.id, body: "Just bury the pot so they can be removed and taken in for the winter. Give the plants a small amount of water ever two or three weeks until they root. Then let nature pay the water bill. Feed once a year with a plant food like 10-10-10 or good house plant food.")


Comment.delete_all

# Comments for question 1
c1 = Comment.create!({body: "A classic", user_id: user3.id, question_id: q1.id })
c2 = Comment.create!({body: "Oldy but goody", user_id: user2.id, question_id: q1.id })

# Comments for question 2
c3 = Comment.create!({body: "This question isn't very detailed", user_id: user3.id, question_id: q2.id })
c4 = Comment.create!({body: "Agreed, but I think this is a test question", user_id: user4.id, question_id: q2.id})
c5 = Comment.create!({body: "The mods should probably remove this", user_id: user2.id, question_id: q2.id })

#Comments for question 3
c6 = Comment.create!({body: "Are you allowed to ask that question here?", user_id: user7.id, question_id: q3.id })

#Comment for question 4
c7 = Comment.create!({body: "Claude Monet was a true treasure", user_id: user3.id, question_id: q4.id })

#Comments for question 5
c8 = Comment.create!({body: "This was a interesting read, thank you", user_id: user7.id, question_id: q5.id })
c9 = Comment.create!({body: "First!", user_id: user2.id, question_id: q5.id })
c10 = Comment.create!({body: "Hate to disappoint you but someone beat you to it", user_id: user1.id, question_id: q5.id })

#Comments for question 6
c11 = Comment.create!(user_id: user1.id, question_id: q6.id, body: "Being a huge space fan and economist at the same time is sometimes hard. This is one of the situations.
For example, there is an economic concept called opportunity cost - in this case the tax money spent on NASA are not the only cost of the space programme, the other costs are the things that did not happen, because of money and resources were spent on space programme. I don't think that best brains, who work with NASA, would just sit at home if there was no space programme. Probably the structure of the innovation would be different - in some areas it would be slower, some things would come earlier than they did. And maybe innovation that is not just a by-product of something could bring more practical things in the end.
So while it is definitely not a waste of taxpayer's money, its role in everyday life is vastly overestimated by ignoring the alternatives.")
c12 = Comment.create!(user_id: user5.id, question_id: q6.id, body: "Thank you NASA!     ...and thank you Clayton for sharing your experiences with us here on Quora and with your new book 'The Ordinary Spaceman: From Boyhood Dreams to Astronaut'. I just purchased it and look forward to reading it!")

#Comments for question 7
c13 = Comment.create!(user_id: user4.id, question_id: q7.id, body: "ES7? if that will ever come out")
c14 = Comment.create!(user_id: user6.id, question_id: q7.id, body: "Something with javascript")

#Comments for question 8
c15 = Comment.create!(user_id: user7.id, question_id: q8.id, body: "MIND BLOWN")

#Comments for question 9
c16 = Comment.create!(user_id: user1.id, question_id: q9.id, body: "This seems like an important question to answer")
c17 = Comment.create!(user_id: user3.id, question_id: q9.id, body: "Eh, ignorance is bliss")

#Comments for question 10
c18 = Comment.create!(user_id: user3.id, question_id: q10.id, body: "cat videos probably")

#Comments for question 11
c19 = Comment.create!(user_id: user4.id, question_id: q11.id, body: "one of my favorite dishes")

#Comments for question 14
c20 = Comment.create!(user_id: user3.id, question_id: q14.id, body: "A great hike, highly recommend")

#Comments for question 16
c21 = Comment.create!(user_id: user3.id, question_id: q16.id, body: "probably")
c22 = Comment.create!(user_id: user7.id, question_id: q16.id, body: "Depends how often you surf the web")

#Comments for question 17
c23 = Comment.create!(user_id: user4.id, question_id: q17.id, body: "Takes the President's role if they die")

#Comments for question 19
c24 = Comment.create!(user_id: user4.id, question_id: q19.id, body: "You are all wrong! Clearly the Princess Bride is the best!")

#Comments for question 21
c25 = Comment.create!(user_id: user5.id, question_id: q21.id, body: "Yes!")
c26 = Comment.create!(user_id: user6.id, question_id: q21.id, body: "No, there are still enough variety")

#Comments for question 22
c27 = Comment.create!(user_id: user3.id, question_id: q22.id, body: "Are you planning on buying a house or something?")

#Comments for question 24
c27 = Comment.create!(user_id: user7.id, question_id: q24.id, body: "Ooh, yeah maybe you shoulda started sooner")
c27 = Comment.create!(user_id: user1.id, question_id: q24.id, body: "Now, its never too late to start")

#Comments for question 25
c27 = Comment.create!(user_id: user5.id, question_id: q25.id, body: "Falcons are my favorite animal")

#Comments for question 26
c27 = Comment.create!(user_id: user4.id, question_id: q26.id, body: "Pretty sure they don't use them anymore")

#Comments for question 27
c27 = Comment.create!(user_id: user4.id, question_id: q27.id, body: "I have a friend who grows his own, I can text him")
c27 = Comment.create!(user_id: user6.id, question_id: q27.id, body: "Isn't it 'cactus'")
c27 = Comment.create!(user_id: user1.id, question_id: q27.id, body: "Both are acceptable")
