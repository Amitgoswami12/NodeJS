const fs = require('fs');
const jsonFilePath = "./credit_card_data.json";
const valid_ids = [2,4,1]; // Replace with your valid IDs

if (fs.existsSync(jsonFilePath)) {
  // Read data from the JSON file
  const jsonData = fs.readFileSync(jsonFilePath, 'utf-8');
  const data = JSON.parse(jsonData);

  // Filter and map data based on valid_ids
  const filteredData = data
    .filter(card => valid_ids.includes(Number(card.ID)))
    .map(card => ({
      ID: card.ID,
      Name: card.Name,
      Interest: card.Interest,
      Feature1: card.Feature1,
      Feature2: card.Feature2,
      Feature3: card.Feature3,
      Feature4: card.Feature4
    }));

  // Display the filtered and mapped data
  console.log(filteredData);
} else {
  console.log('JSON file does not exist. Run the main script to generate it.');
}
