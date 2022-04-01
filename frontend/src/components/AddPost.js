import "../styles/AddPost.css";
import {AiOutlineCamera} from "react-icons/ai";
import Navbar from '../components/NavBar';

import { Button } from "./Button";

const AddPost= () => {
   

/*Odavde treba uzeti js za addPost stranicu*/
/*   https://github.com/kunaal438/blogging-site  */

    return (
      <>
      <Navbar/>
      <div class="image">
        <input type="file" accept="image/*" id="image-upload" hidden/>
        <label for="image-upload" class="image-upload-btn"><AiOutlineCamera size={35} /></label>
    </div>
    <div class="btn"><Button className="publish-btn"
                             buttonStyle="color"
                             buttonSize="large"
                             text="Objavi članak"
                             route='/home'
                            ></Button>
    </div>
    <div class="blog">
        <textarea type="text" class="title" placeholder="Nalov novog članka..."></textarea>
        
        <textarea type="text" class="article" placeholder="Počnite da pišete ovde..."></textarea>
    </div>

    

   
      
    </>
  
       
    );
  }
  export default AddPost;