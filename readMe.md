# Restful Routes
| # | Action | URL | HTTP Verb | Mongoose Method |
| ----------- | -------------| -------------- | --------------| --------------|
| 1 | Index | /access/ <br> /edu/ <br> /profile/ <br> /user/ <br> /work/ | GET | Accessibility.find() <br> Education.find() <br> Profile.find() <br> User.find() <br> WorkExperience.find()|
| 2 | Show | /access/:id <br> /edu/:id <br> /profile/:id <br> /user/:id <br> /work/:id | GET | Accessibility.findById() <br> Education.findById() <br> Profile.findById() <br> User.findById() <br> WorkExperience.findById()|
| 3 | Create | /access/ <br> /edu/ <br> /profile/ <br> /user/ <br> /work/ | POST | Accessibility.create(req.body) <br> Education.create(req.body) <br> Profile.create(req.body) <br> User.create(req.body) <br> WorkExperience.create(req.body)|
| 4 | Edit | /access/:id/edit <br> /edu/:id/edit <br> /profile/:id/edit <br> /user/:id/edit <br> /work/:id/edit | GET | Accessibility.findById() <br> Education.findById() <br> Profile.findById() <br> User.findById() <br> WorkExperience.findById()|
| 5 | Update | /access/:id <br> /edu/:id <br> /profile/:id <br> /user/:id <br> /work/:id | PUT | Accessibility.findByIdAndUpdate() <br> Education.findByIdAndUpdate() <br> Profile.findByIdAndUpdate() <br> User.findByIdAndUpdate() <br> WorkExperience.findByIdAndUpdate()|
| 6 | Destroy | /access/:id <br> /edu/:id <br> /profile/:id <br> /user/:id <br> /work/:id | DELETE | Accessibility.findByIdAndDelete() <br> Education.findByIdAndDelete() <br> Profile.findByIdAndDelete() <br> User.findByIdAndDelete() <br> WorkExperience.findByIdAndDelete()|

# Project Goals
- User can sign-up
- User can login
- Info is stored in DB
- Info is protected
- User needs to look for jobs

# Project Struggles
- Incorporating multiple models

# ERD

<img src="https://i.imgur.com/rs1ANBV.png" />

# Project Collaborators
- Anthony Ashcraft - https://github.com/anthonyash91
- Peter McGibney - https://github.com/petermc87
- Eddy Cueto - https://git.generalassemb.ly/ecueto
- Darya Abdullahzadeh - https://github.com/daryacoding
- Aboubacar Zoungrana - https://github.com/sompagnimdi
- Yevangelina Gavrilov - https://github.com/yevagav
- Dylan Page - https://github.com/dylanpage82
- Josue Cuellar - https://github.com/Josue650
- Rudy Landin - https://github.com/dolfo97
- Anthony Ingianni - https://github.com/aingianni