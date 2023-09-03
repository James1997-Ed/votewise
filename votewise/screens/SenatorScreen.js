import React,{useState} from "react";
import { SenatorData } from "../data/Senator";
import {View, Text, StyleSheet, Touchable, TouchableOpacity, FlatList, SafeAreaView,Image, SectionList, ScrollView} from 'react-native';
import {GlobalImages} from '../../votewise/imagesFile/GlobalImages'


export default function SelectCountry({image}){
  
     const [showArrow, setShowArrow] = useState(false);
     const [selectedCountry, setSelectedCountry] = useState('');
     
     const counties = [
      'Bomi',
      'Gbarpolu',
      'Grand Bassa',
      'Grand Cape Mount',
      'Grand Kru',
      'Lofa',
      'Montserrado',
      'Nimba',
      'River Gee',
      'River Cess',
      'Sino',
      'Margibi',
      'Grand Gedeh',
      'Bong',
      'Maryland'
     ];

     const senatorDropdown = SenatorData;
     const countiesData = Object.keys(SenatorData);

     const toggleDropdown =()=>{
      setShowArrow(!showArrow);
     }
   
     const selectCounty = (county) =>{
      setSelectedCountry(county);
      toggleDropdown();

     }
     console.log(SenatorData)
    return(
        <ScrollView>
        <SafeAreaView style={styles.headerStyle}>
         <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownHeader}>
        <Text style={{color:"white", fontSize:18, fontWeight:"bold", padding:8}}>{selectedCountry || 'Select a county'}</Text>
        <Text style={{color:"white", fontSize:18, fontWeight:"bold", padding:8}}>{showArrow ? 'Close' : 'Select'}</Text>
     </TouchableOpacity>

     {showArrow && (
        <View style={styles.dropdown}>
            {countiesData.map((ele) => (
                <TouchableOpacity  key={ele} onPress={() => selectCounty(ele)}>
                   <ScrollView>
                   <Text style={styles.countyStyle}>{ele}</Text>
                   </ScrollView>
                </TouchableOpacity>
            ))}
        </View>
     )}

        <View>
            <FlatList data={senatorDropdown[selectedCountry]}
          renderItem={({item}) => {
          return(
             <View style={styles.senatorsCard}>
             <Image style={styles.image} source={image}/>
             <Text >{item.aspirant}{'\n'}{item.number}
             {'\n'}{item.type}{'\n'}{item.party}{'\n'}{item.partyAcronym}{'\n'}{item.county}</Text>
         </View>
            
       
     
     )}}
            keyExtractor={item => item.number}
     />
        </View>
        </SafeAreaView>
        </ScrollView>
    )
  }
  
  
  const styles = StyleSheet.create ({
   container: {
       flex: 1,
       padding: 20,
   },
   dropdownHeader: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       padding: 10,
       borderBottomWidth: 1,
       borderColor: '#ccc',
   },
   dropdown: {
       marginTop: 10,
       borderWidth: 1,
       borderColor: '#ccc',
       marginBottom: 20
   },
   headerStyle:{
    backgroundColor:'blue',
    color:'white',
    fontSize: 18,
    fontWeight:'bold',
    fontFamily:'sans-serif'
   },
   countyStyle:{
      borderRadius: 20,
      elevation:5,
      margin:20,
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 15,
      padding:5,
      fontWeight:'bold',
      backgroundColor:'white',
      color:'blue',
      
   },
   item: {
       padding: 20,
       borderWidth: 2,
       borderRadius: 100 / 2,
       borderColor: '#ccc',
       elevation: 4,
       marginVertical: 10,
       marginHorizontal: 16,
       
   },
   senatorsCard: {
       shadowColor: 'cyan',
       shadowOffset: {width:0, height: 2},
       shadowRadius: 4,
       shadowOpacity: 0.26,
       elevation: 4,
       backgroundColor: 'white',
       padding: 20,
       marginVertical: 16,
       marginHorizontal: 20,
       borderRadius: 8,
       flexDirection: 'row'
   },
  
   image: {
       width: 85,
       height: 85,
       borderRadius: 100 / 2,
       resizeMode: 'cover', //or other resizeMode
   },

});
   
   