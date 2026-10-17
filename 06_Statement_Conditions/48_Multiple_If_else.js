let score = -4;
if (score > 100 || score < 0) console.log("Invalid Score");
else if (score > 90) {
  console.log("Grade A , Excellent ");
} else if (score > 80 && score <= 90) {
  console.log("Grade B , Very Good");
} else if (score > 70 && score <= 80) {
  console.log("Grade C , Good");
} else if (score > 60 && score <= 70) {
  console.log("Grade D , Average");
} else if (score > 50 && score <= 60) {
  console.log("Grade E , Need Improvments");
} else if (score < 50) {
  console.log("Failed Better Luck Next Time");
}

