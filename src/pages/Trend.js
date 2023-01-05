import { useEffect } from "react";
import { useParams } from "react-router";
import Main from "../components/Main";

export default function Trend() {

  useEffect(()=>{
    
  },[])

  const {name} = useParams();
  return(
    <Main title={`#${name}`}>
      
    </Main>
  )
};
