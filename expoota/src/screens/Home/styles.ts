import {makeStyles} from '@rneui/themed';
import {Font, fontSize} from 'src/theme/colors';

export const useStyle = makeStyles((theme, props: {top: number}) => ({
  container: {
    flex: 1,
  },
  textContainer: {
    marginHorizontal: theme?.spacing?.xl,
    alignItems: 'center',
    paddingTop: props?.top + 20,
  },
  boldText: {
    fontSize: fontSize.h1,
    marginBottom: theme?.spacing?.lg,
    fontFamily: Font.OutFitRegular,
  },
  normalText: {
    fontSize: fontSize.h6,
    textAlign: 'center',
  },
}));
