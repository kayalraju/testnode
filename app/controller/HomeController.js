
const userdata=[
    {
        name:"sachin",
        age:21
    },
    {
        name:"sachin",
        age:21
    },
    {
        name:"sachin",
        age:21
    },
    {
        name:"sachin",
        age:21
    },
    {
        name:"sachin",
        age:21
    },
    {
        name:"sachin",
        age:21
    },
    {
        name:"sachin",
        age:21
    },
    {
        name:"sachin",
        age:21
    },
    {
        name:"sachin",
        age:21
    },
    {
        name:"sachin",
        age:21
    },
    {
        name:"sachin",
        age:21
    },
    {
        name:"sachin",
        age:21
    },
    {
        name:"sachin",
        age:21
    }
]

class HomeController{

   

    async home(req,res){
        try{
            res.render('home',{
                title:"home page",
                data:userdata
            })

        }catch(err){
            console.log(err);
            
        }
    }

    async create(req,res){
        try{

        }catch(err){
            console.log(err);
            
        }
    }
}


module.exports=new HomeController()