const ButtonComponent = ({onClick ,value, }) => {
    return (
        <>
        {/* button register */}
        <div className="flex justify-center items-center mx-auto w-[80%] ">
            <input 
                onClick =  {onClick}
                type="submit" value = {value} className="border-0 outline-0 bg-[#162938] text-center h-12 w-[100%] rounded-lg
                text-white cursor-pointer" 
            />
        </div>
        </>
    )
}

export default ButtonComponent;