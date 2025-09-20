const CheckComponent = ({id, onChange, label}) => {
    return (
        <>
            {/* checkbox Registration */}
            <div 
                className="flex flex-row  justify-between 
                mx-auto w-[80%] my-3 relative p-1 "
            >
                <div className="flex gap-1  ">
                    <input
                        onChange={onChange}
                        type="checkbox"  id  = {id} 
                        className="accent-[#162938]  "
                    />

                    <label 
                        htmlFor={id} className="text-[13px] font-thin! "
                    >
                       {label}
                    </label>     
                </div>
            </div>
        </>    
   
    )
}

export default CheckComponent;