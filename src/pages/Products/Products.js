import React from 'react';
import {FlatList, View, Text} from 'react-native';
import ProductCard from '../../components/ProductCard/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import {API_PRODUCT_URL} from '../../config/config';
import {useSelector} from 'react-redux';

const Products = ({navigation}) => {
  const user = useSelector(s => s.username);
  const {error, loading, data} = useFetch(API_PRODUCT_URL);

  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };

  const renderProduct = ({item}) => {
    return (
      <ProductCard
        product={item}
        onSelect={() => handleProductSelect(item.id)}
      />
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View>
      <FlatList data={data} renderItem={renderProduct} />;
    </View>
  );
};

export default Products;
