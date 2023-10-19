import Card from './Card'
import FriedRice from './images/ChickenFriedRice.png'
import Curry from './images/ChickenCurry.png'
import Chole from './images/Chole.png'

const Nonveg = () => {
  return (
    <div>
        <font face="Comic Sans MS" color="Black ">
        <fieldset style={{ width: '60%' }}>
          <center>
          <h1>NonVeg Recipies</h1><br />
          </center>
          <Card name="Chicken Fried Rice" Photo={FriedRice} desc="FRESH INGREDIENTS – The 2 key ingredients, i.e. Paneer and peas have to be fresh and moist. Homemade moist paneer is highly recommended with fresh peas over frozen ones. Also, try to use flavored and fresh aromatic spices to get the best result.
GRAVY BASE – The ideal and authentic way to prepare the gravy base is to make it with finely chopped tomatoes and onions. These are sauteed till mushy and then blended to a smooth paste. Avoid using canned tomato puree and canned white onions.
CREAM VS. YOGURT – The texture and the creaminess of the gravy base arrive with the addition of dairy products like cream or curd (yogurt). However, the addition of cream makes it super tasty as yogurt can make it sour or tangy in taste.
EXPERIMENT – The recipe can be experimented with to have additional vegetables with the matar and paneer. However, it should not supersede the 2 main ingredients. You may add sliced carrots, mushrooms, and even capsicums.
SIMMER SLOWLY – The important tip to get the best flavor and taste is to cook the tomato onion gravy base in slow to medium heat. The oil should start oozing out which means the base is perfectly cooked and ready to take paneer and matar in it."/>
          <Card name="Chicken Curry" Photo={Curry} desc="FRESH INGREDIENTS – The 2 key ingredients, i.e. Paneer and peas have to be fresh and moist. Homemade moist paneer is highly recommended with fresh peas over frozen ones. Also, try to use flavored and fresh aromatic spices to get the best result.
GRAVY BASE – The ideal and authentic way to prepare the gravy base is to make it with finely chopped tomatoes and onions. These are sauteed till mushy and then blended to a smooth paste. Avoid using canned tomato puree and canned white onions.
CREAM VS. YOGURT – The texture and the creaminess of the gravy base arrive with the addition of dairy products like cream or curd (yogurt). However, the addition of cream makes it super tasty as yogurt can make it sour or tangy in taste.
EXPERIMENT – The recipe can be experimented with to have additional vegetables with the matar and paneer. However, it should not supersede the 2 main ingredients. You may add sliced carrots, mushrooms, and even capsicums.
SIMMER SLOWLY – The important tip to get the best flavor and taste is to cook the tomato onion gravy base in slow to medium heat. The oil should start oozing out which means the base is perfectly cooked and ready to take paneer and matar in it."/>
          <Card name="Chole Bature" Photo={Chole} desc="FRESH INGREDIENTS – The 2 key ingredients, i.e. Paneer and peas have to be fresh and moist. Homemade moist paneer is highly recommended with fresh peas over frozen ones. Also, try to use flavored and fresh aromatic spices to get the best result.
GRAVY BASE – The ideal and authentic way to prepare the gravy base is to make it with finely chopped tomatoes and onions. These are sauteed till mushy and then blended to a smooth paste. Avoid using canned tomato puree and canned white onions.
CREAM VS. YOGURT – The texture and the creaminess of the gravy base arrive with the addition of dairy products like cream or curd (yogurt). However, the addition of cream makes it super tasty as yogurt can make it sour or tangy in taste.
EXPERIMENT – The recipe can be experimented with to have additional vegetables with the matar and paneer. However, it should not supersede the 2 main ingredients. You may add sliced carrots, mushrooms, and even capsicums.
SIMMER SLOWLY – The important tip to get the best flavor and taste is to cook the tomato onion gravy base in slow to medium heat. The oil should start oozing out which means the base is perfectly cooked and ready to take paneer and matar in it."/>
        </fieldset>
      </font>
    </div>
  )
}

export default Nonveg
