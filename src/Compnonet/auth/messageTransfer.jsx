const MessageTransfer = ({message, onClick, page}) => {
    return(
        <>
            <div className="flex justify-center items-center mx-auto w-[80%] my-5">
                <div className="flex justify-center! items-center! text-[14px]">
                    <p>{message} 
                        <span
                            className="text-[16px] pl-1 cursor-pointer hover:underline duration-100 font-[600]!"
                            onClick={onClick}
                        >{page}</span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default MessageTransfer;