import { useEffect, useReducer, useRef } from "react"
import img1 from "../../assets/img1.webp"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import img5 from "../../assets/img5.jpg"

const images = [img1, img2, img3, img4, img5];

// یک هوک سفارشی و قوی برای مدیریت بهتر setInterval
function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            const id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const Section = () => {
    const sliderRef = useRef(null);

    const reducer = (state, action) => {
        switch(action.type){
            case "SET_COUNTER":
                return { ...state, counter: action.payload };

            case "CHANGE_IMAGE":
                if (sliderRef.current) {
                    sliderRef.current.style.scrollBehavior = "smooth";
                    sliderRef.current.scrollLeft = action.payload * sliderRef.current.offsetWidth;
                }
                return { ...state };

            case "SET_ACTIVE_COLOR": {
                const newChangeColor = {};
                images.forEach((_, i) => {
                    newChangeColor[i] = i === action.payload;
                });
                return { ...state, changeColor: newChangeColor };
            }

            case "NEXT_SLIDE": {
                const nextCounter = state.counter >= images.length - 1 ? 0 : state.counter + 1;
                return { ...state, counter: nextCounter };
            }

            case "PREV_SLIDE": {
                const prevCounter = state.counter <= 0 ? images.length - 1 : state.counter - 1;
                return { ...state, counter: prevCounter };
            }

            default:
                return state;
        }
    }
    const [state, dispatch] =  useReducer(reducer ,{
        counter : 0,
        changeColor: { 0: true },
    })

    const  handleClickItem = (index) => {
        dispatch({type : "SET_COUNTER", payload : index});
    }

    const handlerRight = () => {
        dispatch({ type: "NEXT_SLIDE" });
    }

    const handlerLeft = () => {
        dispatch({ type: "PREV_SLIDE" });
    }

    // افکت برای اسکرول کردن و تغییر رنگ نقطه‌ها وقتی counter عوض می‌شود
    useEffect(() => {
        dispatch({ type: "CHANGE_IMAGE", payload: state.counter });
        dispatch({ type: "SET_ACTIVE_COLOR", payload: state.counter });
    }, [state.counter]);

    // استفاده از هوک سفارشی برای ساخت اینتروال
    useInterval(() => {
        dispatch({ type: "NEXT_SLIDE" });
    }, 4000);
 
    // افکت برای مدیریت تغییر سایز صفحه
    useEffect(() => {
        const handleResize = () => {
            handleClickItem(0); // با تغییر سایز به اسلاید اول برگرد
        };
        handleResize(); // یک بار در اولین رندر اجرا شود
        window.addEventListener('resize', handleResize);
        return() => {
            // حذف listener در زمان unmount شدن کامپوننت برای جلوگیری از نشت حافظه
            window.removeEventListener('resize', handleResize);
        }
    }, []); // آرایه خالی یعنی این افکت فقط یک بار اجرا می‌شود
  
 
    return(
        <div className={` mt-[101px]  h-[600px]`}>
            
            <div className=" relative!">
                <div ref={sliderRef} className="bg-blue-400 w-[100%] h-[600px]   sliderImage  overflow-hidden! flex  flex-col flex-wrap  relative!  ">
                    {images.map((imgSrc, index) => (
                        <div className="bg-green-200 w-[100%]! h-[600px]! itemImg" key={index}>
                            <img src={imgSrc} className="w-[100%]! h-[100%]! object-cover" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <div onClick = {handlerRight} className="bg-transparent absolute! top-[50%] right-[4%]">
                    <i className="bi bi-arrow-right-circle cursor-pointer! text-3xl text-red-200 hover:text-red-800! duration-300"></i>
                </div>
                <div onClick  = {handlerLeft} className="bg-transparent absolute! top-[50%] left-[4%]">
                    <i className="bi bi-arrow-left-circle cursor-pointer! text-3xl text-red-200 hover:text-red-800! duration-300"></i>
                </div>

                <div className=" w-[100%] h-10 flex gap-5 absolute bottom-[5%] bg-transparent  items-center justify-center">
                    {images.map((_, index) => (
                        
                        <div onClick = {() => {handleClickItem(index)}} 
                        className={`clickImgItem rounded-2xl w-[20px] h-[10px]  bg-sky-300 hover:bg-blue-500! cursor-pointer! duration-300! ${state.changeColor[index] ? "bg-red-800! scale-150! w-10!" : "bg-gray-300! scale-100!"}`} key={index}> </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Section;