import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'

const Calculator = ({calculate, inputCalc, displayCalc}) => {
  return (
    <>
      <View style = {styles.display}><Text style = {styles.displayText}>{displayCalc}</Text></View>
      <View style = {styles.calc}><Text style = {styles.calcText}>{inputCalc}</Text></View>
      <View style = {styles.buttons}>
        <View style = {styles.numbers}>
          <View style = {styles.row}>
            <TouchableOpacity onPress = {() => calculate(1)}><Text style = {styles.number}>1</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => calculate(2)}><Text style = {styles.number}>2</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => calculate(3)}><Text style = {styles.number}>3</Text></TouchableOpacity>
          </View>
          <View style = {styles.row}>
            <TouchableOpacity onPress = {() => calculate(4)}><Text style = {styles.number}>4</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => calculate(5)}><Text style = {styles.number}>5</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => calculate(6)}><Text style = {styles.number}>6</Text></TouchableOpacity>
          </View>
          <View style = {styles.row}>
            <TouchableOpacity onPress = {() => calculate(7)}><Text style = {styles.number}>7</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => calculate(8)}><Text style = {styles.number}>8</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => calculate(9)}><Text style = {styles.number}>9</Text></TouchableOpacity>
          </View>
          <View style = {styles.row}>
            <TouchableOpacity onPress = {() => calculate(".")}><Text style = {styles.number}>.</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => calculate(0)}><Text style = {styles.number}>0</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => calculate("=")}><Text style = {styles.number}>=</Text></TouchableOpacity>
          </View>
        </View>
        <View style = {styles.operations}>
            <TouchableOpacity onPress = {() => calculate("DEL")}><Text style = {styles.number}>DEL</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => calculate("AC")}><Text style = {styles.number}>AC</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => calculate("+")}><Text style = {styles.number}>+</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => calculate("-")}><Text style = {styles.number}>-</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => calculate("/")}><Text style = {styles.number}>/</Text></TouchableOpacity>
            <TouchableOpacity onPress = {() => calculate("*")}><Text style = {styles.number}>*</Text></TouchableOpacity>
        </View>
      </View>
    </>
  )
}

export default Calculator

const styles = StyleSheet.create({
    display: {
        flex:2,
        backgroundColor: "#FAEBD7",
        justifyContent: "flex-end",
        alignItems: "flex-end",
       },
       calc: {
        flex:1,
        backgroundColor: "#A9A9A9",
        justifyContent: "flex-end",
        alignItems: "flex-end"
       },
       buttons: {
        flex:5,
        flexDirection: "row"
       },
       numbers: {
         flex: 5,
         backgroundColor: "#F5F5F5"
       },
       operations: {
         flex: 2,
         backgroundColor:"#808080",
         justifyContent: "space-around",
         alignItems: "center",
         
       },
       displayText: {
        fontSize: 28
       },
       calcText: {
        fontSize: 28
       },
       row: {
        flex: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: "20%"
       },
       number: {
        fontSize: 28
       }      
})