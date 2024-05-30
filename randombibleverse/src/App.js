import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ListSubheader from "@mui/material/ListSubheader";
import { Button, TextField } from "@mui/material";

function App() {
  const [text, setText] = useState("");
  const [bookname, setBookname] = useState("");
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const otBooks = [
    "Genesis",
    "Exodus",
    "Leviticus",
    "Numbers",
    "Deuteronomy",
    "Joshua",
    "Judges",
    "Ruth",
    "1 Samuel",
    "2 Samuel",
    "1 Kings",
    "2 Kings",
    "1 Chronicles",
    "2 Chronicles",
    "Ezra",
    "Nehemiah",
    "Tobit",
    "Judith",
    "Esther",
    "1 Maccabees",
    "2 Maccabees",
    "Job",
    "Psalms",
    "Proverbs",
    "Ecclesiastes",
    "Song of Songs",
    "Wisdom",
    "Sirach",
    "Isaiah",
    "Jeremiah",
    "Lamentations",
    "Baruch",
    "Ezekiel",
    "Daniel",
    "Hosea",
    "Joel",
    "Amos",
    "Obadiah",
    "Jonah",
    "Micah",
    "Nahum",
    "Habakkuk",
    "Zephaniah",
    "Haggai",
    "Zechariah",
    "Malachi",
  ];
  const ntBooks = [
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Jude",
    "Revelation",
  ];

  const otBooksMenu = otBooks.map((book) => (
    <MenuItem value={book}>{book}</MenuItem>
  ));

  const ntBooksMenu = ntBooks.map((book) => (
    <MenuItem value={book}>{book}</MenuItem>
  ));

  const handleChange = (event) => {
    setBookname(event.target.value);
  };
  console.log(bookname);

  function handleRandom() {
    axios
      .get("http://labs.bible.org/api/?passage=random&type=json")
      .then((response) => {
        setText(response.data[0].text);
        setBookname(response.data[0].bookname);
        setChapter(response.data[0].chapter);
        setVerse(response.data[0].verse);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
          <h1>Select</h1>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-filled-label">Book</InputLabel>
            <Select onChange={handleChange}>
              <ListSubheader>Old Testament</ListSubheader>
              {otBooksMenu}
              <ListSubheader>New Testament</ListSubheader>
              {ntBooksMenu}
            </Select>
          </FormControl>
          <TextField
            id="filled-password-input"
            label="Chapter"
            autoComplete="current-password"
            variant="filled"
          />
          <TextField
            id="filled-password-input"
            label="Verse"
            autoComplete="current-password"
            variant="filled"
          />
          <Button variant="contained">Get verse</Button>
        </Box>
      </Container>
      <br></br>
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
          <h1>Randomize</h1>
          {text}
          <br></br>
          <br></br>
          {bookname}
          {chapter}:{verse}
          <br></br>
          <br></br>
          <Button variant="contained" onClick={handleRandom}>
            New Verse
          </Button>
        </Box>
      </Container>
      {verse}
    </div>
  );
}

export default App;
