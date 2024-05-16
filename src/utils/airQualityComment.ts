export const airQualityComment = (aqi: number): string =>{
    let result = "test";
    const values = [30, 40, 50];

    if(Math.abs(aqi) < values[0]){
        result = "fair"
    }else if(Math.abs(aqi) < values[1]){
        result = "alright"
    }else{
        console.log(Math.abs(aqi) + " > " + values[1]);
        result = "poor"
    }

    return result;
}
