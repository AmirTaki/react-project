const GrayBoard = () => {
    return (
        <>
            <div className="bg-gray-600 h-[35px] flex justify-evenly items-center text-white gap-10 text-[10px] 
                max-md:grid! max-md:grid-cols-2! max-md:grid-rows-2! max-md:h-[80px] max-md:gap-0! max-md:items- max-md:justify-items-center">
                <div className="hover:text-gray-400 duration-300 cursor-pointer">Cookie Settings</div>
                <div className="hover:text-gray-400 duration-300 cursor-pointer">Your Privacy Choices</div>
                <div className="hover:text-gray-400 duration-300 cursor-pointer">Privacy Policy</div>
                <div className="hover:text-gray-400 duration-300 cursor-pointer">Terms and Conditions</div>

            </div>
        </>
    )
}

export default GrayBoard;