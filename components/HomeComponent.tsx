
import { colors } from '@/utils/colors'
import { vh, vw } from '@/utils/dimensions'
import { Link } from 'expo-router'
import { View,Text,Image,StyleSheet } from 'react-native'

const HomeComponent=(props:any)=>{
    return(
        <Link href="/DetailScreen" asChild>
        <View style={styles.itemContainer}>
            <Image source={props.item?.image} style={styles.itemImg}/>
            <Text style={styles.itemText}>{props.item?.title}</Text>
        </View>
        </Link>
    )

}
const styles =StyleSheet.create({
    itemContainer:{
        width: vw*30,
        borderWidth:1,
        borderColor: 'rgba(0,0,0,0.35)',
        alignItems:"center",
        justifyContent:"center",
        paddingVertical: vh*1,
        borderRadius: vh*1,
        marginRight: vw*2
    },
    itemImg:{
        height: vh*7,
        width: vh*7,
        resizeMode:"cover"
    },
    itemText:{
        fontSize: 14,
        marginTop: vh*0.5,
        fontFamily: "Inter-Regular",
        color: colors.lightBlack
    }

})
export default HomeComponent

