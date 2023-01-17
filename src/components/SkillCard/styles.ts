import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextInputContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTextSkills: {
    color: '#fff',
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#fff',
    width: '100%',
  },
  iconsContainer: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconsDivider: {
    width: 24,
    color: 'rgba(196,196,196,0.24)',
  },
});
export {styles};
