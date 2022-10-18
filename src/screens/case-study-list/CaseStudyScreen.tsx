import React, {FC} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {getCaseStudies} from 'api/case-studies';
import {CaseStudy} from 'api/models/case-study';
import {useQuery} from 'react-query';
import {QUERY} from 'api/query';
import {styles} from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {pages, ParamList} from 'navigation/pages';
import {useStore} from 'store';
import CaseStudyList from 'components/case-study-list/CaseStudyList';
import {stylesApp} from 'styles/app.styles';

interface Props extends NativeStackScreenProps<ParamList, pages.CASE_STUDIES> {}

const CaseStudyScreen: FC<Props> = ({navigation}) => {
  const {setCaseStudies} = useStore(state => state);

  const {
    data: caseStudies,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery([QUERY.CASE_STUDIES], getCaseStudies, {
    onSuccess: (data: CaseStudy[]) => {
      setCaseStudies(data);
    },
  });

  const openDetails = (item: CaseStudy) => {
    navigation.navigate(pages.CASE_STUDY_DETAILS, {data: item});
  };

  return (
    <View style={styles.container} testID="CaseStudiesScreen">
      {isLoading ? (
        <ActivityIndicator style={stylesApp.mt16} />
      ) : (
        <CaseStudyList
          items={caseStudies as CaseStudy[]}
          isRefetching={isRefetching}
          onItemPress={openDetails}
          onRefresh={refetch}
        />
      )}
    </View>
  );
};

export default CaseStudyScreen;
