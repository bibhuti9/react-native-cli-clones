import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {categories} from 'src/references';
import {useStyle} from './styles';

interface RenderItemProps {
  item: {
    id: string;
    icon: React.FC;
    name: string;
  };
  index: number;
  selectedIndex: number;
}

const RenderItem = ({item, selectedIndex, index}: RenderItemProps) => {
  const Icon = item.icon;
  const styles = useStyle({isSelected: selectedIndex === index});
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Icon />
    </TouchableOpacity>
  );
};

export default function CategoryList() {
  const selectedIndex = 1;
  const styles = useStyle();

  return (
    <View style={styles.container}>
      {categories.map((item, index) => (
        <RenderItem item={item} selectedIndex={selectedIndex} index={index} />
      ))}
    </View>
  );
}
