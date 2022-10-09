import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useMemo, useRef} from 'react';
import {useEffect} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Section} from 'api/models/section';
import {pages, ParamList} from 'navigation/pages';
import {styles} from './styles';
import {CaseStudy} from 'api/models/case-study';
import RelatedCard from 'components/related-card/RelatedCard';
import {useAppSelector} from 'hooks';
import {RootState} from 'redux/store';

interface Props
  extends NativeStackScreenProps<ParamList, pages.CASE_STUDY_DETAILS> {}

const CaseStudyDetails: FC<Props> = ({route, navigation}) => {
  const scrollRef = useRef<ScrollView>(null);
  const {caseStudies} = useAppSelector((state: RootState) => state.caseStudies);
  const {data: caseStudy} = route.params;

  useEffect(() => {
    navigation.setOptions({headerTitle: `K+C and ${caseStudy.vertical}`});
  }, [navigation, caseStudy]);

  const relatedArtcles = useMemo(
    () =>
      caseStudies.filter(
        (c: CaseStudy) =>
          c.id !== caseStudy.id && c.vertical === caseStudy.vertical,
      ),
    [caseStudies, caseStudy],
  );

  const openDetails = (item: CaseStudy) => {
    navigation.navigate(pages.CASE_STUDY_DETAILS, {data: item});
    scrollRef.current?.scrollTo({y: 0, animated: true});
  };

  return (
    <ScrollView
      testID="CaseStudyDetails"
      style={styles.container}
      ref={scrollRef}>
      <View style={styles.ctnTitle}>
        <Text style={styles.txtTitle}>{caseStudy.title}</Text>
        <Text style={styles.txtSubtitle}>
          In partnership with {caseStudy.client}
        </Text>
      </View>
      <Image style={styles.image} source={{uri: caseStudy.hero_image}} />
      {caseStudy.sections.map((item: Section, index: number) => {
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
      {relatedArtcles.length > 0 && (
        <View style={styles.sectionRelated}>
          <Text style={styles.txtTitle}>Related Articles</Text>
          {relatedArtcles.map((item: CaseStudy) => (
            <RelatedCard
              key={item?.title}
              item={item}
              onPress={() => {
                openDetails(item);
              }}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default CaseStudyDetails;
