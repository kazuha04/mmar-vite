import TopNav from './component/TopNav'
function App() {
  return (
    <>
      <TopNav />
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center', alignItems:'center', marginTop:'100px'}}>
          <div id='title' style={{width:'400px'}}>
            <h1 style={{fontSize: '30px'}}>MMAR Website</h1>
            <h2>The website is in development, please come back later!</h2>
            <h4>This website will be an OpenSource project in future!!</h4>
          </div>
        </div>
    </>
  );
}

export default App;
