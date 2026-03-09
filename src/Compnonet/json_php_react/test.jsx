import { useState } from "react";
import HeaderPanelAdmin from "../../header/header";
import api from "../../../../axiosConfig";

const TESTIMG = () => {
    const [selectdImage, setSelectedImage] =  useState(null)

    const handleeFileChange = (event) => {
        const file = event.target.files[0]
        if(file){
            setSelectedImage(file)
        }

    }
    const handlerSubmit = async (event) => {
        event.preventDefault();

        if(!selectdImage){
            alert('لطفا عکس انتخاب کنید')
        }

        const reader = new FileReader();

        reader.onloadend = async () => {
            const base64String = reader.result;

            try{
                await api.post("tables/megaMenu/menuImage/test.php", {image: base64String}, {withCredentials: true}).then((res) => {
                    res;
                })                
            }
            catch(err){
                console.error('message', err)
            }
        }
        reader.readAsDataURL(selectdImage)
    }


    return (
        <div className="">
            <HeaderPanelAdmin />
            <div className=" top-20 absolute w-full  min-h-screen bg-[#252525]!  text-white z-10">
            
                <form>
                    <div className="flex justify-center items-center flex-col gap-10">
                        <label>image</label>
                        <input type="file" className="border-2 p-3" accept="image/*" onChange={handleeFileChange} />
                        <input type="submit" value = 'send' className="border-2 p-3"
                            onClick={(event) => {handlerSubmit(event)}}
                        ></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TESTIMG;