var mongoose=require('mongoose');
var bcrypt=require('bcryptjs');
var User=require('./models/user');
mongoose.connect('mongodb://localhost/login_database',{useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=> console.log('Connection Established'))
    .catch((err)=>console.log(err))

const seedAdmin = function(){
    bcrypt.genSalt(10,function(err,salt){
        const newUser = new User({
            name:"Admin",
            password: "Admin",
            email: "admin@gmail.com",
            profileimage:"noimage.jpg",
            uname: "Admin",
            contact: "0000000000",
            role:"admin"
        });
        bcrypt.hash(newUser.password,salt,function(err,hash){
            newUser.password= hash
            try{
                newUser.save();
                console.log("Admin Seeded  ",newUser);
            }
            catch(e){
                console.log(e);
            }
    
        });
    });
}

seedAdmin();