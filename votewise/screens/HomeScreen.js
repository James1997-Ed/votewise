import React from 'react'
import { View, Text, StyleSheet,Image, ScrollView  } from 'react-native'
import {images } from '../imagesFile/GlobalImages'
// import {NavigationContainer} from '@react-navigation/native'


export default function HomeScreen(){

    const Data = [
        {
            title: "Parties",
            number: '46'
        },
        {
            title: "Polling Places",
            number: '5,890'
        },
        {
            title: "Voters",
            number: '2,471,617'
        }
    ]

    const Item = ({title, number, icon}) =>{
       return(
        <View style={styles.voterStats}>
            <Text style={styles.votersTitle}>{title}</Text>
            <Text style={styles.votersNumber}>{number}</Text>
        </View>
       )
    }

    return(
        <View>
         <ScrollView>
            <View style={styles.hero}>
              <Image style={styles.image} source={images.HomeScreenImg.ChairFlag}/>
               <Text style={styles.title}>LIB Vote Wise</Text>
            </View>
            <View style={styles.textView}>
                <Text style={styles.welcomeText}>
                    Be a part of the <Text style={styles.futureText}>Future Liberia</Text> we want and dream of.
                </Text>
            </View>
            <View style={styles.votersStatsView}>
                {Data.map((item, index) =>(
                    <View key={index}>
                        <Item title={item.title} icon={item.icon} number={item.number}></Item>
                    </View>
                ))}
            </View>
            <View style={styles.newsView}>
               <Text style={styles.textTitle}>Recent elections News view</Text>
               <View>
                <Image style={styles.newHeadlineImage} source={images.HomeScreenImg.Libflag}/>
                <Text style={styles.newHeadlineText}>October 10, 2023 is Election Day</Text>
               </View>
            </View>
         </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({

    hero:{
        padding:'30',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    title:{
        fontSize:30,
        color:'#002368',
        fontWeight: 500,
        marginBottom: 50,
    },
    image:{
        width: 150,
        height: 150,
        resizeMode: "cover",
    },
    welcomeText:{
        fontSize: 40,
        color: "#002368",
    },
    textView:{
        width: 305,
        justifyContent: 'center',
        marginLeft:35,
        marginTop:30,
    },
    futureText:{
        color: '#c0032c',
        fontWeight:'600',
    },
    //Vote flatList style
    voterStats:{
        width:110,
        shadowColor:'black',
        shadowOffset:{width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 0.26,
        elevation: 2,
        backgroundColor:'white',
        padding: 2,
        marginHorizontal: 2,
        marginVertical: 8,
        borderRadius: 4,
    },
    votersStatsView:{
        flexDirection:'row',
        marginTop: 20,
        margin:20,
        padding:5,
        judtifyContent: 'center'
    },
    votersTitle:{
        fontSize: 15,
        textAlign: 'center',
        color: '#002368',
        fontWeight: 800,
        padding:5,
    },
    votersNumber:{
        textAlign: 22,
        textAlign:'center',
        color:'#c0032c',
        fontWeight: 500,
    },
    newsView:{
        alignItems:'center',
        marginTop: 50,
    },
    textTitle:{
        fontSize: 22,
        marginBottom:10,
    },
    newHeadlineImage:{
        width: 300,
        height: 200,
        resizeMode:'cover',
        marginLeft:'auto',
    },
    newHeadlineText:{
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 80,
        padding: 5,
    }
});




