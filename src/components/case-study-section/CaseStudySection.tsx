import React from 'react';
import {Text, Image, View} from 'react-native';
import {styles} from './styles';
import {BodyElement, Section} from './section';

interface Props {
  item: Section;
}

const CaseStudySection = ({item}: Props) => {
  return (
    <View testID="CaseStudySection" style={styles.sectionCard}>
      {item?.title && <Text style={styles.sectionTitle}>{item.title}</Text>}
      {item?.body_elements.map((element: string | BodyElement, i: number) => (
        <View key={i}>
          {typeof element === 'string' ? (
            <Text testID="TextBodyElement" style={styles.sectionBody}>
              {element}
            </Text>
          ) : (
            <Image
              testID="ImageBodyElement"
              style={styles.image}
              source={{uri: element?.image_url}}
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default CaseStudySection;
