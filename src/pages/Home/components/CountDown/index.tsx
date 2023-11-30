import { useContext, useEffect } from 'react'
import { CountdownContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../../../../Context/CyclesContext'

export function CountDown() {
  const {
    activeCycle,
    markCurrentCyclesAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      // Nem sempre o timer do setInterval é executado ao mesmo tempo
      // que o valor passado no segundo parâmetro
      interval = setInterval(() => {
        const secondsPassed = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )

        if (secondsPassed >= totalSeconds) {
          markCurrentCyclesAsFinished()
          clearInterval(interval)
          setSecondsPassed(totalSeconds)
        } else {
          setSecondsPassed(
            differenceInSeconds(new Date(), activeCycle.startDate),
          )
        }
      }, 1000)
    }

    // Executa a função de limpeza antes do proximo render
    // Lembre-se que é sempre antes do proximo render
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, markCurrentCyclesAsFinished, totalSeconds, setSecondsPassed])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [activeCycle, minutes, seconds])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
