import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {useEffect} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Section} from 'api/models/section';
import {pages, ParamList} from 'navigation/pages';
import {styles} from './styles';

interface Props
  extends NativeStackScreenProps<ParamList, pages.CASE_STUDY_DETAILS> {}

const CaseStudyDetails: FC<Props> = ({route, navigation}) => {
  const {data} = route.params;

  useEffect(() => {
    navigation.setOptions({headerTitle: `K+C and ${data.vertical}`});
  }, [navigation, data]);

  return (
    <ScrollView testID="CaseStudyDetails" style={styles.container}>
      <View style={styles.ctnTitle}>
        <Text style={styles.txtTitle}>{data.title}</Text>
        <Text style={styles.txtSubtitle}>
          In partnership with {data.client}
        </Text>
      </View>
      <Image style={styles.image} source={{uri: data.hero_image}} />
      {data.sections.map((item: Section, index: number) => {
        return (
          <View key={index + item?.title} style={styles.sectionCard}>
            {item?.title && (
              <Text style={styles.sectionTitle}>{item.title}</Text>
            )}
            {item?.body_elements.map((element: any, i: number) => (
              <View key={i}>
                {typeof element === 'string' ? (
                  <Text style={styles.sectionBody}>{element}</Text>
                ) : (
                  <Image
                    style={styles.image}
                    source={{uri: element?.image_url}}
                  />
                )}
              </View>
            ))}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default CaseStudyDetails;
