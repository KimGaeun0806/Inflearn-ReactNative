// css파일을 분리해서 코드를 외부에서 관리하듯이, 리액트 네이티브에서도 스타일을 외부에서 관리할 수 있음.
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    errorText: {
        backgroundColor: 'black',
        color: 'red',
        fontSize: 20;
    },
    text: {
        backgroundColor: 'black',
        color: 'white',
        fontSize: 20
    }
  });

export const orangeText = { // StyleSheet를 이용하는 방법 외에도 객체 형태로 작성하는 방법도 있음. 
    color: 'orange',
}

// 작성된 스타일들을 App.js에서 이용할 수 있어야 하니 export.

  