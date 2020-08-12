var ball;
var database;
var position;

function setup(){
    //initialising the database
    database = firebase.database();
      console.log("database"+ database);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    //creating the reference withe database
    var myBallPosition = database.ref("ball/position");
    //giving the data from the database
    myBallPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}


function readPosition(data){
    //used for getting data from the datbase
    position = data.val();
    console.log("hello");
    ball.x = position.x;
    ball.y = position.y;
}

function showError(){
    console.log("error in writing to the database");
}

function writePosition(x,y){
    //used for writing the data in the database
    database.ref("ball/position").set({"x":position.x+x,"y":position.y+y});

}