import React, { useReducer, useState } from 'react';
import axios from 'axios';

// مدیریت حالات با useReducer
const initialState = {
  selectedImage: null,
  imageUrl: '', // برای ذخیره URL پیش‌نمایش عکس
  text: '',
  loading: false,
  error: null,
  success: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_IMAGE':
      return { ...state, selectedImage: action.payload, imageUrl: '' }; // پاک کردن imageUrl هنگام انتخاب عکس جدید
    case 'SET_TEXT':
      return { ...state, text: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_SUCCESS':
      return { ...state, success: action.payload, loading: false };
    case 'SET_IMAGE_URL':
      return { ...state, imageUrl: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      dispatch({ type: 'SET_IMAGE', payload: file });

      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch({ type: 'SET_IMAGE_URL', payload: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (event) => {
    dispatch({ type: 'SET_TEXT', payload: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: 'SET_LOADING', payload: true });

    const formData = new FormData();
    if (state.selectedImage) {
      formData.append('image', state.selectedImage);
    }
    formData.append('text', state.text);

    try {
      const response = await axios.post('http://your-backend-url/upload.php', formData, {
        headers: {
        //   'Content-Type': 'multipart/form-data',
          'Content-Type': 'application/json', // مهم: Content-Type را به application/json تغییر دهید
        },
      });

      if (response.status === 200) {
        dispatch({ type: 'SET_SUCCESS', payload: 'ارسال موفقیت آمیز!' });
      } else {
        dispatch({ type: 'SET_ERROR', payload: 'خطا در ارسال' });
      }
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="file" onChange={handleImageChange} />
        {state.imageUrl && (
          <img src={state.imageUrl} alt="Selected Image" style={{ width: 100 }} />
        )}
      </div>
      <div>
        <input type="text" value={state.text} onChange={handleTextChange} placeholder="متن را وارد کنید" />
      </div>
      <button type="submit" disabled={state.loading}>
        {state.loading ? 'در حال ارسال...' : 'ارسال'}
      </button>
      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
      {state.success && <p style={{ color: 'green' }}>{state.success}</p>}
    </form>
  );
}

export default App;
