// let circularProgressList = document.querySelectorAll(".circular-progress");
// let progressValueList = document.querySelectorAll(".progress-value");
// let progressEndValueList = [100, 85, 100, 70, 90, 90, 80];
// let speed = 70;

// for (let i = 0; i < circularProgressList.length; i++) {
//   let circularProgress = circularProgressList[i];
//   let progressValue = progressValueList[i];
//   let currentValue = 0;
  
//   let progress = setInterval(() => {
//     let increment = (progressEndValueList[i] - currentValue) / ((speed * (progressEndValueList[i] - 0)) / 1000);
//     currentValue += increment;
//     progressValue.textContent = `${Math.round(currentValue)}%`;
//     circularProgress.style.background = `conic-gradient(#7d2ae8 ${currentValue * 3.6}deg, #ededed 0deg)`
//     if (currentValue >= progressEndValueList[i]) {
//       progressValue.textContent = `${progressEndValueList[i]}%`;
//       clearInterval(progress);
//     }
//   }, speed);
// }



//--------------------------------

let circularProgressList = document.querySelectorAll(".circular-progress");
let progressValueList = document.querySelectorAll(".progress-value");
let progressEndValueList = [100, 85, 100, 70, 90, 90, 80];
let speed = 70;

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let index = Array.from(circularProgressList).indexOf(entry.target);
      let circularProgress = circularProgressList[index];
      let progressValue = progressValueList[index];
      let currentValue = 0;

      let progress = setInterval(() => {
        let increment = (progressEndValueList[index] - currentValue) / ((speed * (progressEndValueList[index] - 0)) / 1000);
        currentValue += increment;
        progressValue.textContent = `${Math.round(currentValue)}%`;
        circularProgress.style.background = `conic-gradient(#1628E0 ${currentValue * 3.6}deg, #ededed 0deg)`
        if (currentValue >= progressEndValueList[index]) {
          progressValue.textContent = `${progressEndValueList[index]}%`;
          clearInterval(progress);
        }
      }, speed);

      observer.unobserve(entry.target);
    }
  });
});

circularProgressList.forEach(circularProgress => {
  circularProgress.style.background = `conic-gradient(#1628E0 0deg, #ededed 0deg)`
  observer.observe(circularProgress);
});

progressValueList.forEach(progressValue => {
  progressValue.textContent = "0%";
});