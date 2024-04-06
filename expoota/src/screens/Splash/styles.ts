import {makeStyles} from '@rneui/themed';
import {Font, fontSize} from 'src/theme/colors';

export const useStyles = makeStyles((theme, props: {bottom: number}) => ({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    marginHorizontal: theme?.spacing?.xl,
    alignItems: 'center',
  },
  boldText: {
    fontSize: fontSize.h1,
    marginBottom: theme?.spacing?.lg,
    fontFamily: Font.OutFitRegular,
  },
  normalText: {
    fontSize: fontSize.h6,
    marginBottom: 60,
    textAlign: 'center',
  },
  button: {
    marginBottom: props.bottom + 20,
    marginHorizontal: theme?.spacing?.xl,
  },
}));
