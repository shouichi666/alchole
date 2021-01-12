import React from "react";

const Item = (props) => {
  let item = props.item[0];
  let name;
  let thumb;
  let instructions;
  let arrayIngredient = [[], []];
  let ingredient = [];
  let measur = [];
  let row = [];

  const catchItem = () => {
    for (let i = 1; i < 16; i++) {
      arrayIngredient[0].push(item["strIngredient" + i]);
      arrayIngredient[1].push(item["strMeasure" + i]);
    }
    ingredient = arrayIngredient[0].filter(Boolean);
    measur = arrayIngredient[1].filter(Boolean);
  };

  if (props.item !== "") {
    name = item.strDrink;
    thumb = item.strDrinkThumb;
    instructions = item.strInstructions;
    catchItem();
  } else {
    name = "No Name";
    thumb = "No Image";
    instructions = "No text";
  }

  for (let i = 0; i < ingredient.length; i++) {
    row.push(
      <li key={i} className="ItemContainer__recipeList--item">
        <span className="ItemContainer__recipeList--item--left">
          {ingredient[i]}
        </span>
        <span className="ItemContainer__recipeList--item--right">
          {measur[i]}
        </span>
      </li>
    );
  }

  return (
    <div className="serch Item">
      <p className="Item__name">{name}</p>
      <div className="ItemContainer">
        <div className="ItemContainer__top">
          <img src={thumb} alt="" />
        </div>
        <div className="ItemContainer__mid">
          <p className="ItemContainer__title">Ingredient</p>
          <ul className="ItemContainer__recipeList">{row}</ul>
        </div>
        <div className="ItemContainer__bottom">
          <p>{instructions}</p>
        </div>
      </div>
    </div>
  );
};
export default Item;

// dateModified
// :
// "2016-11-04 09:50:39"
// idDrink
// :
// "11014"
// strAlcoholic
// :
// "Alcoholic"
// strCategory
// :
// "Ordinary Drink"
// strCreativeCommonsConfirmed
// :
// "Yes"
// strDrink
// :
// "Alexander"
// strDrinkAlternate
// :
// null
// strDrinkDE
// :
// null
// strDrinkES
// :
// null
// strDrinkFR
// :
// null
// strDrinkThumb
// :
// "https://www.thecocktaildb.com/images/media/drink/0clus51606772388.jpg"
// strDrinkZH-HANS
// :
// null
// strDrinkZH-HANT
// :
// null
// strGlass
// :
// "Cocktail glass"
// strIBA
// :
// "Unforgettables"
// strImageAttribution
// :
// "pxfuel.com"
// strImageSource
// :
// "https://www.pxfuel.com/en/free-photo-expqp"
// strIngredient1
// :
// "Gin"
// strIngredient10
// :
// null
// strIngredient11
// :
// null
// strIngredient12
// :
// null
// strIngredient13
// :
// null
// strIngredient14
// :
// null
// strIngredient15
// :
// null
// strIngredient2
// :
// "Creme de Cacao"
// strIngredient3
// :
// "Light cream"
// strIngredient4
// :
// "Nutmeg"
// strIngredient5
// :
// null
// strIngredient6
// :
// null
// strIngredient7
// :
// null
// strIngredient8
// :
// null
// strIngredient9
// :
// null
// strInstructions
// :
// "Shake all ingredients with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve."
// strInstructionsDE
// :
// "Alle Zutaten mit Eis schütteln und in ein Cocktailglas abseihen. Muskatnuss darüber streuen und servieren."
// strInstructionsES
// :
// null
// strInstructionsFR
// :
// null
// strInstructionsZH-HANS
// :
// null
// strInstructionsZH-HANT
// :
// null
// strMeasure1
// :
// "1/2 oz "
// strMeasure10
// :
// null
// strMeasure11
// :
// null
// strMeasure12
// :
// null
// strMeasure13
// :
// null
// strMeasure14
// :
// null
// strMeasure15
// :
// null
// strMeasure2
// :
// "1/2 oz white "
// strMeasure3
// :
// "2 oz "
// strMeasure4
// :
// null
// strMeasure5
// :
// null
// strMeasure6
// :
// null
// strMeasure7
// :
// null
// strMeasure8
// :
// null
// strMeasure9
// :
// null
// strTags
// :
// "IBA,Classic,Dairy"
// strVideo
// :
// "https://www.youtube.com/watch?v=qEhRK_v2w2g"
// new entry
// :
