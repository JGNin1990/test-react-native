import { StyleSheet, Dimensions } from "react-native";
let screenHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: 'white'
  },
  containerheader: {
    backgroundColor: 'white',
    height: 150,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
    // borderBottomEndRadius : 40 ,
    // borderBottomStartRadius : 40 

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginTop: 20,

  },
  headerText: {
    marginTop: 20,
    paddingTop: 7,
    paddingLeft: 5,
    fontSize: 17,
    fontWeight: "bold",
    color: 'white',
  },
  containerList: {
    paddingTop: 25,
    paddingHorizontal: 25,
    // backgroundColor: '#302a69',
  },
  tableHeader: {
    backgroundColor: '#302a69',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
  },
  modalView: {
    margin: 25,
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: screenHeight - 900,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#1E90FF',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  modalText: {
    marginBottom: 25,
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  modalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 5,
    color: '#3b3b3b',
  },
  leftText: {
    textAlign: 'right',
    flex: 1,
    fontSize: 15,
  },
  rightText: {
    flex: 1,
    paddingLeft: 7,
    fontSize: 15,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  button: {
    borderRadius: 10,
    padding: 2,
    elevation: 2,
  },
  textStyle: {
    color: '#FFF',
    fontSize: 15,
    // fontWeight: 'bold',
    textAlign: 'center',
    padding: 7,
    marginLeft: 3,
    marginRight: 3,
  },
  buttonClose: {
    backgroundColor: '#1E90FF',
    marginTop: 10,
    marginBottom: 10,
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    width: 300,
    height: 500,
    borderWidth: 1,
    borderColor: 'black',
  },
  textStyleDesign: {
    fontSize: 25,
    color: 'white',
    flex: 1,
  },
  profilename: {
    paddingTop: 7,
    paddingLeft: 5,
    fontSize: 17,
    fontWeight: "bold",
    color: 'white'
  },
  welcome: {
    paddingTop: 12,
    paddingLeft: 5,
    fontSize: 20,
    color: 'white'
  },
  profilecard: {
    width: '90%',
    height: 170,
    marginTop: 12,
    backgroundColor: 'white',
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.40,
    elevation: 5,

  },
  invoicecontainer: {
    borderRadius: 10,
    height: 60,
    zIndex: 9,
    borderWidth: 0.18,
    borderColor: 'white',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.20,
    elevation: 0.6,
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#4f6e64',
    marginTop: 30,
    paddingLeft: 7
  },
  phno: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#4f6e64',
    marginTop: 12,
    paddingLeft: 7
  },
  invoice: {
    fontSize: 15,
    fontWeight: "bold",
    color: '#4f6e64',
    marginTop: 12,
    paddingLeft: 7
  },
  viewrescontainer: {
    flexDirection: 'row'
  },
  viewIcon: {
    borderRadius: 50,
    backgroundColor: 'red',
    width: 40,
    height: 40,
    justifyContent: "center",
  },
  buttomcontainer: {
    backgroundColor: '#ffff',
    height: 600,
    marginTop: -100,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10
  },
  category: {
    backgroundColor: '#302a69',
    width: 60,
    height: 60,
    marginTop: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: "center",
    textAlign: "center"

  },
  categoryimage: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  categorylabel: {
    color: '#424654',
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 2,
    alignSelf: 'center',
  },
  category: {
    backgroundColor: '#302a69',
    width: 60,
    height: 60,
    marginTop: 12,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: "center",
    textAlign: "center"
  },
  profile: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    marginTop: 10,
    marginRight: 10,
  },
  // scrollView: {
  //   // backgroundColor: 'pink',
  //   marginHorizontal: 20,
  // },
})

export { styles }