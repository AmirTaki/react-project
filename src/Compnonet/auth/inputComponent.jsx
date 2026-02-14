const InputComponent = ({icon ,onChange, onFocus, onBlur,  type, id , MoveLabel, inputStatus, inputWarning, label, name}) => {
    return (
        <>
        {/* username Registration */}
            <div 
            
                className="bg-transparent flex flex-col items-center justify-center border-b-2! 
                border-b-[#162938]! mx-auto w-[80%] mt-6 mb-10 relative
                    
                "
            >
                <div className="absolute right-2">
                    <span><i className={icon}></i></span>
                </div>
                <input
                    
                    name = {name}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    type={type}  
                    id  = {id} 
                    className=" outline-0 border-0 text-[1.5em] text-[#162038] w-[100%] h-10 mb-1 bg-transparent! "
                />

                <label 
                    htmlFor={id}
                    className={`${MoveLabel ? "-top-5!" : "top-2!"} transition-all  duration-300 z-30 cursor-pointer absolute left-1  `}
                >
                    {label}
                </label>      
                {/* warning username */}
                <span className={`${inputStatus ? 'text-blue-500' : "text-red-500"} absolute right-0 -top-5`}>{ inputWarning}</span>
            </div>
        </>
    )
}

export default InputComponent;

