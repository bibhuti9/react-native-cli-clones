import {makeStyles} from '@rneui/themed';

export const useStyle = makeStyles((theme, props: {isSelected: boolean}) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: theme?.spacing?.xl,
    marginHorizontal: theme?.spacing?.md,
  },
  buttonContainer: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: props?.isSelected
      ? theme.colors.primary
      : theme?.colors?.secondary,
  },
}));
