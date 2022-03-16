/* eslint-disable prettier/prettier */
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  favorite: {
    // textAlign:'center',
    marginLeft: 10,
    marginVertical: 20,
    fontSize: 16,
    fontWeight: '600',
  },
  text_trending: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 20,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: 25,
  },
  button: {
    margin: 10,
    borderRadius: 20,
    elevation: 2,
  },
  removefavorite: {
    bottom: 30,
    backgroundColor: '#3066bc',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    height: 100,
  },
});
