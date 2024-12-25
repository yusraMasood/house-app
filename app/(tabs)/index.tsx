import { generalImages, Icons } from '@/assets/images'
import HomeComponent from '@/components/HomeComponent'
import RecommendComponent from '@/components/RecommendComponent'
import LocationComponent from '@/components/LocationComponent'
import { colors } from '@/utils/colors'
import { homeArray, RecommendArray } from '@/utils/data'
import { vh, vw } from '@/utils/dimensions'
import { AntDesign, Feather, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TextInput } from 'react-native'
import SearchInput from '@/components/SearchInput'
import { useUser } from '@/context'

const HomeScreen = () => {
    const {  userData } = useUser();

 
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.headerContainer}>
                <View >

                    <Text style={styles.locationText}>Location</Text>
                    <View style={styles.locationContainer}>
                        <FontAwesome5 name="map-marker-alt" size={15} color={colors.blue} />
                        <Text style={styles.bengaluruText}>Bengaluru</Text>
                        <AntDesign name="down" size={15} color={colors.black} />
                    </View>
                </View>
                
                <Ionicons onPress={userData} name="notifications-circle" size={24} color={colors.black} />
            </View>

           <SearchInput/>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                key={"homeArray"}
                data={homeArray}
                renderItem={HomeComponent}
            />

            <View style={styles.headingContainer}>
                <Text style={styles.restaurantText}>Recommendation</Text>
                <Text style={styles.seeAllText}>See All</Text>
            </View>

            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                key={"RecommendArray"}
                data={RecommendArray}
                renderItem={RecommendComponent}
            />
              <View style={styles.headingContainer}>
                <Text style={styles.restaurantText}>Nearby your location</Text>
              
            </View>
            <FlatList
                key={"locationArray"}
                data={RecommendArray}
                renderItem={LocationComponent}
                contentContainerStyle={{ marginBottom: vh * 2 }}
            />
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: vw * 4,
        paddingVertical: vh * 2
    },
    restaurantText: {
        fontSize: 20,
        fontFamily: "Inter-Bold"
    },
    seeAllText: {
        color: colors.blue,
        fontFamily: "Inter-Medium",
        fontSize: 12

    },
    headingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: vh * 2
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    locationText: {
        color: colors.lightBlack,
        fontSize: 12,
        marginBottom: 4
    },
    bengaluruText: {
        color: colors.black,
        fontSize: 12,
        paddingHorizontal: vw * 1
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: vh * 2
    },
    


})
export default HomeScreen


