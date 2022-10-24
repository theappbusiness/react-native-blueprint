import React from 'react';
import {Text, FlatList, RefreshControl, StyleSheet} from 'react-native';
import {CaseStudy} from './case-study';
import CaseStudyCard from 'components/case-study-card/CaseStudyCard';
import {NO_CONTENT_ERR} from 'utils/constants';
import {colors} from 'styles/colors';

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
    <CaseStudyCard
      title={item.title}
      teaser={item.teaser}
      image={item.hero_image}
      onPress={() => onItemPress?.(item)}
    />
  );

  const emptyItem = () => (
    <Text style={styles.textNoContent}>{NO_CONTENT_ERR}</Text>
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

const styles = StyleSheet.create({
  textNoContent: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    alignSelf: 'center',
    marginTop: 32,
  },
});

export default CaseStudyList;
