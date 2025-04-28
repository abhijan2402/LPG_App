import {
  Animated,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLOR} from '../../Constants/Colors';
import {windowHeight, windowWidth} from '../../Constants/Dimensions';
import UserModal from '../../Modals/UserModal';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const fakeUsers = [
    {
      name: 'Sophia Carter',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      gender: 'Female',
      bio: 'Coffee enthusiast, traveler, and amateur photographer.',
    },
    {
      name: 'Liam Johnson',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      gender: 'Male',
      bio: 'Tech geek and aspiring writer.',
    },
    {
      name: 'Ava Thompson',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      gender: 'Female',
      bio: 'Bookworm and foodie who loves hiking.',
    },
    {
      name: 'Noah Smith',
      image: 'https://randomuser.me/api/portraits/men/31.jpg',
      gender: 'Male',
      bio: 'Fitness lover and part-time gamer.',
    },
    {
      name: 'Isabella Martinez',
      image: 'https://randomuser.me/api/portraits/women/52.jpg',
      gender: 'Female',
      bio: 'Digital nomad and yoga addict.',
    },
    {
      name: 'Ethan Walker',
      image: 'https://randomuser.me/api/portraits/men/74.jpg',
      gender: 'Male',
      bio: 'Startup hustler and podcast junkie.',
    },
    {
      name: 'Mia Davis',
      image: 'https://randomuser.me/api/portraits/women/11.jpg',
      gender: 'Female',
      bio: 'Dog lover and interior design enthusiast.',
    },
    {
      name: 'James Lee',
      image: 'https://randomuser.me/api/portraits/men/17.jpg',
      gender: 'Male',
      bio: 'Explorer and musician by soul.',
    },
    {
      name: 'Charlotte Wilson',
      image: 'https://randomuser.me/api/portraits/women/39.jpg',
      gender: 'Female',
      bio: 'Startup strategist and adventurer.',
    },
    {
      name: 'Benjamin Brown',
      image: 'https://randomuser.me/api/portraits/men/88.jpg',
      gender: 'Male',
      bio: 'Skater and nature lover.',
    },
    {
      name: 'Harper Clark',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      gender: 'Female',
      bio: 'Visual artist and proud cat mom.',
    },
    {
      name: 'Lucas Adams',
      image: 'https://randomuser.me/api/portraits/men/55.jpg',
      gender: 'Male',
      bio: 'Lover of jazz and late-night coding.',
    },
    {
      name: 'Amelia Scott',
      image: 'https://randomuser.me/api/portraits/women/59.jpg',
      gender: 'Female',
      bio: 'Sustainability advocate and beach explorer.',
    },
    {
      name: 'Mason Harris',
      image: 'https://randomuser.me/api/portraits/men/39.jpg',
      gender: 'Male',
      bio: 'Hiker, dreamer, and drone pilot.',
    },
    {
      name: 'Evelyn Young',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
      gender: 'Female',
      bio: 'DIY queen and small business owner.',
    },
    {
      name: 'Logan Hall',
      image: 'https://randomuser.me/api/portraits/men/53.jpg',
      gender: 'Male',
      bio: 'Anime nerd, sushi lover, and JavaScript wizard.',
    },
    {
      name: 'Abigail Wright',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      gender: 'Female',
      bio: 'Poet by night, editor by day.',
    },
    {
      name: 'Jacob Green',
      image: 'https://randomuser.me/api/portraits/men/29.jpg',
      gender: 'Male',
      bio: 'Soccer fan and weekend chef.',
    },
    {
      name: 'Ella King',
      image: 'https://randomuser.me/api/portraits/women/7.jpg',
      gender: 'Female',
      bio: 'Minimalist lifestyle blogger and coffee snob.',
    },
    {
      name: 'Michael Hernandez',
      image: 'https://randomuser.me/api/portraits/men/21.jpg',
      gender: 'Male',
      bio: 'VR enthusiast and guitar player.',
    },
    {
      name: 'Scarlett Rivera',
      image: 'https://randomuser.me/api/portraits/women/13.jpg',
      gender: 'Female',
      bio: 'Fashion-forward and always camera-ready.',
    },
    {
      name: 'Elijah Lewis',
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      gender: 'Male',
      bio: 'Climber, coder, and plant dad.',
    },
    {
      name: 'Aria Cooper',
      image: 'https://randomuser.me/api/portraits/women/14.jpg',
      gender: 'Female',
      bio: 'Traveler, storyteller, and sunset chaser.',
    },
    {
      name: 'William Baker',
      image: 'https://randomuser.me/api/portraits/men/91.jpg',
      gender: 'Male',
      bio: 'Bike mechanic and nature explorer.',
    },
    {
      name: 'Grace Perez',
      image: 'https://randomuser.me/api/portraits/women/77.jpg',
      gender: 'Female',
      bio: 'Candle maker and mindful living advocate.',
    },
    {
      name: 'Daniel Campbell',
      image: 'https://randomuser.me/api/portraits/men/26.jpg',
      gender: 'Male',
      bio: 'Gamer, YouTuber, and pun master.',
    },
    {
      name: 'Chloe Rivera',
      image: 'https://randomuser.me/api/portraits/women/22.jpg',
      gender: 'Female',
      bio: 'Techie girl, fan of space and coding.',
    },
    {
      name: 'Sebastian Cox',
      image: 'https://randomuser.me/api/portraits/men/84.jpg',
      gender: 'Male',
      bio: 'Runner, reader, and ramen addict.',
    },
    {
      name: 'Victoria Ward',
      image: 'https://randomuser.me/api/portraits/women/87.jpg',
      gender: 'Female',
      bio: 'Vintage collector and Netflix pro.',
    },
    {
      name: 'Jackson Bell',
      image: 'https://randomuser.me/api/portraits/men/11.jpg',
      gender: 'Male',
      bio: 'Barista, poet, and morning runner.',
    },
  ];
  const [animations] = useState(fakeUsers?.map(() => new Animated.Value(0)));

  useEffect(() => {
    Animated.stagger(
      100,
      animations.map(anim =>
        Animated.timing(anim, {
          toValue: 1, // Animate to full opacity
          duration: 700, // Animation duration
          useNativeDriver: true, // Use native driver for better performance
        }),
      ),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.greetingText}>Hello, Akash</Text>
        <View>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/18556/18556632.png',
            }}
            style={styles.icon}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <Text style={styles.label}>Available Users</Text>
        <View style={styles.userWrap}>
          {fakeUsers?.map((i, index) => (
            <Animated.View
              key={index}
              style={[
                styles.userCard,
                {
                  opacity: animations[index], // Apply the animation to opacity
                  transform: [
                    {
                      translateY: animations[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [30, 0], // Slide from below
                      }),
                    },
                  ],
                  shadowColor: index % 2 == 0 ? COLOR.royalBlue : COLOR.pink,
                },
              ]}>
              <View
                style={[
                  styles.genderDot,
                  {
                    backgroundColor:
                      i?.gender === 'Female' ? 'pink' : COLOR.royalBlue,
                  },
                ]}
              />
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                }}>
                <Image style={styles.userImage} source={{uri: i?.image}} />
              </TouchableOpacity>
              <Text numberOfLines={1} style={styles.userName}>
                {i?.name}
              </Text>
            </Animated.View>
          ))}
        </View>
        <UserModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          user={{
            name: 'Sophia Carter',
            image: 'https://randomuser.me/api/portraits/women/65.jpg',
            gender: 'Female',
            bio: 'Coffee enthusiast, traveler, and amateur photographer.',
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.white,
    height: windowHeight,
  },
  headerContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    borderBottomWidth: 1,
    paddingBottom: 15,
    marginBottom: 10,
  },
  greetingText: {
    color: COLOR.royalBlue,
    fontSize: 22,
    fontWeight: '600',
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: COLOR.royalBlue,
  },
  scrollContainer: {
    marginHorizontal: 10,
    marginBottom: 40,
  },
  label: {
    fontSize: 15,
    color: COLOR.black,
    fontWeight: '600',
    marginLeft: 5,
    marginBottom: 10,
  },
  userWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  userCard: {
    // borderWidth: 0.5,
    width: windowWidth / 3.2 - 10,
    margin: 5,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: COLOR.white,
    elevation: 15,
    shadowColor: COLOR.royalBlue,
  },
  genderDot: {
    width: 7,
    height: 7,
    position: 'absolute',
    borderRadius: 50,
    right: 5,
    top: 5,
  },
  userImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  userName: {
    textAlign: 'center',
  },
});
