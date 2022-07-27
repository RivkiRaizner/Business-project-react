import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineFileUpload } from 'react-icons/md';
import '../css/Upload.css';
import axios from 'axios';
import UploadFileContent from "./UploadFileContent";

const Upload = () => {

   const [fileRouter, setFileRouter] = useState("");
   const [loader, setLoader] = useState(false);
   const [fileContent, setFileContent] = useState();
   const [indexes, setIndexes] = useState([]);
   const uploadFileRef = useRef();
   const startSearch = useRef();


   // useEffect(() => {
   //    //המרה לג'ייסון או XML
   //    //קריאת שרת
   //    //ברספונס שחוזר מקריאת השרת נקבל את האינדקסים לתוך מערך סטייטי מקומי
   //    //setIndexes(אינדקס שחזר מהקריאה)
   // }, [fileContent])

   const uploadFile = () => {
      uploadFileRef.current.click();
   }
   const startsearching = () => {
      setLoader(true);
      axios.get("http://localhost:5000/File").then(res => {
         console.log(res.data);
         setLoader(false);
      }).catch(err => {
         setLoader(false);
         console.log(err.data);
      })

      setFileRouter(uploadFileRef.current.value);
      console.log(uploadFileRef.current.value)
   }

   // axios.post("http://localhost:5000/File").then(res=>{
   //    console.log(res.data);
   //    setLoader(false);
   // }).catch(err=>{
   //    setLoader(false);
   //    console.log(err.data);
   // })

   const getUploadFile = (e) => {
      console.log(uploadFileRef.current.files[0]);
      //קריאת הקובץ
      const reader = new FileReader()
      reader.readAsText(uploadFileRef.current.files[0]);
      reader.onload = async (e) => {
         setFileContent(e.target.result);
         console.log(e.target.result);
      };
   }

   return (
      <div id="mainUpload">
         <Link to="/">Home</Link>
         <div className="inputText">
            <input type="text" ref={uploadFileRef}
               onChange={(e) => setFileRouter(e.target.value)}
               onKeyDown={(e) => e.key === 'Enter' ? startsearching() : ""}
               className="inputText"
               placeholder="הכנס טקסט לבדיקה" >
            </input><br />
            <div className="uploadIcon" title="העלאת קבצים">
               <MdOutlineFileUpload size={40} onClick={uploadFile} />
            </div>
            <input type="file" ref={uploadFileRef} onChange={(e) => getUploadFile(e)} style={{ visibility: "hidden" }} />
            <button className="startChecking" ref={startSearch} onClick={() => startsearching()}>שלח לבדיקה</button>
         </div>
         {/* <div className="serchingAnimation"> */}
         {
            loader &&
            <div className="spinner-border text-danger" role="status" >
               <span className="sr-only"></span>
            </div>
         }

         {
            fileContent &&
            <UploadFileContent fileContent={fileContent} indexes={indexes}/>
         }
         {/* </div> */}
      </div>
   )

}
export default Upload;

