import { ButtondownForm } from 'react-buttondown'
import 'react-buttondown/dist/react-buttondown.css'

export default function EmailCTA() {
  const API_KEY = 'your-buttondown-api-key'
  const handleOnSubscribe = subscriber => { /* ... */ }

  return (
    <ButtondownForm
      apiKey={API_KEY}
      onSubscribe={handleOnSubscribe}
    />
  )
}
