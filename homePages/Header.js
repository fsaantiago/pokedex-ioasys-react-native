import {View, Image, Text} from 'react-native';

import Logo from '../assets/images/logo-header/logo-frame.png';

export function Header() {
  return (
    <View>
      <Image source={Logo}/>
      <Text>ioasys pokémon</Text>
    </View>
  )
}