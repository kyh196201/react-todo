import { useEffect, useState } from 'react';

export default function useEditorInput(todo) {
  const [editorInput, setEditorInput] = useState(todo.text);

  useEffect(() => {
    setEditorInput(todo.text);
  }, [todo]);

  const handleChangeEditorInput = e => {
    setEditorInput(e.target.value);
  };

  return [editorInput, handleChangeEditorInput];
}
