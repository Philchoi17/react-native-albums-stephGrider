import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
//onPress is property in the parent..a function here not an event
const Button = ({ linkToBuy, children }) => {
  const { buttonStyle, textStyle } = styles
  return (
    <TouchableOpacity onPress={ linkToBuy } style={ buttonStyle }>
      <Text style={ textStyle }>
        { children }
      </Text>
    </TouchableOpacity>
   
  )
}

styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#077aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#077aff',
    marginLeft: 5,
    marginRight: 5
  }
}

export default Button