import "./App.css";
import axios from "axios";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ListSubheader from "@mui/material/ListSubheader";
import { Button, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import { DndContext } from "@dnd-kit/core";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { IoIosAddCircleOutline } from "react-icons/io";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function App() {
  const [text, setText] = useState("");
  const [bookname, setBookname] = useState("");
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");

  const [textRandom, setTextRandom] = useState("");
  const [booknameRandom, setBooknameRandom] = useState("");
  const [chapterRandom, setChapterRandom] = useState("");
  const [verseRandom, setVerseRandom] = useState("");

  const [randomVerses, setRandomVerses] = useState([]);

  const [selectedVersesArray, setSelectedVersesArray] = useState([]);
  const [droppedSelectedVerses, setDroppedSelectedVerses] = useState([]);
  const [showInputForm, setShowInputForm] = useState(false);

  const [containers, setContainers] = useState({});
  function toggleInput() {
    setShowInputForm((showInputForm) => !showInputForm);
  }

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

  const handleBookChange = (event) => {
    setBookname(event.target.value);
  };

  const handleChapterChange = (event) => {
    setChapter(event.target.value);
  };

  const handleVerse1Change = (event) => {
    setVerse(event.target.value);
  };

  function handleRandom() {
    axios
      .get("http://labs.bible.org/api/?passage=random&type=json")
      .then((response) => {
        setTextRandom(response.data[0].text);
        setBooknameRandom(response.data[0].bookname);
        setChapterRandom(response.data[0].chapter);
        setVerseRandom(response.data[0].verse);

        const newSelectedVerse = {
          text: response.data[0].text,
          bookname: response.data[0].bookname,
          chapter: response.data[0].chapter,
          verse: response.data[0].verse,
        };
        console.log("newSelectedVerse", newSelectedVerse);
        selectedVersesArray.push(newSelectedVerse);
      })
      .catch((error) => console.error(error));
  }
  function handleSelect() {
    axios
      .get(
        `http://labs.bible.org/api/?passage=${bookname}+${chapter}:${verse}&type=json`
      )
      .then((response) => {
        setText(response.data[0].text);
        setBookname(response.data[0].bookname);
        setChapter(response.data[0].chapter);
        setVerse(response.data[0].verse);

        const newSelectedVerse = {
          text: response.data[0].text,
          bookname: response.data[0].bookname,
          chapter: response.data[0].chapter,
          verse: response.data[0].verse,
        };
        console.log("newSelectedVerse", newSelectedVerse);
        selectedVersesArray.push(newSelectedVerse);
      })
      .catch((error) => console.error(error));
  }

  const handleKeyUp = (event) => {
    if (event.key === "Enter" && event.target.value.trim !== "") {
      const title = event.target.value;
      const verses = [];

      setContainers({ ...containers, [title]: verses });
    }
  };

  return (
    <div className="App">
      <DndContext onDragEnd={handleDragEnd}>
        <Grid
          container
          rowSpacing={1}
          height={200}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={6}>
            <Item>
              <h1>Select</h1>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-filled-lael">
                  Book
                </InputLabel>
                <Select onChange={handleBookChange}>
                  <ListSubheader>Old Testament</ListSubheader>
                  {otBooksMenu}
                  <ListSubheader>New Testament</ListSubheader>
                  {ntBooksMenu}
                </Select>
              </FormControl>
              <TextField
                onChange={handleChapterChange}
                value={chapter}
                id="filled-password-input"
                label="Chapter"
                autoComplete="current-password"
                variant="filled"
              />
              <TextField
                onChange={handleVerse1Change}
                value={verse}
                id="filled-password-input"
                label="Verse"
                autoComplete="current-password"
                variant="filled"
              />
              <Button variant="contained" onClick={handleSelect}>
                Get verse
              </Button>

              <Draggable id={text} key={text}>
                <Card>{text}</Card>
              </Draggable>
            </Item>
          </Grid>

          <Grid item xs={6}>
            <Item>
              <Button onClick={toggleInput}>
                <IoIosAddCircleOutline></IoIosAddCircleOutline>
              </Button>
              {showInputForm && (
                <TextField
                  id="filled-password-input"
                  label="New Container"
                  autoComplete="current-password"
                  variant="filled"
                  onKeyUp={handleKeyUp}
                />
              )}
            </Item>
            <Item>
              {Object.keys(containers).map((box) => (
                <Droppable id={box}>
                  <p>{box}</p>
                  {containers[box].map((verse) => (
                    <p>{verse.text}</p>
                  ))}
                </Droppable>
              ))}
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h1>Randomize</h1>
              <Button variant="contained" onClick={handleRandom}>
                New Verse
              </Button>

              <Draggable id={textRandom} key={textRandom}>
                <Card>
                  {textRandom}
                  <br></br>
                  <br></br>
                  {booknameRandom}
                  {chapterRandom}:{verseRandom}
                  <br></br>
                </Card>
              </Draggable>
            </Item>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </DndContext>
    </div>
  );

  function handleDragEnd(event) {
    console.log("event", event);
    const { over } = event;
    console.log("over", over);
    if (over) {
      const activeVerse = selectedVersesArray.find(
        ({ text }) => text === event.active.id
      );

      const container = over.id;
      if (activeVerse) {
        setContainers({
          ...containers,
          [container]: [...containers[container], activeVerse],
        });
      }
    }
  }
}

export default App;
