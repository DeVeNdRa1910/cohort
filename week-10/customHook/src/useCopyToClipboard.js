//useCopyToClipboard
// lets make a hook that copy text to bord
import copy from "copy-to-clipboard";
import { useState } from "react"

export default function useCopyToClipboard() {
  const [isCopied, setCopied] = useState(false);

  function handleCopy(text){
    if(typeof text === "String" || typeof text === "number"){
      copy(String(text)); // convert text to String then copy
      setCopied(true);
    }else{
      console.error(`Cannot copy typeof ${typeof text} to clipboard, must be String or number.`);
      setCopied(false)
    }
  }

  return {isCopied, handleCopy}
}