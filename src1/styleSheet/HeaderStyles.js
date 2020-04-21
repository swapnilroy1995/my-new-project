import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  centerLight: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#F3565E"
  },
  centerDark: {
    height: 40,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "black"
  },
  goBackLight: {
    flex: 1.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  goBackDark: {
    flex: 1.5,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  goBackTextLight: {fontSize:6},
  goBackTextDark: {fontSize:6, color: '#fff'},
    headerTitleLight:{letterSpacing:2},
    headerTitleDark:{letterSpacing:2, color:'#fff'},

});
