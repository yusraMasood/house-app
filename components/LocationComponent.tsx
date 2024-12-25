
import { colors } from '@/utils/colors'
import { vh, vw } from '@/utils/dimensions'
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const LocationComponent = (props: any) => {
    return (
        <Link href="/DetailScreen" asChild>
        <TouchableOpacity style={styles.itemContainer}>
            <Image source={props.item?.image} style={styles.itemImg} />
            <View style={styles.innerContainer}>
            <View style={styles.ratingContainer}>
                <View style={styles.houseContainer}>
                    <Text style={styles.houseText}>House</Text>
                </View>
                <View style={styles.starContainer}>
                    <Entypo name="star" size={15} color={colors.yellow} />
                    <Text>4.5</Text>
                </View>
            </View>
            <Text style={styles.itemText}>{props.item?.title}</Text>
            <View style={styles.descriptionContainer}>

                <View>
                    <View style={styles.locationContainer}>
                        <FontAwesome5 name="map-marker-alt" size={15} color={colors.blue} />
                        <Text style={styles.bengaluruText}>Bengaluru,karnataka</Text>
                    </View>
                    <View style={styles.dollarContainer}>
                        <Text style={styles.houseText}>
                            $800
                        </Text>
                        <Text style={styles.bengaluruText}>
                            /month
                        </Text>
                    </View>
                </View>
                <FontAwesome name="heart" size={15} color={colors.blue} />

            </View>
            </View>
        </TouchableOpacity></Link>
    )

}
const styles = StyleSheet.create({
    itemContainer: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.35)',
        paddingHorizontal: vw * 4,
        paddingVertical: vh * 2,
        borderRadius: vh * 1,
        marginRight: vw * 4,
        flexDirection:"row",
        marginBottom:vh*1.5
    },
    innerContainer:{
        flex:1,
        paddingLeft: vw*3
    },
    itemImg: {
        height: vh * 12,
        width: vw*30,
        borderRadius: vh * 1.5,
        elevation: 1,
        resizeMode: "stretch"
    },
    itemText: {
        marginTop: vh*2,
        fontSize: 18,
        fontFamily: "Inter-Bold",
        color: colors.black
    },
    houseContainer: {
        paddingVertical: 9,
        paddingHorizontal: vw*6,
        backgroundColor: colors.lightBlue,
        borderRadius: vh * 1
    },
    houseText: {
        fontSize: 12,
        fontFamily: "Inter-Regular",
        color: colors.blue
    },
    ratingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    bengaluruText: {
        color: colors.lightBlack,
        fontSize: 12,
        paddingHorizontal: vw * 1
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: vh*0.5
    },
    dollarContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    descriptionContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    starContainer:{
        flexDirection:"row",
        alignItems:"center"
    }

})
export default LocationComponent

