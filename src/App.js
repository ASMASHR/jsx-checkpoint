
import './App.css'; // app.css is the style sheet 
import MyimgInSrc from "./imgInSrc.png" //this picture is imported from the src folder

function App() {
 function formatName(user) {
  return user.firstName + ' ' + user.lastName ;
}//this function call the user class and return it's attributs, it's called in the <h1>tag

const user = {
  firstName: 'Asma',
  lastName: 'Sahraoui',
  
};

  return (
    < div className="App">
      {/* style={{}} for inline styling from the html code */}
      < div  style={{ border: 'solid 3px black', maxWidth: '100vw' }}>
        <h1 className="title-red">Hi! I'm {formatName(user)}</h1>
        {/* the <h3> styled using the app.css by calling the className */}
        <h3 className="paragraph1">I'm trying to understand how to style and add pictures and videos using JSX</h3>
      {/* I add a div tag named images for the images then using the app.css for the display flex flex-direction=column to delete the <br> tag */}
        <div className="images">
          <img src={MyimgInSrc } alt="image in src folder"   />
          <img src={"/imgInPublic.png"}  alt="image in public folder" />
        </div> 
      </div>
      <video style={{width:"420px", height:"340px"}}  controls>
        <source src={"/videos/myVideo.mp4"} type="video/mp4" />
      </video>
    </div>
      );
}

      export default App;
