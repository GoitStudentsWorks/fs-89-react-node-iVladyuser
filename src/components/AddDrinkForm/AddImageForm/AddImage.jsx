import { TfiPlus, TfiReload } from 'react-icons/tfi';

import {
  AddFileButton,
  BackgroundImg,
  Button,
  Icon,
  InputWrapper,
  ErrorText,
} from './AddImage.styled';
import { useState } from 'react';
import { useField } from 'formik';

const AddImage = ({ setValue, fileRef }) => {
  const [fileUrl, setFileUrl] = useState('');

  const [, meta] = useField('file');

  const onChangeFile = e => {
    const imgObject = e.currentTarget.files[0] ?? null;

    const fileUrl = imgObject ? URL.createObjectURL(imgObject) : null;

    if (fileUrl) {
      setFileUrl(fileUrl);
      setValue('file', imgObject);
    }
  };

  return (
    <InputWrapper>
      <input
        ref={fileRef}
        type="file"
        name="file"
        id="add-file"
        onChange={onChangeFile}
        accept="image/*"
      />
      <AddFileButton>
        <label htmlFor="add-file">
          {fileUrl && fileRef.current.value && (
            <BackgroundImg>
              <img id="uploaded-file" src={fileUrl} alt="file" />
            </BackgroundImg>
          )}
          <Button>
            <Icon>
              {fileUrl && fileRef.current.value ? (
                <TfiReload size={16} />
              ) : (
                <TfiPlus size={16} />
              )}
            </Icon>
            {fileUrl && fileRef.current.value ? 'Update file' : 'Add image'}
          </Button>
        </label>
      </AddFileButton>
      {meta.touched && meta.error ? <ErrorText>{meta.error}</ErrorText> : null}
    </InputWrapper>
  );
};
export default AddImage;
