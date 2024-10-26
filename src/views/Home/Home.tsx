import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { NavigationProp } from "../../types";

const Home = () => {
  const { navigate } = useNavigation<NavigationProp>();
  const handleViewPress = () => {
    navigate("About");
  };

  return (
    <View>
      <Text>Home</Text>
      <Text onPress={handleViewPress}>About</Text>
    </View>
  );
};

export default Home;
