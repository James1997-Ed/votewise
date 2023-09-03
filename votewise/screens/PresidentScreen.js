import { StatusBar } from "expo-status-bar";
import {useNavigation} from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';


const Data =[
  {
   name: "Edward W. Appleton, Jr",
   id:1,
   party: "Grassroots Development Movement",
   image: require('../../votewise/assets/Images/president Images/edward-appleton.jpg'),
   bio: "The project aimed to increase awareness about combating wildlife crime in schools and the wider public in Liberia. Activities focused on training 80 student from 20 schools in two of Liberia’s wildlife trade hotspots, Monrovia and Paynesville.",
},
{
  name: "Joseph N. Boakai",
  id:2,
  party: "Unity Party",
  image: require('../../votewise/assets/Images/president Images/joseph-boakai.jpg'),
  bio: "Joseph Boakai was born in the remote village of Worsonga in Foya District, Lofa County,[1] on 30 November 1944. He is married to Kartumu Boakai and they have four children.[2] Boakai is a Baptist and a deacon of the Effort Baptist Church.Active in philanthropic efforts, Boakai supervised and personally financed a 7-mile rural village road construction near Warsonga, Liberia.He is the owner of LUSU Resource Corporation and co-owner of AGROMACHINES Liberia.Boakai has served on many boards, including as chairman of Liberia Finance and Trust Corporation, chairman of the board of Star Radio, member of the board of LOIC, member of the board of the Liberia Baptist Theological Seminary, founding member of Bethesda Christian Mission, founding organizer-African Methodist Episcopal University, founding organizer of the C.W.A. Methodist University,[8] ambassador of the Liberia YMCA, president of LUSU Resource Corporation, and ex-president of the Monrovia Rotary Club.",
},
{
name: "Allen R. Brown, Jr",
id:3,
party: "Liberia Restoration Party",
image: require('../../votewise/assets/Images/president Images/allen-brown.jpg'),
bio: " Allen is a seasoned business man and innovator. He has over thirty years experience in the insurance, real estate and hospitality industries.He is the former President Director General of Beneficial Life Insurance Cote D’Ivoire now called Prudential Beneficial, a regional life and general insurance company with offices in several Francophone countries.Allen founded Urban Marketing Group, which built the Urban Financial Center, the Urban Plaza Complex, the Urban Chateau Hotel currently named Villa Hotel, the Urban Renaissance Hotel currently named Eco Hotel, and other hotels in Liberia. He is serving on the board of Comprehension Realty, a Liberian owned property management company. He was an advisor at Lokoro Diamonds. Allen is passionate about orphans, education and women’s rights; he continues to champion and support these causes.",
},
{
name: "Alexander B. Commings",
id:4,
party: "collaberating Polital Party",
image: require('../../votewise/assets/Images/president Images/alex-cummings.jpg'),
bio: "Alexander Benedict Cummings Jr. (born 7 December 1956) is a Liberian politician, businessman and philanthropist. He is the Standard Bearer of Liberia's Alternative National Congress. Born in Monrovia Liberia, Cummings studied at Cuttington University College in Liberia before leaving for the United States to further his studies at the Northern Illinois University, where he earned a Bachelor of Science degree in Finance and Economics. He earned an MBA in Finance from Clark-Atlanta University.Cummings worked for over 40 years in international business. He retired from Coca-Cola as its Chief Administrator in 2016, after a twenty years long career with the organisation.He currently serves as Chairman of the Cummings Africa Foundation.",
},
{
name: "Simeon C. M. Freeman",
id:5,
party: "Movement For Progressive change",
image: require('../../votewise/assets/Images/president Images/simeon-freeman.jpg'),
bio: "Presidential hopeful Mr. Simeon Freeman over the weekend locked down and demonstrated numerical strength in his hometown, Buchanan, Grand Bassa County.Tens of thousands of women and youths embraced the Movement for Progressive Change (MPC) standard bearer when he visited the city on Saturday, 29 July 2023.His visit was in appreciation of the people and to launch a five-million Liberian dollars women empowerment loan for marketers.The opposition politician launched the loan to beef up the capacity of struggling business women and single mothers in the county.",
},
{
name: "Tiawan Saye Gongloe",
id:6,
party: "Liberia's People Party",
image: require('../../votewise/assets/Images/president Images/tiawan-gongloe.jpg'),
bio: "Cllr. Gongloe is the Managing Partner of Gongloe & Associates, Inc, a law firm that specializes in courtroom trials, preparing articles of incorporation and bylaws and other corporate documents for corporations, and business registration. He has been an orator for human rights day in Liberia many times, the most recent being African Human Rights Day (2016) and International Human Rights Day (2016).In April 2011 chaired a special committee, established by the President to investigate the March 22, 2011 police brutality against students of the G. W. Gibson High School and Tubman High School.",
},    
{
name: "Lusinee F. Kamara, Jr",
id:7,
party: "Grassroots Development Movement",
image: require('../../votewise/assets/Images/president Images/lusinee-kamara.jpg'),
bio: "Kamara is determined to lead Liberia towards modernization, addressing pressing socio-economic needs, instituting crucial institutional reforms, and implementing effective policy measures to combat crime within society. The ALCOP Presidential candidate is committed to revitalizing key sectors such as agriculture, education, and social security, while also spearheading infrastructure improvements to elevate the nation’s standards.",
},
{
name: "David G. B. Kiamu",
id:8,
party: "Reformers National congress",
image: require('../../votewise/assets/Images/president Images/david-kiamu.jpg'),
bio: "He vowed to advocate for the setting up of a Commission on Social Welfare which will provide care for the mentally ill persons across the country, the physically challenged persons and the elderly in society.Commenting on the economy, Rev. Kaimu said Liberia, under his leadership, will move away from an extractive industry system to a production industry system that will create over 100,000 jobs annually and will also decentralize resources collected in the country, but he failed to state how will that be done.According to him, all resources raised in each county, 60 percent of it will be managed by that county, while only 40 percent will go to central government.He further asserted that Liberia under his leadership, corruption crimes court will be established to deal with corruption cases speedily and will also advocate for the removal of all bottlenecks in registration of companies.",
},
{
name: "Alexander N. Kollie",
id:9,
party: "Reformers National congress",
image: require('../../votewise/assets/Images/president Images/alexander-kollie.jpg'),
bio: "Dr. Kollie, a career health practitioner, revealed that healthcare, economic stability, and revamping the educational sector are the three most critical issues on their party's manifesto. He emphasized that as a qualified health practitioner, he understands the importance of affordable healthcare for all Liberians, and he knows how to make it workable for everyone. When asked about his credentials and why he deserves the votes of Liberians, he urged voters not to judge him solely on his past achievements but to focus on how his determination can transform the lives of the people.",
},
{
name: "Bendu Alehma Kpomah",
id:10,
party: "Independent candidate",
image: require('../../votewise/assets/Images/president Images/alehma-kromah.jpg'),
bio: "Madam Kromah said she was born in Gbarnga City, Bong County where she grew up and attended schools, including the Cuttington University where she spent her freshman year before transferring to the University of Liberia from where she graduated with a Bachelor’s degree in Economics as major and Mathematics as minor. She also mentioned her academic journey to the United States of America where she obtained her Master’s in Business Administration (MBA) and later on began her work career in the United States as a civil servant in the government of the state of California.",
},
{
name: "Richard Says Miller",
id:11,
party: "Liberians For Prosperity",
image: require('../../votewise/assets/Images/president Images/richard-miller.jpg'),
bio: "Mr. Saye Miller is one of the newest politicians showcasing his ambition for nation’s highest office in October.The Liberia for Prosperity Party leader said to ensure a better health and education system for the country, his government will increase the budgetary allocations of educational and health of the country and reform the country’s health and educational policies to be on par with other countries around the world. According to him, Liberia is too old for its educational system to be in a deplorable state as it is in now, and he has promised to build new schools and colleges throughout the country and improve the living standard of the Liberian educators.",
},
{
name: "Clarence K. Monibah",
id:12,
party: "Liberian National Union",
image: require('../../votewise/assets/Images/president Images/clarence-moniba.jpg'),
bio: "Clarence K. Moniba, Ph.D , is a former Liberian government official. He served as the youngest person in the country’s history to be named Minister of State without Portfolio, as well as the Chairman of the Board of the Liberia Electricity Corporation. He was a Principal Advisor and Project Manager to the President of Liberia and a leading figure on infrastructure development in Liberia from 2014 – 2018. Dr. Moniba at various times also headed the Diaspora Engagement Unit, the Philanthropy Secretariat and the President’s Delivery Unit which oversaw the implementation of priority projects. Moniba in previous roles has worked with the African Development Bank’s High-Level Panel on Post-Conflict & Fragile States, as well as the United Nations Post-2015 Development Agenda.In his appeal to the younger generation, Dr. Moniba said that his age of 43 years was a powerful tool that will propel Liberia into the future. He claimed that the Liberian people should “use my age as proof that there is a new breed of Liberian leaders who will have the energy, the strength, the determination and vision to carry out the transformation of this country – knowing that my future is tied with the millions of other Liberians who are desperate for a better nation because Liberia and all our people deserve better.",
},
{
name: "Robert Franz Morris",
id:13,
party: "Independent Candidate",
image: require('../../votewise/assets/Images/president Images/robert-franz-morris.jpg'),
bio: "Born and raised in Margibi County, Robert Morris is the Chief Executive Officer of Phoenix Services, a construction contracting, home building and real estate development firm located in Disco Hill, Liberia.Robert F. Morris He is the former Deputy Managing Director for Administration of the Liberia Airport Authority (LAA)/Roberts International Airport, where he led the effort to upgrade the runway, constructed a new terminal building, installed new lighting and a state-of-the-art instrument landing system.",
},
{
name: "Sara Beysolow Nyanti",
id:14,
party: "African Liberation League",
image: require('../../votewise/assets/Images/president Images/sara-nyanti.jpg'),
bio: "Madam Nyanti, a former Deputy Special Representative for the United Nations Mission in South Sudan (UNMISS), who arrived in the country from the sub-region over the weekend told a gathering of supporters that she will focus on providing basic social services for Liberians when elected as President of Liberia.Madam Nyanti said lifting Africa’s oldest republic out of poverty will require the help of all Liberians home and abroad and not just the president of the country as she assured her supporters that she will be committed to reducing poverty in Liberia.",
},
{
name: "George Manneh Weah",
id:15,
party: "coalition For Democratic change",
image: require('../../votewise/assets/Images/president Images/george-weah.jpg'),
bio: "Dr. George Manneh Weah, was born on October 1, 1966, on the Capitol Bypass in Monrovia, Montserrado County, unto the union of Mr. William Tarpeh Weah and Madam Anna Quayeweh Weah (both deceased). He holds ancestry to the Kru and the Bassa ethnic groups. His father hailed from Grand Kru County while his mother hailed from Grand Bassa County. Dr. George Manneh Weah began his political career in 2004. He is the founder of Liberia National Congress Party (LINCP) which later became the formidable Congress for Democratic Change (CDC). Weah contested three elections and won two. He lost the presidential race in the runoff with former President Ellen Johnson-Sirleaf in 2005. In 2014, Weah contested and won the Montserrado County Senatorial by-election. In November 2017, he won the General and Presidential Elections with over 60% of valid votes following a runoff with former vice president, Joseph N. Boakai. Dr. Weah was inaugurated on January 22, 2018.In his first annual message to the National Legislature, President Weah reduced his salary and other benefits by 25% with immediate effect.  According to Article 60 of the Liberian Constitution, salaries of the President and the Vice President are established by the National Legislature and cannot be increased or reduced during the period for which they are elected. However, the President took the action in view of the very rapidly deteriorating economic situation of Liberia.",
},
{
name: "Jeremian Z. Whapoe",
id:16,
party: "Vision for Liberia Tranformation",
image: require('../../votewise/assets/Images/president Images/jeremiah-whapoe.jpg'),
bio: "Presidential aspirant Dr. Jeremiah Z. Whapoe says, it’s very saddening and frustrating that at 174, Liberia has failed to work in line with her age through wisdom to develop and eliminate poverty, promising that he is ready and prepared to restore and give back to the Liberian people what is rightfully theirs that the locust has stolen.The leader for the Vision for Liberia Transformation (VOLT) notes that at 174 years, Liberia is still not wise enough in making national decisions for positive transformation that will better the lives of its citizens, adding “We are still hiring Ghanaians to plant our light poles and Chinese are still driving trucks in our companies while we have potential Liberians that can do the same job.”",
},
{
name: "Luther  N. Yorfee",
id:17,
party: "Liberia Rebuliding Party",
image: require('../../votewise/assets/Images/president Images/luther-yorfee.jpg'),
bio: "Cllr. Luther N. Yorfee has over 20 years of experience in public service, couple with credible track record of performance in several key functionary of government, including the General Auditing Commission (GAC), Ministry of Foreign Affairs. He holds a BBA Degree in  Accounting, LLB Law Degree and LLM International Business Law Degree, respectively.",

},
{
  name: "Joshua Tom Turner",
  id: 17,
  party: "New Liberia Party (NLP)",
  image: require('../../votewise/assets/Images/president Images/joshua-turner.jpg'),
  bio: "Rev. Dr. Turner vowed to build a diversified economy by adding value to local products through manufacturing.The New Liberia Political Leader also announced the introduction of what he calls ‘Twenty-Six Amazing Programs’ for the country, if elected President of Liberia.The New Liberia Party is one of the newest political institutions of the Opposition Bloc poised to challenge incumbent President George Weah in the ensuing October 10 Presidential Race. Read more here: https://elbcradio.com/2023/07/20/industrialization-is-driving-vision-for-seeking-the-presidency-rev-dr-turner/",
},
{
  name: "Sheikh A. Kouyateh",
  id: 10,
  party: "Liberia First Movement",
  image: require('../../votewise/assets/Images/president Images/sheikh-kouyateh.jpg'),
  bio: "Kouyateh who contested twice for the senatorial seat of Montserrado County and lost both in 2011 and 2017 Presidential and legislative elections respectively has been heavily involved into active activism in Liberia for the past six to seven years.Kouyateh has been seen as a civil rights advocate since the ascendancy of President George Weah to the higher seat of the Land.Kouyateh was among individuals who organized the recent #Fix-The-Country protest that caught the attention of many Liberian both in and out of the country..",
},
{
  name: "William Wiah Tuider",
  id: 16,
  party: "Democratic National Allegiance",
  image: require('../../votewise/assets/Images/president Images/william-tuder.jpg'),
  bio: "Hon. William W. Tuider, a seasoned statesman and grassroots leader, has been entrusted with the DNA’s presidential candidacy. With a focus on transparency, social justice, and economic prosperity, Hon. Tuider aims to unite the nation and bring about positive change for all citizens. Read More Here : Hon. William W. Tuider, a seasoned statesman and grassroots leader, has been entrusted with the DNA’s presidential candidacy. With a focus on transparency, social justice, and economic prosperity, Hon. Tuider aims to unite the nation and bring about positive change for all citizens.",
}
]

const Item = ({ name, party, image }) => {
  return (
    <View style={styles.list}>
      <Image style={styles.image} source={image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.party}>{party}</Text>
    </View>
  );
};


export default function PresidentScreen(){
  const navigation = useNavigation();
  const PresidentNewScreen = ({id}) =>{
    console.log({id})
   navigation.navigate("DetailsPage");
  }
  
  return(
<SafeAreaView style={styles.container}>
  
  <FlatList
    data={Data}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => PresidentNewScreen({ id: item.id })}>
      <Item image={item.image} name={item.name} party={item.party} />
      </TouchableOpacity>
    )}
    keyExtractor={item => item.id}
  />
  
</SafeAreaView>

  )
}


const styles = StyleSheet.create({
    container: {
     margin: StatusBar.currentHeight || 0,
    },
    list: {
      backgroundColor: 'white',
      borderColor: '#CCCC',
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 16,
      borderRadius: 8,
      shadowColor: '#002368',
      display:'flex, flex-cols',
    },
    name: {
      fontSize: 20,
      color: 'blue',
    },
    party: {
      fontSize: 15,
      color: '#c0032c'
    },
    image:{
      width: 60,
      height: 60,
      borderRadius: 60,
      resizeMode: 'cover',
    }
 });
 
 