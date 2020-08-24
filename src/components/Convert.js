import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiKey = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

function Convert({ text, language }) {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslate = async () => {
      //helper function
      const response = await axios.post(
        'https://translation.googleapis.com/language/translate/v2',
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: ApiKey,
          },
        }
      );

      setTranslated(response.data.data.translations[0].translatedText);
      console.log(response.data.data.translations[0].translatedText);
    };

    doTranslate();
  }, [debouncedText, language]);

  return (
    <div>
      <h3>{translated}</h3>
    </div>
  );
}

export default Convert;