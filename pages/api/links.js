// pages/api/links.js
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

export default async function handler(req, res) {
  const { id } = req.query; // Get the id from the query parameters
  const filePath = path.resolve(process.cwd(), 'data', 'links.csv');
  const groupLinks = [];

  try {
    await new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          groupLinks.push(row);
        })
        .on('end', resolve)
        .on('error', reject);
    });

    // Find the group link matching the requested ID
    const matchedGroup = groupLinks.find((group) => group.id === id);
    if (matchedGroup) {
      res.status(200).json(matchedGroup);
    } else {
      res.status(404).json({ message: 'No WhatsApp group found for this course' });
    }
  } catch (error) {
    console.error("Error reading CSV file:", error);
    res.status(500).json({ error: "Failed to read links data." });
  }
}
