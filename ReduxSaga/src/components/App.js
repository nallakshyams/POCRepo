import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDataRequest} from '../actions/dataActions';
//create components
//create reducers with actions
//create store with reducers and sagamiddleware
//pass store at root level

const App = () => {
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(state => state.data);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <Text>Data from JSON API:</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

export default App;
