import {makeStyles} from '@rneui/themed';

export const useStyles = makeStyles(theme => ({
  container: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 5,
  },
  button: {
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    marginTop: 5,
  },
  iconContainer: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
  },
  selectedIcon: {
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 15,
  },
}));
