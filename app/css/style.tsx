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
    backgroundColor: '#005CAA',
    marginTop: 80,
    padding: 10,
    borderRadius: 8,
    width: 150
  },
  btntext:{
    color: 'white',
  },
  goback:{
    display: 'flex',
    alignItems: 'flex-end', 
    marginRight: 26,
  },
   dashboardContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: 30,
  },
    img: {
    width: 300,
    height: 45,
    marginTop: 40,
  },
    card: {
    width: 350,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#ccc",
  },
   cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardDescribe: {
    marginTop: 10,
    color: "#555",
  },
  likeButton: {
    marginTop: 15,
    backgroundColor: "#dd0000",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  likeText: {
    color: "#fff",
    fontWeight: "bold",
  },
   titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
  },
});

export default styles;
