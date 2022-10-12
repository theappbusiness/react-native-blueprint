import React, {FC} from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  View,
} from 'react-native';
import {getCaseStudies} from 'api/case-studies';
import {CaseStudy} from 'api/models/case-study';
import CaseStudyCard from 'components/case-study-card/CaseStudyCard';
import {useQuery} from 'react-query';
import {QUERY} from 'api/query';
import {styles} from './styles';
import {stylesApp} from 'styles/app.styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {pages, ParamList} from 'navigation/pages';
import {useStore} from 'store';

interface Props extends NativeStackScreenProps<ParamList, pages.CASE_STUDIES> {}

const CaseStudyScreen: FC<Props> = ({navigation}) => {
  const {caseStudies, setCaseStudies} = useStore(state => state);

  const {refetch, isLoading} = useQuery([QUERY.CASE_STUDIES], getCaseStudies, {
    onSuccess: (data: CaseStudy[]) => {
      setCaseStudies(data);
    },
  });

  const openDetails = (item: CaseStudy) => {
    navigation.navigate(pages.CASE_STUDY_DETAILS, {data: item});
  };

  return (
    <View style={styles.container} testID="CaseStudiesScreen">
      <FlatList
        data={caseStudies}
        renderItem={({item}) => (
          <CaseStudyCard item={item} onPress={() => openDetails(item)} />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refetch} />
        }
        ListEmptyComponent={() => {
          return isLoading ? (
            <ActivityIndicator style={stylesApp.mt16} />
          ) : (
            <Text style={styles.textNoContent}>
              No case study found. Check back later!
            </Text>
          );
        }}
      />
    </View>
  );
};

export default CaseStudyScreen;
