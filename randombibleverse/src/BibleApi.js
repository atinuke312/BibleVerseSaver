// $(document).ready(function () {
//   //access the API
//   var verse, reference;
//   function getRandVerse() {
//     $.ajax({
//       url: "https://labs.bible.org/api/?passage=random&type=json",

//       success: function (response) {
//         console.log("Response: " + response);
//         verse = JSON.parse(response)[0].text;
//         reference =
//           JSON.parse(response)[0].bookname +
//           " " +
//           JSON.parse(response)[0].chapter +
//           ":" +
//           JSON.parse(response)[0].verse;
//         console.log(verse);
//         if (verse) {
//           $("#quote").text(verse);
//         } else {
//           $("#quote").text("...");
//         }

//         if (reference) {
//           $("#reference").text(reference);
//         } else {
//           $("#reference").text("...");
//         }
//       },
//     });
//   }
//   $("#tweetButton").click(function () {
//     window.open(
//       "https://twitter.com/intent/tweet?text=" + verse + " (" + reference + ")"
//     );
//   });

//   console.log("outside" + verse);
//   //$("#tweetButton").on("click",tweetVerse);
//   $("#newQuoteButton").on("click", getRandVerse);
//   getRandVerse();
// });
