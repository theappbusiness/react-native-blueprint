import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import {CaseStudy} from 'components/case-study-list/case-study';
import {styles} from './styles';

interface Props {
  item: CaseStudy;
  onPress?: () => void;
}

const RelatedCard = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity
      testID="RelatedCard"
      onPress={onPress}
      style={styles.card}>
      <View style={styles.ctnTitle}>
        <Text style={styles.txtTitle}>{item.title}</Text>
        <Text numberOfLines={1} style={styles.txtTeaser}>
          {item.teaser}
        </Text>
      </View>
      <Image
        source={{uri: item.hero_image}}
        style={styles.heroImage}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default RelatedCard;
