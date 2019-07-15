import express,{Request,Response, response} from 'express';
import bodyParser from 'body-parser';
import {checkUrl,filterImageFromURL, deleteLocalFiles} from './util/util';
import { resolve } from 'bluebird';


(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // @TODO1 IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  //    1
  //    1. validate the image_url query
  //    2. call filterImageFromURL(image_url) to filter the image
  //    3. send the resulting file in the response
  //    4. deletes any files on the server on finish of the response
  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  app.get("/filteredimage",async(req:Request,res:Response)=>{
    let { image_url } = req.query;
    if(!image_url)
      return res.status(400).send("image_url is required");

    if(!(image_url.includes(".png") || image_url.includes(".jpg"))){
      return res.status(415).send("handles .png and .jpg extension");
    }
    
    let statusCode=await checkUrl(image_url);
    if(statusCode===200){
      let filterImage=await filterImageFromURL(image_url);
       res.status(200).sendFile(filterImage,err=>{
        deleteLocalFiles([filterImage])
        .then(a=>console.log("Successfully deleted:"+filterImage))
        .catch(error=>console.error("Failed to delete: "+error)); 
       });
    }else{
      return res.status(422).json({image_url_status_code:statusCode});
    }
  });

  //! END @TODO1
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();