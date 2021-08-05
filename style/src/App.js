// 원래 있던 App.js 내용 복사해와서 사용
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'; // 리액트 네이티브에서 StyleSheet를 이용하면 css의 class와 비슷한 형태로 스타일 작성 가능. StyleSheet import. 
import { styles, orangeText } from './style'; // style.js에 작성된 스타일 코드를 import해서 사용하기 

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{backgroundColor: 'black', color: 'white', fontSize: 20}}>Style Code</Text> 
      <Text style={styles.text}>Style Code</Text> 
      <Text style={styles.errorText}>Error Text</Text> 
      <Text style={[styles.text, styles.errorText]}>Error Text</Text>
      <Text style={[styles.text, {color: 'orange'}]}>Style Code</Text>
      <StatusBar style="auto" />
    </View>
    // 텍스트 컴포넌트에 웹프로그래밍과 같이 인라인 스타일 적용. 웹프로그래밍에서는 텍스트 형태로 입력하지만 리액트 네이티브에서는 객체로 입력함. 
    // 두 번째 것은 인라인 스타일로 작성된 위의 스타일 코드를 StyleSheet로 작성한 것. 
    // 스타일을 여러 개 적용할 때는 배열을 이용해서 적용하고 싶은 스타일을 나열하면 됨. 
    // 여러 개의 스타일이 적용되었을 때는 뒤에 있는 스타일 코드가 앞에 있는 스타일 코드를 덮어쓰게 됨. 
    // StyleSheet와 인라인 스타일 혼용 가능. 

  );
}

const styles = StyleSheet.create({ // 이 안에 객체 형태로 스타일 작성. 
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
