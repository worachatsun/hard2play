import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { Button } from 'semantic-ui-react'

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  return (
    <>
      <Button basic color='green' onClick={() => SpeechRecognition.startListening()}>Start</Button>
      <Button basic color='green' onClick={SpeechRecognition.stopListening}>Stop</Button>
      <Button basic color='green' onClick={resetTranscript}>Reset</Button>
      <p>{transcript}</p>
    </>
  )
}
export default Dictaphone