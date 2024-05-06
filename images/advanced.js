function App() {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  console.log("✅ COMPONENT RE-RENDERED .....");

  return (
    <View>
      <View
        onLayout={() => {
          console.log("FIRST View invoked");
          setState1(true); // Update state1 when the View mounts
        }}
      ></View>

      <View
        onLayout={() => {
          console.log("SECOND View invoked");
          setState2(true); // Update state2 when the View mounts
        }}
      ></View>

      <View
        onLayout={() => {
          console.log("THIRD View invoked");
          setState3(true); // Update state3 when the View mounts
        }}
      ></View>
    </View>
  );
}
