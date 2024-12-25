import LocationComponent from '@/components/LocationComponent'
import SearchInput from '@/components/SearchInput'
import { colors } from '@/utils/colors'
import { RecommendArray } from '@/utils/data'
import { vh, vw } from '@/utils/dimensions'
import { Text ,View,StyleSheet,FlatList} from 'react-native'

const Profile = () => {
    return (
     <View style={styles.container}>
        <SearchInput/>
        <FlatList
                key={"locationArray"}
                data={RecommendArray}
                renderItem={LocationComponent}
                contentContainerStyle={{ marginBottom: vh * 2 }}
            />

     </View>
    )
}
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white,
        paddingTop: vh*2,
        paddingHorizontal: vw*4

    }
})
export default Profile