//import libraries for making the component
import React from 'react'
import { Text, View } from 'react-native'

//Making a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles

  return (
    <View style={ viewStyle }>
      <Text style={ textStyle }>{ props.headerText }</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContents: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
  }
}

//Making the component available to be used
export default Header