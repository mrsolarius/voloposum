import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Agent} from '../../services/models/valorant-agents';
import AgentItem from './AgentItem';

function AgentsList(props: {agents: Agent[]}) {
  let {agents} = props;
  const renderItem = ({item}: {item: Agent}) => <AgentItem item={item} />;
  return (
    <FlatList
      data={agents}
      renderItem={renderItem}
      keyExtractor={item => item.uuid}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 0,
    width: '100%',
  },
});

export default AgentsList;