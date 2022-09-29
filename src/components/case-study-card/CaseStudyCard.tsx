import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {CaseStudy} from 'api/models/case-study';
import {styles} from './styles';

interface Props {
  item: CaseStudy;
  onPress?: () => void;
}

const CaseStudyCard = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity
      testID="CaseStudyCard"
      onPress={onPress}
      style={styles.card}>
      <Image
        source={{uri: item.hero_image}}
        style={styles.heroImage}
        resizeMode="cover"
      />
      <Text style={styles.txtTitle}>{item.title}</Text>
      <Text style={styles.txtTeaser}>{item.teaser}</Text>
    </TouchableOpacity>
  );
};

export default CaseStudyCard;
