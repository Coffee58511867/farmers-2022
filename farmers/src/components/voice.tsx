import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button, Box} from "@chakra-ui/react"
import Header from "./Header"

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
 
  const handleSubmit = () => SpeechRecognition.startListening();

  return (
    <div>
      <Header />
      <Box>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <Button colorScheme='teal' variant='outline' size={'lg'} mr={10} onClick={handleSubmit}>Start</Button>
      <Button colorScheme='teal' variant='outline' size={'lg'} mr={10} onClick={SpeechRecognition.stopListening}>Stop</Button>
      <Button colorScheme='teal' variant='outline' size={'lg'}onClick={resetTranscript}>Reset</Button>
      <p>{transcript}</p>
      </Box>
    </div>
  );
};
export default Dictaphone;