import { collection,addDoc,query,where,getDocs,deleteDoc,doc } from "firebase/firestore";
import { Post as Ipost } from "./main";
import { db,auth } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect,useState } from "react";

interface Props {
    post: Ipost
}

interface like {
    userId:string;
    likeId:string
}

export const Post = (props:Props) => {
    const { post } = props ;
    const [user] = useAuthState(auth);

   
    return <div> 
         <div className="title">
            <h1> {post.title} </h1>
         </div>

         <div className="body">
            <p> {post.description}</p>
         </div>
         <div className="footer">
            <p> @{post.username} </p>
         </div>
         </div>
}