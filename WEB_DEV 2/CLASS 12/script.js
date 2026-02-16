console.log("Start...");

function login(username, password, cb) {
  setTimeout(() => {
    cb({
      uname: username,
      isLoggedIn: true,
      message: "Login Successful",
    });
  }, 1000);
}

function getVideoList(username, cb) {
  setTimeout(() => {
    cb(["video1", "video2", "video3"]);
  }, 2000);
}

function getVideoDetail(video, cb) {
  setTimeout(() => {
    cb({ title: video, duration: "10 min", quality: "HD" });
  }, 2000);
}

// Callback Hell Example
login("john@gmail.com", "password123", (userdata) => {
  console.log("Login Data:", userdata);

  getVideoList(userdata.uname, (videoList) => {
    console.log("Video List:", videoList);

    getVideoDetail(videoList[0], (videoDetail) => {
      console.log("Video Detail:", videoDetail);
    });
  });
});

console.log("End...");
