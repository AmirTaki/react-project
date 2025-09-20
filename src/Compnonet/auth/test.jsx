    {/* <div 
                
                    className="bg-transparent flex flex-col items-center justify-center border-b-2! 
                    border-b-[#162938]! mx-auto w-[80%] mt-6 mb-10 relative"
                >
                    <div className="absolute right-2">
                        <span><i className="bi bi-envelope"></i></span>
                    </div>
                    <input
                        onChange = {(e) => {dispatch({type : 'emailLogin', payload : e.target.value})}}
                        onFocus={() => {dispatch({type : "moveLabel", payload : {index : 0, bool : true}})}}
                        onBlur={() => {dispatch({type : "moveLabel", payload : {index : 0, bool : false}})}}
                        type="email"  id  = 'email' 
                        className=" outline-0 border-0 text-[1.5em] text-[#162038] w-[100%] h-10 mb-1 "
                    />

                    <label 
                        htmlFor="email"
                        className={`${state.moveLabel[0] ? "-top-5!" : "top-2!"} transition-all  duration-300 z-30 cursor-pointer absolute left-1  `}
                    >
                        Email
                    </label>    */}
                    {/* warning email */}
                    {/* <span className="text-red-500 absolute right-0 -top-5">{state.warningEmail}</span> */}
                </div>