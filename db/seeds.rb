# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'Mike Tyson', email: 'boxyouup@gmail.com', password: 'Lisp66', user_image:'https://www.biography.com/.image/t_share/MTE1ODA0OTcxODA5NzM2MjA1/mike-tyson-9512980-2-402.jpg')
User.create(name: 'Jillian Michaels', email: 'girlsrule@gmail.com', password: 'imbetterthanyou23', user_image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jillian-michaels-attends-hollywood-unites-for-the-5th-news-photo-602420292-1550077441.jpg')
User.create(name: 'Shaun T', email: 'insanity123@gmail.com', password: 'strongbuns43', user_image:'https://magarticles.magzter.com/articles/13294/236690/59a601c2bde51/SHAUN-T-LETS-NOTHING-STOP-HIM.jpg')
User.create(name: 'Joe Wicks', email: 'imsohandsome@gmail.com', password: 'lookatmyabs', user_image:'https://magarticles.magzter.com/articles/13294/236690/59a601c2bde51/SHAUN-T-LETS-NOTHING-STOP-HIM.jpg')
User.create(name: 'Massy Arias', email: 'armslikearias@gmail.com', password: 'buttkicker43', user_image: 'https://static1.squarespace.com/static/53fba539e4b0a52701b62eb4/556606a7e4b03db69572f6fa/5a541cb8652deace1b5c432c/1591383176305/MassyArias_00514e.jpg?format=1500w')


Trail.create(name: 'Breakneck Mountain', difficulty: 'hard', travel_time_from_NYC: 81, length: 6, trail_image: 'https://www.nynjtc.org/sites/default/files/styles/hike_park_destination_page/public/hotw/BreakneckRidgePanorama_EduardoGil2014.jpg?itok=KOE4oHkO', user_id: 3)
Trail.create(name: 'Anthonys Nose', difficulty: 'easy', travel_time_from_NYC: 46, length: 4, trail_image: 'https://hikethehudsonvalley.com/wp-content/uploads/2015/05/Spring2014_RWAN_955.jpg', user_id: 3)
Trail.create(name: 'Lemon Squeeze', difficulty: 'moderate', travel_time_from_NYC: 51, length: 7, trail_image: 'https://www.scenichudson.org/wp-content/uploads/2019/10/OA_Mohonk-Mt-House-Lemon-Labyrinth_imaginelovinglife.com_-1400x933.jpg', user_id: 3)
Trail.create(name: 'Stairway To Heaven', difficulty: 'moderate', travel_time_from_NYC: 69, length: 9, trail_image: 'https://326193.smushcdn.com/137681/wp-content/uploads/2019/12/Pinwheel-Vista-Hero.jpg?lossy=1&strip=1&webp=1', user_id: 4)
Trail.create(name: 'Walkway Over The Hudson', difficulty: 'easy', travel_time_from_NYC: 97, length: 10, trail_image: 'https://i.pinimg.com/originals/eb/7f/e1/eb7fe10a2b0b3ce2e25a6dc877bc0545.jpg', user_id: 1)
Trail.create(name: 'Storm King', difficulty: 'hard', travel_time_from_NYC: 55, length: 6, trail_image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Storm_King_mountain_as_viewed_from_top_of_Break_Neck_Ridge.JPG', user_id: 2)
Trail.create(name: 'Alander Mountain', difficulty: 'moderate', travel_time_from_NYC: 123, length: 8, trail_image: 'https://hikethehudsonvalley.com/wp-content/uploads/2012/03/alander-Banner-2.jpg', user_id: 5)
Trail.create(name: 'Bash Bish Falls', difficulty: 'hard', travel_time_from_NYC: 125,length: 3, trail_image: 'https://images.world-of-waterfalls.com/Bash_Bish_Falls_034_09292013.jpg', user_id: 5)
Trail.create(name: 'Bebe Hill Fire Tower', difficulty: 'easy', travel_time_from_NYC: 130, length: 2, trail_image: 'https://hikethehudsonvalley.com/wp-content/uploads/2016/08/BeebeHill_0082.jpg', user_id: 1)
Trail.create(name: 'Brace Mountain', difficulty: 'hard', travel_time_from_NYC: 118, length: 6, trail_image: 'https://static1.squarespace.com/static/53b6ec86e4b09a1fb529c6b8/53b6ecd6e4b01e06b37baecc/5adff39303ce64ffc8091f91/1524694046817/PB254957.JPG?format=1500w', user_id: 1)


Comment.create(comment: 'This hike was so hard I thought I was going to die! But the view was worth it', user_id: 1, trail_id: 4)
Comment.create(comment: 'It was so easy I fell asleep half way. I dont recommend this hike for someone who wants to sweat', user_id: 3, trail_id: 8 )
Comment.create(comment: 'Im so happy this hike was posted. It was a great find. I do recommend putting ALOT of bug spray on though.', user_id: 2, trail_id: 4 )
Comment.create(comment: 'I do not recommend this trail. IT IS TRASH!', user_id: 4, trail_id: 6 )
Comment.create(comment: 'The falls were so beautiful. Make sure you bring your swim wear!', user_id: 5, trail_id: 8 )
Comment.create(comment: 'This was my favorite find on this app!', user_id: 1, trail_id: 8 )
Comment.create(comment: 'I proposed to my girlfriend here, I absolutely recommend to visit. Its so pretty and the hike up isnt that hard.', user_id: 4, trail_id: 8 )