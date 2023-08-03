import { useEffect, useState } from 'react';

const useFilePreview = (file: FileList) => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    if (file && file[0] && typeof file !== 'string') {
      const newURL = URL?.createObjectURL(file[0]);

      if (newURL !== imageURL) setImageURL(newURL);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return {
    imageURL,
    setImageURL
  };
};

export default useFilePreview;
