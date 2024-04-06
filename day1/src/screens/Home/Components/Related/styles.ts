import {makeStyles} from '@rneui/themed';
import {fontSize} from 'src/theme/colors';

export const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  flatList: {
    gap: 10,
    paddingHorizontal: 15,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: theme?.spacing?.sm + 5,
    marginBottom: theme?.spacing?.sm + 8,
  },
  boldText: {
    fontSize: fontSize.h5,
  },
  normalText: {
    fontSize: fontSize.h6,
    color: theme?.colors?.grey3,
  },
}));
