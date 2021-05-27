// Import the function that returns a copy of the fish array

import {database} from './database.js'

export const FishList = () => {

    const fishes = database.fish
    // console.log(fishes)

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.harvested}</div>
            <div class="fish__diet">${fish.diet}</div>
        </section>
    `
    }
    htmlString += `</article>`

    return htmlString
}
