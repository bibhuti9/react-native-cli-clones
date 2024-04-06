import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useStyles} from './styles';
import {FlatList} from 'react-native';
import {categoriesCards} from 'src/references';
import {useTheme} from '@rneui/themed';
import Typography from 'src/components/Typography';

interface RenderItemProps {
  item: {
    id: string;
    title: string;
    subtitle: string;
    image: any;
  };
}
const RenderItem = ({item}: RenderItemProps) => {
  const styles = useStyles();

  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Typography style={styles.boldText}>{item.title}</Typography>
        <Typography style={styles.normalText}>{item.subtitle}</Typography>
      </View>
    </TouchableOpacity>
  );
};

export default function Related() {
  const styles = useStyles();
  const {theme} = useTheme();
  return (
    <View style={{marginTop: theme?.spacing?.xl}}>
      <FlatList
        numColumns={2}
        data={categoriesCards}
        contentContainerStyle={styles.flatList}
        keyExtractor={item => item.id}
        renderItem={({item}) => <RenderItem item={item} />}
      />
    </View>
  );
}
