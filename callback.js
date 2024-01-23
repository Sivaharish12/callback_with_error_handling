// Implementing the Callback with the Error Handling


const election_state="tamilnadu";
const minimum_age=18;

function checkstate(name_of_the_state,callback){
    setTimeout(()=>{
        let state=name_of_the_state.toLowerCase();
        if(state==election_state){
            callback(true);
        }
        else{
            throw new Error("The person must be in the elected state to vote for the election");
        }
    },3000);
    
}

function checkage(age,callback){
    setTimeout(()=>{
        if (age>=minimum_age){
            callback(true);
        }
        else{
            throw new Error('The age must be greater than 18 to vote for the Election');
        }

    },3000);
}

function State_Election(name_of_the_state,age,callback){
    setTimeout(()=>{
        checkstate(name_of_the_state,()=>{
            console.log("The state is verified");
            checkage(age,()=>{
                console.log("The age is verified");
                callback();
            });
        });
    });
}


user_state="TamilNadu";
user_age=20;
State_Election(user_state,user_age,()=>{
    setTimeout(()=>{
        console.log("You Vote is counted sucessfully");
    },2000)
    
});
