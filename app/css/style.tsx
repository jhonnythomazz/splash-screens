import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 150,
  },
  input: {
    padding: 10,
    margin: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    width: '90%',
  },
  general:{
    width: '90%',
    marginTop: 50,
  },
  image: {
    width: '90%',
    height: 50,
    marginBottom: 10
  },
  info:{
    display: 'flex',
    alignItems: 'flex-end',
    marginLeft: 200,
    marginTop: 10,
    color: '#820f82'
  },
  button:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    backgroundColor: '#005CAA',
    padding: 10,
    borderRadius: 8,
    width: 150
  }
});

export default styles;
