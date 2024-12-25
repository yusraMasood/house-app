import { colors } from '@/utils/colors'
import { vh, vw } from '@/utils/dimensions'
import { Feather } from '@expo/vector-icons'
import { View,TextInput,StyleSheet } from 'react-native'

const SearchInput = () => {
    return (
        <View style={styles.searchContainer}>
        <Feather size={20} name="search" color={colors.lightBlack} />
       <TextInput placeholder='Search...' style={styles.input}/>
        </View>
    )
}
const styles=StyleSheet.create({
    searchContainer:{
        backgroundColor:colors.grey,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal: vw*4,
        paddingVertical: vh*0.4,
        borderRadius:vh*1,
        marginBottom: vh*2
    },
    input:{
        flex:1,
        marginLeft: vw*1
    }
})

export default SearchInput