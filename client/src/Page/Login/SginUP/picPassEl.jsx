import { useEffect, useState } from "react"
import { mngCrop } from "../../../lib/toggleTheme";
export default function CpassEL() {
    const [img,setimg] = useState({})
    const [prevImage,setPrevImg] = useState(null);
    const {finalIMG,setURL} = mngCrop();
    const handleImg = e=>{
        let myFIle = e.target.files[0]
        if (!myFIle) return ;

        if (myFIle.size > 1 * 1024 * 1024) {
            alert("File size will less then or = 1MB")
            return
        }
        setURL(URL.createObjectURL(myFIle))
    }

        // const handleURL = async (finalIMG) => {
        //   try {
        //     const response = await fetch(finalIMG);
        //     const blob = await response.blob();
        
        //     const file = new File([blob], "croppedIMG.png", { type: blob.type });
        
        //     setimg({
        //       ...img,
        //       imgURL: finalIMG,
        //       file,
        //     });
        //   } catch (error) {
        //     console.error("Error converting blob URL to File:", error);
        //   }
        // };


    useEffect(()=>{
        console.log("i am there ",finalIMG)
        if (finalIMG) {
            setimg({file:finalIMG,fileUrl:URL.createObjectURL(finalIMG)});
        }
    },[finalIMG])
    return(
        <div className="underTaker">
            <div className="picPass flex items-center justify-center">
                <div className="formDiv">
                    <form action="">
                        <div className="Logotxt flex items-center flex-col w-[120px] absolute top-[-100px]">
                            <i className='bx bx-code-block text-5xl
                            transition-all duration-500 ease-in-out bg-[length:200%_200%]
                            bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-600
                            bg-clip-text text-transparent
                            '></i>
                            <h2 className=' font-bold text-2xl transition-all duration-500 ease-in-out bg-[length:200%_200%]
                            bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-600
                            bg-clip-text text-transparent'>CodeCove</h2>
                        </div>
                        <div className="inputDiv !flex-col !h-[80px]  !items-center">
                            <input type="file" onChange={(evnt)=>handleImg(evnt)} style={{display:"none"}} id="file" name="file" accept="image/*" multiple={false} />
                            <label className="!left-[40%] !top-13 !cursor-pointer" htmlFor="file"><i className="bx bx-image">Avatar</i></label>
                            <div onClick={()=> document.getElementById("file").click()}  className="imgDiv flex items-center justify-center h-13 w-13 rounded-full">
                                <img src={img?.fileUrl || "https://i.postimg.cc/zDK9mWZX/girl-anime.avif"} className="h-12 w-12 rounded-full" alt="DP" />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <input type="password" name="password" id="password" />
                            <label htmlFor="password"><i className="bx bx-key">Password</i></label>
                        </div>
                        <div className="inputDiv">
                            <button className="text-btn">Back</button>
                            <button className="btn">Create Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}