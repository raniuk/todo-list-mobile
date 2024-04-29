import { Image, View } from "react-native";

import logoImage from "../../assets/logo.png";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={logoImage} />
    </View>
  );
}
