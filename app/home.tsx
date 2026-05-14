import { Text, ScrollView } from "react-native";
import styles from "./css/style";
import HeaderImage from "./components/HeaderImage";
import CourseCard from "./components/CourseCard";
import ButtonArea from "./components/Buttonlink";

export default function DashBoard() {
  return (
    <ScrollView contentContainerStyle={styles.dashboardContainer}>
  
      <Text style={styles.titulo}>
        Game library
      </Text>

      <CourseCard
        title="DOOM"
        describe="Fast paced, movement focused, brutal FPS game."
        likes={20}
        image={require("../assets/doom.png")}
      />

      <CourseCard
        title="Need For Speed"
        describe="Arcade racing with wild customization to cars and parts."
        likes={20}
        image={require("../assets/NFS.png")}
      />

      <CourseCard
        title="Devil May Cry"
        describe="Stylish combos in a frenetic hack n' slash."
        likes={20}
        image={require("../assets/DMC.png")}
      />
      <ButtonArea text="Sair" href="/login" />
    </ScrollView>
  );
}