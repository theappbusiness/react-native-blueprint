import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import {styles} from './styles';

interface Props {
  title: string;
  teaser?: string;
  image?: string;
  onPress?: () => void;
}

const CaseStudyCard = ({title, teaser, image, onPress}: Props) => {
  return (
    <TouchableOpacity
      testID="CaseStudyCard"
      onPress={onPress}
      style={styles.card}>
      {image && (
        <Image
          source={{uri: image}}
          style={styles.heroImage}
          resizeMode="cover"
        />
      )}
      <Text style={styles.txtTitle}>{title}</Text>
      {teaser ? <Text style={styles.txtTeaser}>{teaser}</Text> : null}
    </TouchableOpacity>
  );
};

export default CaseStudyCard;
