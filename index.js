var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
  
  
}// this is the welcome message that people will be greeted by. This will include the persons name and //give them a number (in which their in line with)


function currentLine(NewLine) {
    var line = []
    if (NewLine.length === 0) {
      return "The line is currently empty."
    } 
   else {
      for(var i = 0; i < NewLine.length; i++) {
      line += (i + 1) + ". " + NewLine[i] + ", "  // += will add
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
    }
}

 // this function will check if someone is in line. in the case of no one being in line it will return                     // "the line is currently empty"
// === (means it equals to) this will check if the NewLine is equal to 0 
// i++ adds one... this whole line is seperated by ";"                                    
//(variable; condition (true or false); idiration)
// a slice will return it as an array === an array will be returned in order... an array is a single                        //variable

function nowServing(x) {
  if (x.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var name = x[0];
    x.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

// this will check if there is people to be served. if people to be served is equal to 0 it will return   //      the message "there is nobody waiting to be served"
// this else will see who is next to be served .   . splice ( 0,1) will start at 0