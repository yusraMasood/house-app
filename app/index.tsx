import { Text, View,Image,StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { generalImages } from '@/assets/images';
import { vh, vw } from '@/utils/dimensions';
import { colors } from '@/utils/colors';
import { Link } from 'expo-router';

export default function Home(props:any) {

  return (
    <View style={styles.container}>
   <Image source={generalImages.home} style={styles.image}/>
   <View style={styles.innerContainer}>
   <Text style={styles.heading}>Discover and Find Your{"\n"}Perfect Dream House</Text>
   <Text style={styles.paraText}>
   Lorem ipsum dolor sit amet, consectetur{"\n"}adipiscing elit, sed do eiusmod 
   </Text>
   <Link href="/(tabs)" asChild>
   <TouchableOpacity style={styles.btnContainer}>
    <Text style={styles.btnText} >Register</Text>
   </TouchableOpacity>
   </Link>

   <View style={styles.loginTextContainer}>
   <Text style={styles.alreadyText}>Already have an account?</Text>
   <Text style={styles.loginText}>{" "}Log in</Text>
   </View>
   </View>
    </View>
  );
}
const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  innerContainer:{
    alignItems:"center"
  },
  image:{
    height: "50%",
    width: "100%",
    resizeMode:"cover"
  },
  heading:{
    fontSize: 24,
    fontFamily: "Inter-Bold",
    textAlign:"center",
    marginVertical: vh*3,
    color: colors.black

  },
  paraText:{
    textAlign:"center",
    fontFamily: "Inter-Regular",
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.37)'

  },
  btnContainer:{
    backgroundColor:"#2D75FF",
    padding: vw*2.2,
    marginTop: vh*5,
    alignItems:"center",
    justifyContent:"center",
    borderRadius: vh*1,
    elevation:1,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginVertical: vh*2,
    width:"70%",
    
  },
  btnText:{
    color: colors.white,
    fontFamily: "Inter-SemiBold",
  },
  loginTextContainer:{
    flexDirection:"row"
  },
  alreadyText:{
    color: colors.textBlack,
    fontSize: 14,
    fontFamily: "Inter-Medium",
  },
  loginText:{
    color: colors.blue,
    fontSize: 14,
    fontFamily: "Inter-Medium",

  }

});