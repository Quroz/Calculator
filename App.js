import { StyleSheet,  View } from 'react-native';
import Calculator from './Calculator';
import React, {useState, useEffect} from 'react';

export default function App() {

  const [inputCalc, setInputCalc] = useState("")
  const [displayCalc, setDisplayCalc] = useState("")
 

  function calculate(option){
    let operations = ["+", "-", "DEL", "AC", "/", "*"]
    
    if(inputCalc.length === 0 && operations.includes(option))
       return;
      
    else{
      setInputCalc((inputCalc + option).toString())
      if(option === "="){
        let calculation = inputCalc
        if(operations.includes(inputCalc.slice(-1)))
           calculation = inputCalc.slice(0,-1)
        setDisplayCalc(eval(calculation))
        setInputCalc("") 
      }
      if(option === "DEL"){
        if(inputCalc.length === 1)
          setInputCalc("")
        else{
          let input = inputCalc.slice(1)
          setInputCalc(input)
        }
      }
      if(option === "AC"){
        setInputCalc("")
        setDisplayCalc("")
      }
      if(option === "+"){
          if(operations.includes(inputCalc.slice(-1)))
           setInputCalc((inputCalc).toString())
          else{
            setInputCalc((inputCalc + option).toString())
          }
      }
      if(option === "-"){
        if(operations.includes(inputCalc.slice(-1)))
          setInputCalc((inputCalc).toString())
        else{
          setInputCalc((inputCalc + option).toString())
        }
      }
      if(option === "/"){
        if(operations.includes(inputCalc.slice(-1)))
         setInputCalc((inputCalc).toString())
        else{
         setInputCalc((inputCalc + option).toString())
      }
    }
      if(option === "*"){
       if(operations.includes(inputCalc.slice(-1)))
        setInputCalc((inputCalc).toString())
       else{
        setInputCalc((inputCalc + option).toString())
    }
   }
    } 
}

  useEffect(() => {
    setInputCalc("")
    setDisplayCalc("")
  }, [])
 

  return (
    <View style={styles.container}>
      <Calculator calculate = {(input) => calculate(input)} inputCalc = {inputCalc} displayCalc = {displayCalc}/>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1
 },
});
