// CodeLedger Launch Video — main app. Mounts the Stage with all 8 scenes.

function App() {
  return (
    <Stage
      width={1920}
      height={1080}
      duration={165}
      background="#0a0d18"
      fps={60}
      loop={false}
      autoplay={true}
      persistKey="codeledger-launch-video"
    >
      <Scene1 start={0} />
      <Scene2 start={28} />
      <Scene3 start={42} />
      <Scene4 start={62} />
      <Scene5 start={82} />
      <Scene6 start={100} />
      <Scene7 start={112} />
      <Scene8 start={142} />
    </Stage>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
