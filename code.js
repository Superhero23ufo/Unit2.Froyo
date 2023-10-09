// Prompt the user for the list of froyo flavors
const userInput = prompt('Enter a list of comma-separated froyo flavors:')

// Split the input into an array of flavors
const flavors = userInput.split(',').map((flavor) => flavor.trim())

// Count the occurrences of each flavor
const flavorCounts = {}
flavors.forEach((flavor) => {
	flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1
})

// Display the results in a table in the console
console.table(flavorCounts)


