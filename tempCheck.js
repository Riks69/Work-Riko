function checkTemp(Temperatuur){
    if (Temperatuur <= 20  && Temperatuur >= 0){
        return -1
    } 
    else if (Temperatuur <= 40 && Temperatuur > 20){
        return 0
    } 
    else if (Temperatuur <= 60 && Temperatuur > 40){
        return 1
    } 
    
}
