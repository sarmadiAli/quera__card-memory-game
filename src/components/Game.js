import Card from "./Card";
import { cardsData } from './../cards'
import React from 'react'
function Game() {
  const [cards, setCards] = React.useState(cardsData)
  const [cardChoose, setCardChoose] = React.useState({})
  const [ok, setOk] = React.useState(false)



  const handlerReq = (index) => {
    const newList = [...cards]
    newList[index] = { ...newList[index], isFlipped: true }
    setCardChoose(prevState => ({ ...newList[index] }))
    setCards(Object.assign([], newList))

    if (cardChoose.hasOwnProperty('name') && cardChoose?.name == newList[index].name) {
      setCardChoose({})

    } else if (cardChoose.hasOwnProperty('name') && cardChoose?.name !== newList[index].name) {
      var myVar;
      const indexCho = newList.findIndex(ele => ele.id === cardChoose.id)
      setOk(true)
      clearTimeout(myVar)
      myVar = setTimeout(() => {
        newList[index] = { ...newList[index], isFlipped: false }
        newList[indexCho] = { ...newList[indexCho], isFlipped: false }
        setCards([...newList])
        setCardChoose({})
        setOk(false)


      }, 1500)

    }



  }


  return (
    <section className="memory-game">
      {cards.map((card, index) => ((
        <Card card={card} key={index} onClick={() => {
          if (!ok) {
            handlerReq(index, card)
          }
        }
        } />

      )))}
    </section>
  );
}

export default Game;
