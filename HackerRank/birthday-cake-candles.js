let candles = [4,3,2,4]

function birthdayCakeCandles(){
  let sortedCandles = candles.sort((a,b)=> b - a);
  let qtHighNumber = 0;
  
 sortedCandles.forEach((candle)=> {
  if(candle === sortedCandles[0]){
    qtHighNumber++
  }
  //console.log('candle', candle, 'maior', sortedCandles[0], 'contador', qtHighNumber)
})
return qtHighNumber;
}

birthdayCakeCandles(candles)