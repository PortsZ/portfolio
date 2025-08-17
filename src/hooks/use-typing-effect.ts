import { useState, useEffect, useCallback } from 'react'

export const useTypingEffect = (
  words: string[],
  typingSpeed: number = 100,
  deletingSpeed: number = 50,
  pauseDuration: number = 2000
) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isTyping, setIsTyping] = useState(true)

  const type = useCallback(() => {
    const currentWord = words[currentWordIndex]
    
    if (isDeleting) {
      setCurrentText(currentWord.substring(0, currentText.length - 1))
      
      if (currentText === '') {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    } else {
      setCurrentText(currentWord.substring(0, currentText.length + 1))
      
      if (currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseDuration)
      }
    }
  }, [currentWordIndex, currentText, isDeleting, words, pauseDuration])

  useEffect(() => {
    const timer = setTimeout(
      type,
      isDeleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timer)
  }, [type, isDeleting, typingSpeed, deletingSpeed])

  return { currentText, isTyping: currentText !== words[currentWordIndex] || isDeleting }
}
