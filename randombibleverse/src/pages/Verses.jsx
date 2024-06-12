// import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ListSubheader from "@mui/material/ListSubheader";
import { Button, CardContent, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import { DndContext } from "@dnd-kit/core";
import Draggable from "../components/Draggable";
import Droppable from "../components/Droppable";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { IoIosAddCircleOutline } from "react-icons/io";
import { blue } from "@mui/material/colors";
import { retrieveAllFolders } from "../api/BiblenetApiService";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function App() {
  const [textInput, setTextInput] = useState("");
  const [booknameInput, setBooknameInput] = useState("");
  const [chapterInput, setChapterInput] = useState("");
  const [verse1Input, setVerse1Input] = useState("");

  const [text, setText] = useState("");
  const [bookname, setBookname] = useState("");
  const [chapter, setChapter] = useState("");
  const [verse1, setVerse1] = useState("");

  const [textRandom, setTextRandom] = useState("");
  const [booknameRandom, setBooknameRandom] = useState("");
  const [chapterRandom, setChapterRandom] = useState("");
  const [verseRandom, setVerseRandom] = useState("");

  const [randomVerses, setRandomVerses] = useState([]);

  const [selectedVersesArray, setSelectedVersesArray] = useState([]);
  const [droppedSelectedVerses, setDroppedSelectedVerses] = useState([]);
  const [showInputForm, setShowInputForm] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [showRandom, setShowRandom] = useState(false);
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
    setBooknameInput(event.target.value);
  };

  const handleChapterChange = (event) => {
    setChapterInput(event.target.value);
  };

  const handleVerse1Change = (event) => {
    setVerse1Input(event.target.value);
  };

  function handleRandom() {
    axios
      .get("http://labs.bible.org/api/?passage=random&type=json")
      .then((response) => {
        setShowRandom(true);
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
        `http://labs.bible.org/api/?passage=${booknameInput}+${setChapterInput}:${verse1Input}&type=json`
      )
      .then((response) => {
        setShowSelect(true);

        setText(response.data[0].text);
        setBookname(response.data[0].bookname);
        setChapter(response.data[0].chapter);
        setVerse1(response.data[0].verse);

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

  useEffect(() => refreshFolders(), []);

  function refreshFolders() {
    retrieveAllFolders()
      .then((response) => {
        console.log("api", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleKeyUp = (event) => {
    if (event.key === "Enter" && event.target.value.trim !== "") {
      const title = event.target.value;
      const verses = [];

      setContainers({ ...containers, [title]: verses });
      setShowInputForm(false);
    }
  };

  function handleRemove(box, index) {
    setContainers({
      ...containers,
      [box]: containers[box].filter((v, i) => index != i),
    });
  }

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
                value={chapterInput}
                id="filled-password-input"
                label="Chapter"
                autoComplete="current-password"
                variant="filled"
              />
              <TextField
                onChange={handleVerse1Change}
                value={verse1Input}
                id="filled-password-input"
                label="Verse"
                autoComplete="current-password"
                variant="filled"
              />
              <Button variant="contained" onClick={handleSelect}>
                Get verse
              </Button>
              <Button variant="contained" onClick={refreshFolders}>
                Call api
              </Button>
              {showSelect && (
                <Draggable id={text} key={text}>
                  <Card>
                    {text}
                    <br></br>
                    <br></br>
                    {`${bookname} `}
                    {chapter}:{verse1}
                  </Card>
                </Draggable>
              )}
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

            {Object.keys(containers).map((box) => (
              <Droppable id={box}>
                <h2>{box}</h2>
                {containers[box].map((verse, i) => (
                  <Item>
                    <Card onClick={() => handleRemove(box, i)}>
                      {verse.text}
                      <br></br>
                      {`${verse.bookname} `}
                      {verse.chapter}:{verse.verse}
                    </Card>
                  </Item>
                ))}
              </Droppable>
            ))}
          </Grid>
          <Grid item xs={6}>
            <Item>
              <h1>Randomize</h1>
              <Button variant="contained" onClick={handleRandom}>
                New Verse
              </Button>
              {showRandom && (
                <Draggable id={textRandom} key={textRandom}>
                  <Card>
                    {textRandom}
                    <br></br>
                    <br></br>
                    {`${booknameRandom} `}
                    {chapterRandom}:{verseRandom}
                    <br></br>
                  </Card>
                </Draggable>
              )}
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
