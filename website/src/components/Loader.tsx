import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export const Loader = () => {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsVisible(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 30)
    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center overflow-hidden"
          data-testid="loader"
        >
          <div className="absolute inset-0 -z-10">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], rotate: [0, 45, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[100px] rounded-full"
            />
            <motion.div 
              animate={{ scale: [1, 1.3, 1], rotate: [0, -30, 0] }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/15 blur-[120px] rounded-full"
            />
          </div>

          <div className="relative mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
              className="w-32 h-32 rounded-full border-2 border-primary/30 flex items-center justify-center text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
            >
              Я
            </motion.div>
          </div>

          <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden mb-4 relative">
            <motion.div 
              className="absolute h-full bg-gradient-to-r from-primary to-secondary"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-white/40 text-xs font-bold uppercase tracking-[0.4em]" data-testid="loader-progress">
            Загрузка • {progress}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
