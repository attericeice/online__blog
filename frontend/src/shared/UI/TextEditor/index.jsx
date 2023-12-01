
import '../../../assets/style/Editor.scss';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';




const TextEditor = ({value, changeHandler}) => {
  return (
  
    <CKEditor editor={Editor} 
    data={value || ''}
    onError={error => console.log(error)}
    onReady={(editor) => {
    }}
    onChange={(event, editor) => changeHandler(editor.getData())}
    disableWatchdog={true}
    config={{
      initialData: value || '',
      _watchdogInitialData: value || '',
      ckfinder: {
        uploadUrl: 'http://localhost:7000/api/posts/image/insert'
      }

    }}
    
    />

  )
}

export default TextEditor;