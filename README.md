Bugs Fixed
===============
1) User can now add an apostrophe in the Bug Title and Description
2) User Can now Close an issue -- New Checkbox added at Creation (retrospective bug logging) and Edit
3) Edit Screen now persists any Changes to the Description
4) Dates are now displayed in the Users Timezone
5) Added an About Page
6) Register Page has Email Check -- On Success the data is stored in the database and no more (See unable to deliver below)
7) Dashboard Page created that returns Bug Stats

Unable to Complete
===================
1) Authentication and Authorisation -- I went down the Home Grown Server Auth and then realised my mistake -- oAuth should have been used --- In the End i ran out of time and Energy !!
2) User Friendly REST End Point Messages
3) Ability to assign bugs to users, and for bugs to have creators


Installation
===============
Kindly replace the Python Files in your Environment with these -- i have not used any new packages 
Kindly Replace the JS files with these files
Kindly replace the database with this one as i have seeded it with some back dated bugs to generate dashboard stats
