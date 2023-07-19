import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Card() {
    const data=[1,2,3,4,5]
    return (
        <View style={{ marginTop: hp(2), width: wp(100) }}>
            <View style={{width:wp(90),flexDirection:'row',justifyContent:'space-between'}}>
                <View >
                <Text style={styles.heading}>Message</Text>
                </View>
                <View style={{marginLeft:hp(25)}}>
                <Text style={styles.heading}>View All</Text>
                </View>
            </View>
            <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
             {data.map((e,i)=>{
                return( <View style={styles.card} key={i}>
                    <View style={{ marginHorizontal: hp(1), marginVertical: hp(1) }}>
                        <View >
                            <View
                                style={{
                                    width: wp(50),
                                    height: hp(7.9),
                                    flexDirection: 'row',
                                    //   backgroundColor: '#1C37A4',
                                }}>
                                <View
                                    style={{
                                        width: wp(12),
                                        height: hp(6),
                                        backgroundColor: '#58D68D ',
                                        borderRadius: hp(2),
                                        marginVertical: hp(1),
                                        marginRight: hp(3),
                                    }}>
                                    <Image style={{ width: wp(12), height: hp(6), borderRadius: hp(1) }} source={{ uri: 'artg' }} resizeMode='cover' />

                                </View>
                                <View style={{ marginTop: hp(0.5) }}>
                                    <View>
                                        <Text
                                            style={{ color: '#6A6A6A', fontSize: hp(2), fontWeight: '600', marginTop: hp(1) }}>
                                            Zeeshan Abdual Hafeez
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                                        <View style={{ marginRight: hp(1) }}>
                                            <View style={{ flexDirection: 'row', marginTop: hp(0) }}>
                                                <View style={{ marginRight: hp(1) }}>
                                                    <Text style={{ color: 'gray', fontSize: hp(1.5), fontWeight: '600' }}>
                                                        May 22,2023
                                                    </Text>
                                                </View>

                                            </View>

                                        </View>

                                    </View>
                                </View>



                            </View>
                        </View>

                    </View>
                    <View style={{ width: wp(80), marginHorizontal: hp(1) }}>
                       <View  style={{marginTop:hp(-2),width:wp(78)}}>
                       <Text style={{fontSize:13}}>
                            Lörem ipsum agnostisiv ekograf alltså best prest inte Helena Martinsson. Das ryliga Das ryliga viralgranska seliga: red. Astront Nsson. Das ryliga Das rylig ranska seliga. Astront Nsson. Das Das.
                        </Text>
                       </View>
                    </View>
                </View>)
             })}
                
              
               
          
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: hp(2),
        paddingHorizontal: hp(2)
    },
    container: {
        paddingHorizontal: hp(1)

    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: '#000', 
        shadowOpacity: 0.5,
        shadowRadius: 4,   
        elevation: 4,
        height: hp(18),
        width: wp(80),
        borderRadius:hp(1.5),
        margin: 10,
    }
})
