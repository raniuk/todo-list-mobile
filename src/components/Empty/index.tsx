import { Image, Text, View } from "react-native";

import clipboard from "@assets/clipboard.png";

import { styles } from "./styles";

export function Empty() {
  return (
    <View style={styles.container}>
      <Image source={clipboard} width={56} height={56} />
      <Text style={styles.textBold}>You don't have tasks registered yet</Text>
      <Text style={styles.textRegular}>
        Create tasks and organize your to-do items
      </Text>
    </View>
  );
}
