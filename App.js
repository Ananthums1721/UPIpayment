import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import RNUpiPayment from 'react-native-upi-payment'

const App = () => {

  const handlePayment = () => {
    RNUpiPayment.initializePayment(
      {
        vpa: 'ananthums1998@okicici', // or can be john@ybl or mobileNo@upi
        payeeName: 'Test User',
        amount: '20',
        transactionRef: 'ananthums1998@okicici',
      },
      () => {console.log('Success')},() => {console.log('Failuire')}
    );
  }
  return (
<View style={{flex : 1 , alignItems:'center' , justifyContent:'center'}}>
  <Text>
    Pay 20 Rupees
  </Text>
      <TouchableOpacity style={{
        height:40 ,
        width:170,
        backgroundColor:'blue', 
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 15}}
        onPress={() => handlePayment()}
       >
      <Text>Pay Now</Text>


      </TouchableOpacity>

    </View>
  )
}

export default App