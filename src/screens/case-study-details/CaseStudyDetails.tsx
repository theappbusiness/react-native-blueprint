import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {FC, useMemo, useRef} from 'react';
import {useEffect} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {Section} from 'components/case-study-section/section';
import {pages, ParamList} from 'navigation/pages';
import {styles} from './styles';
import {CaseStudy} from 'components/case-study-list/case-study';
import RelatedCard from 'components/related-card/RelatedCard';
import {useStore} from 'store';
import CaseStudySection from 'components/case-study-section/CaseStudySection';

interface Props
  extends NativeStackScreenProps<ParamList, pages.CASE_STUDY_DETAILS> {}

const CaseStudyDetails: FC<Props> = ({route, navigation}) => {
  const scrollRef = useRef<FlatList>(null);
  const {caseStudies} = useStore(state => state);
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
    scrollRef.current?.scrollToOffset({offset: 0, animated: true});
  };

  const renderItem = ({item}: {item: Section}) => (
    <CaseStudySection item={item} />
  );

  const renderHeader = () => (
    <View>
      <View style={styles.ctnTitle}>
        <Text testID="CaseStudyDetailsTitle" style={styles.txtTitle}>
          {caseStudy.title}
        </Text>
        <Text style={styles.txtSubtitle}>
          In partnership with {caseStudy.client}
        </Text>
      </View>
      <Image style={styles.image} source={{uri: caseStudy.hero_image}} />
    </View>
  );

  const renderFooter = () => {
    return relatedArtcles.length > 0 ? (
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
    ) : null;
  };

  return (
    <View testID="CaseStudyDetails" style={styles.container}>
      <FlatList
        ref={scrollRef}
        data={caseStudy.sections}
        renderItem={renderItem}
        keyExtractor={(item, index) => index + item?.title}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default CaseStudyDetails;
