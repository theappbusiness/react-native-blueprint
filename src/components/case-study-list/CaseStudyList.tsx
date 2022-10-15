import React from 'react';
import {Text, FlatList, RefreshControl} from 'react-native';
import {CaseStudy} from 'api/models/case-study';
import {styles} from './styles';
import CaseStudyCard from 'components/case-study-card/CaseStudyCard';

interface Props {
  items: CaseStudy[];
  isRefetching?: boolean;
  onItemPress?: (item: CaseStudy) => void;
  onRefresh?: () => void;
}

const CaseStudyList = ({
  items,
  isRefetching = false,
  onItemPress,
  onRefresh,
}: Props) => {
  const renderItem = ({item}: {item: CaseStudy}) => (
    <CaseStudyCard item={item} onPress={() => onItemPress?.(item)} />
  );

  const emptyItem = () => (
    <Text style={styles.textNoContent}>
      No case study found. Check back later!
    </Text>
  );

  return (
    <FlatList
      testID="CaseStudyList"
      data={items}
      renderItem={renderItem}
      keyExtractor={(item, index) => index + item.id}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={onRefresh} />
      }
      ListEmptyComponent={emptyItem}
    />
  );
};

export default CaseStudyList;
