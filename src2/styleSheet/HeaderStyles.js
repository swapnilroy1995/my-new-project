import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  centerLight: {
    height: 61,
    width: "100%",
    flexDirection: "row",
	paddingTop:21,
    backgroundColor: "#F3565E"
  },
  centerDark: {
    height: 60,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#001623",
	paddingTop:20,
  },
  goBackLight: {
    flex: 1.5,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  goBackDark: {
    flex: 1.5,
    // backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  settingsLight: {
	  height:20,
	  width: 20
  
  },
  settingsDark: {
	  height:20,
	  width: 20
  },
  goBackTextLight: {fontSize:6,},
  goBackTextDark: {fontSize:6, color: '#fff'},
    headerTitleLight:{letterSpacing:2,
    backgroundColor: "#F3565E"},
    headerTitleDark:{letterSpacing:2, color:'#fff',
    backgroundColor: "#001623",},

});
