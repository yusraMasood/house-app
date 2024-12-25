import { generalImages } from '@/assets/images'
import { colors } from '@/utils/colors'
import { options } from '@/utils/data'
import { vh, vw } from '@/utils/dimensions'
import { Entypo, FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { Image, Text, View, StyleSheet, ScrollView } from 'react-native'

const DetailScreen = () => {

    return (
        <ScrollView style={styles.container}>
            <Image source={generalImages.home} style={styles.image} />
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
                <Text style={styles.itemText}>The White House</Text>
                <View style={styles.locationContainer}>
                    <FontAwesome5 name="map-marker-alt" size={15} color={colors.blue} />
                    <Text style={styles.bengaluruText}>Bengaluru,karnataka</Text>
                </View>
                <View style={styles.optionMainContainer}>
                    {
                        options.map((item) => {
                            return (
                                <View style={styles.optionContainer}>
                                    <FontAwesome name={item.icon} size={15} color={colors.black} />
                                    <Text style={styles.optionText}>{item.title}</Text>
                                </View>
                            )
                        })
                    }

                </View>
                
                <View style={styles.hrLine} />
                <Text style={styles.itemText}>Listing Agent</Text>
                <View style={styles.agentContainer}>
                    <View style={styles.agentInnerContainer}>
                    <Image source={generalImages.home} style={styles.profilePicture} />
                    <View>
                        <Text style={styles.nameText}>John Doe</Text>
                        <Text style={styles.jobText}>Partner</Text>
                    </View>
                    </View>
                    <View style={styles.contactContainer}>
                        <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="message-reply-text" size={24} color={colors.blue} />
                        </View>
                        <View style={styles.iconContainer}>                       
                             <MaterialIcons name="call" size={24} color={colors.blue} />
                             </View>
                    </View>
                </View>

                <Text style={styles.itemText}>Overview</Text>
                <Text style={styles.descText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        paddingHorizontal: vw * 4,
        flex:1,
    },
    optionMainContainer: {
        flexDirection: "row",
        // backgroundColor:"red"
        justifyContent:"space-between",
        // flexWrap:"wrap",
    },
    image: {
        height: "50%",
        width: "100%",
        resizeMode: "cover"
    },
    ratingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: vh * 2
    },
    houseContainer: {
        paddingVertical: 9,
        paddingHorizontal: vw * 6,
        backgroundColor: colors.lightBlue,
        borderRadius: vh * 1
    },
    houseText: {
        fontSize: 12,
        fontFamily: "Inter-Regular",
        color: colors.blue
    },
    starContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    itemText: {
        marginTop: vh * 2,
        fontSize: 18,
        fontFamily: "Inter-Bold",
        color: colors.black
    },
    bengaluruText: {
        color: colors.lightBlack,
        fontSize: 12,
        paddingHorizontal: vw * 1
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: vh * 0.5
    },
    descText: {
        color: colors.lightBlack,
        fontSize: 12,
        marginTop: vh * 1
    },
    optionContainer: {
        flexDirection: "row",
        marginTop: vh * 2
    },
    optionText: {
        marginLeft: vw * 1,
        color: colors.blue,
        fontSize: 12
    },
    hrLine: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.1)",
        marginVertical: vh * 2
    },
    iconContainer:{
        backgroundColor: colors.grey,
        padding: 8,
        borderRadius: vh*3
    },
    profilePicture:{
        height: vh*6,
        width: vh*6,
        borderRadius: vh*3,
        marginRight: vw*2
    },
    contactContainer:{
        flexDirection:"row",
    },
    agentContainer:{
        flexDirection:"row",
        marginTop: vh*2,
        justifyContent:"space-between",
        alignItems:"center"
    },
    agentInnerContainer:{
        flexDirection:"row",
        alignItems:"center",

    },
    nameText:{
        fontSize: 14,
        fontFamily: "Inter-Medium",
        color: colors.black
    },
    jobText:{
        fontSize: 11,
        fontFamily: "Inter-Regular",
        color: colors.lightBlack

    }
})
export default DetailScreen