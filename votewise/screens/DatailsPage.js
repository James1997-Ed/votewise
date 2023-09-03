import React,{useState} from "react";
import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet } from "react-native";



export default function DatailsPage({route}){
  const [details, setDetails] = useState(route.params.item || {
    image: null,
    name: "",
    party: "",
    bio: "",
  });
    return (
        <>
          <ScrollView>
            <View>
              <View>
                <Image style={styles.image} source={details?.image} />
              </View>
              <View style={styles.presidentsInfo}>
                <Text style={styles.aspirantName}>{details?.name}</Text>
                <Text style={styles.party}>
                  Political Party: {details?.party}
                </Text>
                <Text style={styles.bioInfo}>{details?.bio}</Text>
              </View>
            </View>
          </ScrollView>
        </>
      );
    }
    
    const styles = StyleSheet.create({
      presidentsInfo: {
        marginHorizontal: 20,
      },
      image: {
        width: 375,
        height: 450,
      },
    
      aspirantName: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        color: "#002368"
      },
      party: {
        color: "#c0032c",
        fontSize: 13,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
      },
    
      bioInfo: {
        lineHeight: 20,
        textAlign: "justify",
        marginBottom: 20,
      },
    });

